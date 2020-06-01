import React, { Component, useContext } from "react";
import {UserContext} from "../../UserContext.js";
import ReactDOM from "react-dom";
import { DragDropContext, Droppable, Draggable } from "react-beautiful-dnd";
import {ItemStyle, ListStyle} from "../dragdrop/dbStyle.js"
import { PrioContext } from "../../prioContext.js";
import MyEditor from "../texteditor.js"
import Endpoint from "../endpoint.js"

export default class DragDrop extends Component {
  static contextType = PrioContext;
  
  constructor(props) {
    super(props);
    this.state = {
      items: false,
      uploadPop: false,
    
    };
    this.onDragEnd = this.onDragEnd.bind(this);
    
  }

  



  
  onDragEnd(result) {
    const context = this.context
    // dropped outside the list
    if (!result.destination) {
      return;
    }

    const items = reorder(
      context[this.props.activeCat],
      result.source.index,
      result.destination.index
    );

   
    
    this.props.activeCat === "internships" ? context.reordIntern(items) : context.reordProj(items) 
    this.props.activeCat === "internships" ? context.setSave1(true) : context.setSave2(true)
    
  }

  saveHandler = (user, savePos, data, cat, groupNo) => {
    
      
      let group = groupNo ? groupNo : "none"; 
      

      postData(user.value.studentNo, data, cat, group)
      .then(res => res.json())
      .then(fin => {
          if (!fin){
            alert("somethign went wrong!")
          } else {
            console.log(fin)
            this.context[savePos](false)
          }
      })
    
    
    
    
    
  }

  setPop = (appId) => {
    this.setState({uploadPop: appId})
  }
  // Normally you would want to split things out into separate components.
  // But in this example everything is just done in one place for simplicity
  render() {
    const context = this.context
    
    let saveType = this.props.activeCat === "internships" ? "setSave1" : "setSave2"
    let savePos = this.props.activeCat === "internships" ? "savePos1" : "savePos2"


    //!this.context.projects && this.props.activeCat === "projects"
    if(!context.projects){
      return <p>loading</p>
    }
    else if (typeof(context.projects) === "string" && this.props.activeCat === "projects"){
      return <p className="lowHalf justText">{context.projects}</p>
    }
    else {
      
      return (
        
        
        <div className={this.props.page === "marketplace" ? "dragList list-min" : "dragList" }>
        <DragDropContext onDragEnd={this.onDragEnd}>
          <Droppable droppableId="droppable">
            {(provided, snapshot) => (
              <div
                {...provided.droppableProps}
                ref={provided.innerRef}
                style={ListStyle(snapshot.isDraggingOver)}
              >
                {context[this.props.activeCat].map((item, index) => (
                  <Draggable key={item.id} draggableId={"draggable-"+item.id} index={index}>
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
                        {item.title !== null &&
                         item.title.split("").length > 20 ?
                        " #" + (index + 1) + " - " +  item.title.split("").splice(0,20).join("") + "..." :
                        " #" + (index + 1) + " - " + item.title}
                        {item.title === null || this.props.activeCat === "projects" ? void 0 : <span onClick={() => this.setPop(item.id)} className="uploadField">␣</span>}
                      </div>
                    )}
                  </Draggable>
                ))}
                {provided.placeholder}
              </div>
            )}
          </Droppable>
        </DragDropContext>
        
        <UserContext.Consumer>
        {user => (
        <button 
          onClick={!context[savePos] ? ()=> alert("nothing to save") : () => this.saveHandler(user, saveType, this.context[this.props.activeCat], this.props.activeCat, context.groupNo)} 
          className ={context[savePos] ? "btn-active" : "btn-inactive"}>Save</button>
        )}
        </UserContext.Consumer>
        
        <ApplicationPop isOpen = {this.state.uploadPop} closeWind={this.setPop} postType={this.props.activeCat}></ApplicationPop>
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
      <MyEditor postId={props.isOpen} postType={props.postType} postOrApp={false} editable={true} application={true}></MyEditor>
    </div>
  )
}



const postData = async (userNo, data, cat, group) => {
    
   

  const requestOptions = {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({data})
  };
  
  const result = await fetch(
    `${Endpoint}/apply.php?userNo=${userNo}&type=${cat}&groupNo=${group}`, requestOptions,
  );
  
  return result

};

