import React from "react";
import '../../App.css';
import {PrioContext}from "../../prioContext.js"
import { ItemStyle } from "../dragdrop/dbStyle";

export default class BoxComp extends React.Component {
   
    componentDidMount(){
        
    }
    tagshandler = (item) => {
      
      if(this.props.activeCat === "students" || this.props.activeCat === "companies"){
        return <h1>lol</h1>
      } else {
        return item.tags.map((x, idx) => <ul className="tagslist"><li key={idx}>{x}</li></ul>)
      }
    }

    studView= () => {
      return this.props.user === "s_id" ?"boxes-min" : "boxes"
    }
    render() {
        
        
        return (
            <div className={this.studView()}>
              {this.props.data.map((item, idx) =>
              <PrioContext.Consumer key={idx}>
                {(context) => (
                <div key = {idx} className="box" onClick = {() => context.setPop(item)}>
                  <h2 key={"heading" + idx}>{item.name}</h2>
                  <h3 key={"owner" + idx}>by {item.owner}</h3>
                  {this.tagshandler(item)}
                </div>
                )}
              </PrioContext.Consumer>
              )}
            </div>
                                                                    
          
        );
      }
}