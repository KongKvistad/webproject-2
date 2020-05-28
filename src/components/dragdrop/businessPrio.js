
import React, { Component } from "react";
import ReactDOM from "react-dom";
import { DragDropContext, Droppable, Draggable } from "react-beautiful-dnd";
import {ItemStyle, ListStyle} from "../dragdrop/dbStyle.js"
import {UserContext} from "../../UserContext"
import Endpoint from "../endpoint.js"
import MyEditor from "../texteditor"


export default class BiPrio extends Component {

  static contextType = UserContext;

  constructor(props) {
    super(props);
    this.state = {
      items: props.prioList,
      canSave: false,
      uploadPop: false
    };
    this.onDragEnd = this.onDragEnd.bind(this);
  }

  componentDidMount(){
    const company = this.context.value.name
    if(this.props.type){
      getData(this.props.type, this.props.postId)
      .then(res => res.json())
      .then(fin => {
        console.log(fin)
        this.setState({items: fin.students})
      })
    }
  }

  componentDidUpdate(prevProps, prevState){
    if(prevState.items !== this.state.items){
      this.setState({canSave: true})
    }
    
  
   
  }
  

  onDragEnd(result) {
    // dropped outside the list
    if (!result.destination) {
      return;
    }

    const items = reorder(
      this.state.items,
      result.source.index,
      result.destination.index
    );

    this.setState({
      items
    });
  }

  saveHandler = () => {
    postData(this.props.type,this.props.postId,this.state.items)
    .then(res=> res.json())
    .then(fin => {
      if(fin){
        this.setState({canSave: false})
      }
    })
    
  }


  setPop = (appId) => {
    this.setState({uploadPop: appId})
  }
  // Normally you would want to split things out into separate components.
  // But in this example everything is just done in one place for simplicity
  render() {

    


    if(!this.state.items){
      return <h1>loading...</h1>
    } else {
    return (
      <div className="dragList">
      <DragDropContext onDragEnd={this.onDragEnd}>
        <Droppable droppableId="droppable">
          {(provided, snapshot) => (
            <div
              {...provided.droppableProps}
              ref={provided.innerRef}
              style={ListStyle(snapshot.isDraggingOver)}
            >
              {this.state.items.map((item, index) => (
                <Draggable key={item.name} draggableId={"myPostDrag-"+item.name} index={index}>
                  {(provided, snapshot) => (
                    <div
                      ref={provided.innerRef}
                      {...provided.draggableProps}
                      {...provided.dragHandleProps}
                      style={ItemStyle(
                        snapshot.isDragging,
                        provided.draggableProps.style
                      )}
                    >
                      { this.props.type === "internships" ? <span>{`${index + 1} - ${item.name}`}</span> :
                       <span className="select-wrapper">
                        <span>#{`${index + 1} - group number: ${item.groupNo}`}</span>
                        <span>{`leader: ${item.name}`}</span>
                       </span>
                       }
                       {this.props.type === "internships" ? <span onClick={() => this.setPop(item.studentNo)} className="uploadField">␣</span> : void 0 }
                    </div>
                  )}
                </Draggable>
              ))}
              {provided.placeholder}
            </div>
          )}
        </Droppable>
      </DragDropContext>
      <button onClick={() => this.saveHandler()} className ={this.state.canSave ? "btn-active" : "btn-inactive"}>Save</button>
      <ApplicationPop postId={this.props.postId} isOpen = {this.state.uploadPop} closeWind={this.setPop} postType={this.props.type}></ApplicationPop>
      </div>
    );
  }
  }
}



// a little function to help us with reordering the result
const reorder = (list, startIndex, endIndex) => {
  const result = Array.from(list);
  const [removed] = result.splice(startIndex, 1);
  result.splice(endIndex, 0, removed);

  return result;
};

const ApplicationPop = (props) => {

  

  return(
    <div className={props.isOpen ? "uploadPop-vis" : "uploadPop-invis"}>
      <span onClick={() => props.closeWind(false)} className="exit">x</span>
      <MyEditor userId={props.isOpen} postId={props.postId} postType={props.postType} postOrApp={false} editable={false}></MyEditor>
    </div>
  )
}


const getData = async (type, postId) => {
  const result = await fetch(
    `${Endpoint}/businessPrio.php?type=${type}&postId=${postId}`
  );
  return result
};

const postData = async (type, postId, data) => {
    

  const requestOptions = {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({data})
  };
  
  const result = await fetch(
    `${Endpoint}/businessPrio.php?type=${type}&postId=${postId}`, requestOptions,
  );
  
  return result

};