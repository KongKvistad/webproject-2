import React from "react";
import '../../App.css';
import {PrioContext}from "../../prioContext.js"
import { ItemStyle } from "../dragdrop/dbStyle";
import BiPrio from "../dragdrop/businessPrio.js"

export default class BoxComp extends React.Component {
   
    constructor(props) {
      super()
      this.state={
        isOpen: false,
      }
    }

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

    handleActive = (param) => {
      let revParam = param + "Active"

      return this.props.data[revParam] === "y" ? <span className="activebanner">applications ready</span> : void 0
    }


    openPicker = (event, param) => {
      
      event.preventDefault()
      console.log(event.target.className)
      if(event.target.className === "mypostWind-proj" || event.target.className === "mypostWind-int" || event.target.className === "box") {
        this.setState({isOpen: param})    // handle
      }
      
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
                  <h3 key={"owner" + idx}>by {item.companyName}</h3>
                  {this.tagshandler(item)}
                </div>
                )}
              </PrioContext.Consumer>
              )}
            </div>
        );
        } else if(this.props.activeCat === "my_posts"){
          return (
            <div className="mypost-boxes">
              <h3>Internships</h3>
              <div className="mypost-row">
                {this.props.data.internships.map((item, idx) =>
                  <PrioContext.Consumer key={idx}>
                    {(context) => (
                      <div className="mypostwraper">
                        <div key={idx} className="box" onClick={this.props.data.intActive === "y" ? (e) => this.openPicker(e, "internships") : () => context.setPop(item)}>
                          <h2 key={"heading" + idx}>{item.title}</h2>
                          <h3 key={"owner" + idx}>by {item.companyName}</h3>
                          {this.tagshandler(item)}
                          {this.handleActive("int")}
                        </div>
                        <div className={this.state.isOpen === "internships" ? "mypostWind-int" : "uploadPop-invis"} onClick={(e) => this.openPicker(e, false)}>
                          <div className="mypost-prio">
                            <BiPrio postId={item.id} type={this.props.data.intActive === "y" ? "internships" : false} prioList={[{ id: 1, name: "asd" }, { id: 2, name: "brad" }]}></BiPrio>
                          </div>
                        </div>
                      </div>
                    )}
                  </PrioContext.Consumer>
                )}

              </div>



              <h3>Projects</h3>
              <div className="mypost-row">
              {this.props.data.projects.map((item, idx) =>
                <PrioContext.Consumer key={idx}>
                {(context) => (
                <div className="mypostwraper">
                <div key = {idx} className="box" onClick = {this.props.data.projActive === "y" ? (e) => this.openPicker(e, "projects") :() => context.setPop(item)}>
                  <h2 key={"heading" + idx}>{item.title}</h2>
                  <h3 key={"owner" + idx}>by {item.companyName}</h3>
                  {this.tagshandler(item)}
                  {this.handleActive("proj")}
                </div>
                <div className={this.state.isOpen === "projects" ? "mypostWind-proj" : "uploadPop-invis" } onClick={(e) =>this.openPicker(e, false)}>
                  <div className="mypost-prio">
                    <BiPrio postId={item.id} type={ this.props.data.projActive === "y" ? "projects" : false} prioList={[{id: 1, name: "asd"}, {id: 2, name: "brad"}]}></BiPrio>
                  </div>
                </div>
                </div>
                )}
              </PrioContext.Consumer>
              )}
              
              </div>
              
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
                    <h3 key={"owner" + idx}>by {item.companyName}</h3>
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