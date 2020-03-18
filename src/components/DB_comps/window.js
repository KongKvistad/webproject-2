import React from "react";
import '../../App.css';

import Timeline from "./timeline.js";

export default class Window extends React.Component {
  constructor(props) {
    super(props);
    this.state ={
        dbData: {
            "priorites":
                {
                "firstChoice": "12",
                "secondChoice": "16",
                "thirdChoice": "20",
                },
            "Coordinator":
                {
                "name": "terje",
                "room": "256",
                "email": "terje@ntnu.no"
                },
            "timeline":{
              
              "internships": 
              {
                "endDate": "1589798937",
                "events":
                {
                "date":"1592649384",
                "desc": "testymctest",
                "where": "brighthouse"
                },
              
              },
                
              "projects": 
                {
                  "endDate": "1590662184",
                  "events":
                  {
                  "date":"1590662184",
                  "desc": "we be pullin' up in dis jam",
                  "where": "brighthouse"
                  },
                
                }
              }
                
        
                
        },
        currPage: "internships"
        
    } 
}  

  componentDidMount(){
    console.log(this)
  }
  
  tabshandler = () => {
    return Object.keys(this.state.dbData.timeline).map((item, index) => (
      <li key={index}
      className="tab" 
      onClick={() => this.setState({currPage :item})}
      >{item}</li>
  ))
  }


  render() {
    const activePage = this.state.currPage;
      
      return  <div>
                <ul>{this.tabshandler()}</ul>;
                <Timeline timeData={this.state.dbData.timeline[activePage]}></Timeline>
              </div>
    }
  }