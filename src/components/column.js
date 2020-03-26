import React from "react";
import {DragDropContext, Droppable, Draggable} from "react-beautiful-dnd";

class List extends React.Component {
    render() {
      const { provided, innerRef, children } = this.props;
      return (
        <div {...provided.droppableProps} ref={provided.innerRef}>
          {children}
        </div>
      );
    }
  }
  
  class Person extends React.Component {
    render() {
      
      
      
      return (
        <Draggable draggableId={this.props.task} index={this.props.index}>
        {(provided) => (
        <div
          {...provided.draggableProps}
          {...provided.dragHandleProps}
          ref={provided.innerRef}
        >{this.props.task}
        </div>)}
        </Draggable>
      );
    }
  }
  
  export default class Column extends React.Component {
    render() {
      return (
        <DragDropContext onDragEnd={() => {}}>
          <h3>My person</h3>
          <Droppable droppableId="droppable">
            {provided => (
              <List provided={provided} innerRef={provided.innerRef}>
                
                    {this.props.tasks.map((task, index) =>
                     <Person key={task} task={task} index={index} provided={provided} innerRef={provided.innerRef}></Person>
                    )
                  }
                
                {provided.placeholder}
              </List>
            )}
          </Droppable>
        </DragDropContext>
      );
    }
  }
  