
import React, { Component } from "react";
import ReactDOM from "react-dom";
import { DragDropContext, Droppable, Draggable } from "react-beautiful-dnd";
import {ItemStyle, ListStyle} from "../dragdrop/dbStyle.js"
import {UserContext} from "../../UserContext"
import Endpoint from "../endpoint.js"


export default class BiPrio extends Component {

  static contextType = UserContext;

  constructor(props) {
    super(props);
    this.state = {
      items: props.prioList,
      canSave: false
    };
    this.onDragEnd = this.onDragEnd.bind(this);
  }

  componentDidMount(){
    const company = this.context.value.name
    if(this.props.type){
      getData(this.props.type, company, this.props.postId)
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
    alert("replace this with post request");
    this.setState({canSave: false})
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
                      {" #" + (index + 1) + " - " + item.name}
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

const getData = async (type, company, postId) => {
  const result = await fetch(
    `${Endpoint}/businessPrio.php?type=${type}&company=${company}&postId=${postId}`
  );
  return result
};

