import React from "react";

import '../../App.css';
import "./timeline.css"
import Node from "./node"

export default class Timeline extends React.Component {
    
    
    convertToNumb = (unix) => {
        return new Date(unix * 1000)
    }

    

    makeNodes = (param, currentTime) => {
        
        //gen numbers for the amount of ticks
        let nodeArr = [];

        for (var i = 0; i < param; i++){
            nodeArr.push(i)
        }
        
        const oneDay = 24 * 60 * 60 * 1000;
        const events = this.props.timeData.events
        events.forEach(element => {
            let nodeNum = Math.round(Math.abs(this.convertToNumb(element.date) - currentTime) / oneDay)
            nodeArr[nodeNum] ? nodeArr[nodeNum] = element : void(0) 
            
        });
        
        

        return nodeArr.map((item, idx) =>
         item.date ?
            <Node key={idx} data={item} edgeNode={false}></Node>
         : <li key={idx} className="tick"></li>
         )
    }



    render(){

        let currUnix = Math.round((new Date()).getTime() / 1000);
        let currentTime = this.convertToNumb(currUnix)
        const oneDay = 24 * 60 * 60 * 1000;

        const diffDays = Math.round(Math.abs((this.convertToNumb(this.props.timeData.endDate) - currentTime) / oneDay));
        
        return(
        
        <div className="timeline">
               
                <Node data={currUnix} edgeNode={true}></Node>
                
                <ul className = "nodes">{this.makeNodes(diffDays, currentTime)}</ul>
                
                <Node data={this.props.timeData.endDate} edgeNode={true}></Node>
            
        </div>
        );
    }


}