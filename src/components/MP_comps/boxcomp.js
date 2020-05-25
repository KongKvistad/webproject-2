import React from "react";
import '../../App.css';
import {PrioContext}from "../../prioContext.js"
import { ItemStyle } from "../dragdrop/dbStyle";

export default class BoxComp extends React.Component {
   
    

    checkApplied(entity){
      if(entity.priorities[this.props.radioVal].length === 3){
        return <div>applied</div>
      } else {
        return <div>not applied</div>
      }
    }


    tagshandler = (item) => {
      
      let activeCat = this.props.activeCat

      if(activeCat === "students"){
          return (
          <div>
            <h3>{item.studyProgramme}</h3>
            {this.checkApplied(item)}
            
          </div>
          );
      } else if (activeCat === "companies"){
        return(
        <div>
          
          {this.checkApplied(item)}
          
        </div>
        );
      } else {
        return (
         <ul className="tagslist">
            {item.tags.split(",").map((x, idx) => <li key={idx}>{x}</li>)}
         </ul> 
        )
        
        
      }
    }

    studView= () => {
      return this.props.user === "studentNo" ?"boxes-min" : "boxes"
    }
    render() {
        if(this.props.activeCat === "students" ){
          if(this.props.radioVal === "projects"){
            return(
              <BachelorApplications data = {this.props.data}/>
            );
          } else {
            return (
              <div className={this.studView()}>
                {this.props.data.map((item, idx) =>
                
                  
                  <div key = {idx} className="box">
                    <h2 key={"heading" + idx}>{item.name}</h2>
                    {this.tagshandler(item)}
                  </div>
                  
                
                )}
              </div>
            );
          }
        }
          
        
        else if(this.props.activeCat === "companies"){
          return (
            <div className="boxes">
              {this.props.data.map((item, idx) =>
                <div key = {idx} className="box">
                <h2 key={"heading" + idx}>{item.name}</h2>
                {this.tagshandler(item)}
                </div>
              )}
            </div>
          );
        } else if(this.props.activeCat === "pitched"){
          return (
            <div className={this.studView()}>
              {this.props.data[this.props.radioVal].map((item, idx) =>
              <PrioContext.Consumer key={idx}>
                {(context) => (
                <div key = {idx} className="box" onClick = {() => context.setPop(item)}>
                  <h2 key={"heading" + idx}>{item.title}</h2>
                  <h3 key={"owner" + idx}>by {item.author}</h3>
                  {this.tagshandler(item)}
                </div>
                )}
              </PrioContext.Consumer>
              )}
            </div>
        );
        } else {
            return (
              <div className={this.studView()}>
                {this.props.data.map((item, idx) =>
                <PrioContext.Consumer key={idx}>
                  {(context) => (
                  <div key = {idx} className="box" onClick = {() => context.setPop(item)}>
                    <h2 key={"heading" + idx}>{item.title}</h2>
                    <h3 key={"owner" + idx}>by {item.author}</h3>
                    {this.tagshandler(item)}
                  </div>
                  )}
                </PrioContext.Consumer>
                )}
              </div>
                                                                      
            
          );
        }
        
      }
}

const BachelorApplications = (props) => {
  
  function hasApplied(entity) {
    return entity.priorities.filter(x => x.id !== null) < 3 ? <p>not Applied</p> : <p>Applied</p>
  }
  
  return(
    <div className="boxes">
      {props.data.map((item, idx) =>
        <div key = {idx} className="box">
        <h2 key={"heading" + idx}> Group #{item.id}</h2>
        <h3 key={"meta" + idx}> Leader: {item.leaderName}</h3>
        {hasApplied(item)}
        </div>
      )}
    </div>
  );
}