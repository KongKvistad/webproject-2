import React from "react";
import '../../App.css';
import {Spring, animated} from 'react-spring/renderprops'
import Timeline from "./timeline.js";
import DashBoxes from "./dashboxes.js"

export default class Window extends React.Component {
  constructor(props) {
    super(props);
    this.state ={
        dbData: {
            
            "Coordinator":
                {
                "name": "terje",
                "room": "256",
                "email": "terje@ntnu.no"
                },
            "timeline":{
              
              "internships": 
              {
                "endDate": "1593560006",
                "events":
                  [ 
                    {
                    "date":"1588721606",
                    "desc": "testymctest",
                    "where": "brighthouse"
                    },
                  
                    {
                    "date":"1592649384",
                    "desc": "testymctest",
                    "where": "brighthouse"
                    }              
                  ],
                  "priorites":
                  {
                  "firstChoice": "12",
                  "secondChoice": "16",
                  "thirdChoice": "20",
                  },
              },
              "projects": 
                {
                  "endDate": "1590662184",
                  "events":
                  [
                    {
                    "date":"1588721606",
                    "desc": "testymctest",
                    "where": "brighthouse"
                    },
                  
                    {
                    "date":"1592649384",
                    "desc": "testymctest",
                    "where": "brighthouse"
                    }              
                  ],
                  "priorites":
                  {
                  "firstChoice": "1",
                  "secondChoice": "4",
                  "thirdChoice": "156",
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
  
  activeLi = (index) => {
    if (this.state.currPage === "internships" && index === 0){
      return true

    } else if (this.state.currPage === "projects" && index === 1){
      return true
    }
  }


  tabshandler = () => {
    return Object.keys(this.state.dbData.timeline).map((item, index) => (
      <Spring key={index}
      to={{transform: this.activeLi(index) ? "scale(2)" : "scale(1)"}}
      >
        {({transform}) => 
        <animated.li 
        style={{transform}} 
        key={index} 
        onClick={() => this.setState({currPage :item})}
        className={index === 1 ? "proj-li" : "intern-li"}
        >{item}</animated.li>}
      </Spring>
    ))
  }


  render() {
    const activePage = this.state.currPage;
      
      return  <div className="parentwind">
                
                  
                  <Spring
                    to = {{transform: activePage === "internships" ?  "translateX(0vw)" : "translateX(-100vw)",
                           left: activePage === "internships" ? "45vw": "26.8vw"}}
                    >
                    {({transform, left}) => 
                    <div className="slidewind">
                      <animated.ul style={{left}}>{this.tabshandler()}</animated.ul> 
                      <animated.div style={{transform}} className="catboxes">
                        <DashBoxes data={this.state.dbData.timeline[activePage]}></DashBoxes>
                        <DashBoxes data={this.state.dbData.timeline[activePage]}></DashBoxes>
                        
                      </animated.div>
                      
                    </div>}
                  </Spring>
                
                <Timeline timeData={this.state.dbData.timeline[activePage]}></Timeline>
              </div>
    }
  }