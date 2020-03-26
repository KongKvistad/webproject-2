import React, { Component } from "react";
import ReactDOM from "react-dom";
import { DragDropContext, Droppable, Draggable } from "react-beautiful-dnd";

import Column from "./column";


export default class DragDrop extends Component {
  constructor(props) {
    super(props);
    

        

    
  }
    

    onDragEnd = result => {
        
    }

  render() {
    
      return (
        <DragDropContext onDragEnd={this.onDragEnd}
        
        >
      {this.props.items.columnOrder.map((columnId) => {
          const column = this.props.items.columns[columnId]
          const tasks = column.taskIds.map(taskId => this.props.items.tasks[taskId])
          return <Column key={column.id} column={column} tasks={tasks}></Column>
      })}
      </DragDropContext>
      )
  }
}