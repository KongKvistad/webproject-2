import React, { Component } from "react";
import ReactDOM from "react-dom";
import { DragDropContext, Droppable, Draggable } from "react-beautiful-dnd";
import {ItemStyle, ListStyle} from "../dragdrop/dbStyle.js"
import { PrioContext } from "../../prioContext.js";


export default class DragDrop extends Component {
  static contextType = PrioContext;
  
  constructor(props) {
    super(props);
    this.state = {
      items: [1,2,3],
    
    };
    this.onDragEnd = this.onDragEnd.bind(this);
  }

  componentDidMount(){
    const context = this.context;
    
    //It will get the data from context, and put it into the state.
    this.setState({ items: context[this.props.activeCat]});
  }

  
  onDragEnd(result) {
    const context = this.context
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
    
    this.props.activeCat === "internships" ? context.reordIntern(items) : context.reordProj(items) 
    context.setSave(true)
  }

  saveHandler = () => {
    alert("replace this with post request");
    this.context.setSave(false)
    
  }

  // Normally you would want to split things out into separate components.
  // But in this example everything is just done in one place for simplicity
  render() {
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
              {this.state.items.map((item, index) => (
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
                      {" #" + (index + 1) + " - " + item.title}
                    </div>
                  )}
                </Draggable>
              ))}
              {provided.placeholder}
            </div>
          )}
        </Droppable>
      </DragDropContext>
      <button onClick={() => this.saveHandler()} className ={this.context.savePos ? "btn-active" : "btn-inactive"}>Save</button>
      </div>
    
    );
  }
}



// a little function to help us with reordering the result
const reorder = (list, startIndex, endIndex) => {
  const result = Array.from(list);
  const [removed] = result.splice(startIndex, 1);
  result.splice(endIndex, 0, removed);

  return result;
};


