import React from "react";
import '../../App.css';
import { PopContext } from "../../popupContext.js"

export default class BoxComp extends React.Component {
   
    componentDidMount(){
        console.log(this.props)
    }
    tagshandler = (item) => {
      return item.map((x, idx) => <ul className="tagslist"><li key={idx}>{x}</li></ul>)
    }
    render() {
        
        
        return (
          <div className="mp-container">
            <div className="search">
              <form>
                <label for="search">Search:</label>
                <input type="text" id="search" name="search" value="Search..."></input>
              </form>
              <p>Filter</p>
              <button>New +</button>
            </div>
            <div  className="boxes">
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
          </div>
        );
      }
}