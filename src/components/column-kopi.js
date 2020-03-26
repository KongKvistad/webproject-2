import React from "react";
import {Droppable, Draggable} from "react-beautiful-dnd";
export default class Column extends React.Component {

    
    render(){
        console.log(this.props)
        return( 
            <div>
                <h1>{this.props.column.title}</h1>
                <Droppable droppableId={this.props.column.id}>
                {provided => (

                
                <ul
                ref={provided.innerRef}
                {...provided.droppableProps}
                >
                {this.props.tasks.map((task, index) => <Task key={task} task={task} index={index}></Task> )}
                {provided.placeholder}
                </ul>
                )}
                </Droppable>
            </div>
            
        )
    }

}


class Task extends React.Component{
    
    render(){
        
        return (
        <Draggable draggableId={this.props.task} index={this.props.index}>
        {(provided) => (
            <li
            {...provided.draggableProps}
            {...provided.dragHandleProps}
            innerRef={provided.innerRef}
            >{this.props.task}</li>
            )}
        </Draggable>
        )
    }
}