import React from "react";
import '../../App.css';
import { PopContext } from "../../popupContext.js"

export default class BoxComp extends React.Component {
   
    componentDidMount(){
        console.log(this.props)
    }
    tagshandler = (item) => {
      return item.map((x, idx) => <p key={idx}>{x}</p>)
    }
    render() {
        
        
        return (
          <div className="boxes">

              {this.props.data.map((item, idx) =>
              <PopContext.Consumer key={idx}>
              {(context) => (
              <div key = {idx} className="box" onClick = {() => context.setDesc(item)}>
                <h2 key={"heading" + idx}>{item.name}</h2>
                <h3 key={"owner" + idx}>by {item.owner}</h3>
                {this.tagshandler(item.tags)}
              </div>
              )}
              </PopContext.Consumer>
              )
              }
                                                                      
          </div>
        );
      }
}