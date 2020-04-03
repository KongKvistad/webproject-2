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
            
            "timeline":{
              
              "internships": 
              {
                "endDate": "1593560006",
                "Coordinator":
                {
                "name": "terje",
                "room": "256",
                "email": "terje@ntnu.no"
                },
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
                  [
                  {
                    "id": "1",
                    "content": "say what again mothefucka"
                  },
                  {
                    "id": "3",
                    "content": "These are not the droids you are looking for"
                  },
                  {
                    "id": "14",
                    "content": "skrukork for skrullinger"
                  },
                  ]
              },
              "projects": 
                {
                  "endDate": "1590662184",
                  "Advisor":
                  {
                  "name": "terje",
                  "room": "256",
                  "email": "terje@ntnu.no"
                  },
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
                  [
                  {
                    "id": "8",
                    "content": "skrukork for skrullinger"
                  },
                  {
                    "id": "12",
                    "content": "monsterfabrikken"
                  },
                  {
                    "id": "201",
                    "content": "skrukork for skrullinger"
                  },
                  ]
                
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
                
                  
                  
                    <div className="slidewind">
                    <Spring
                    to = {{left: activePage === "internships" ? "45vw": "26.8vw"}}
                    >
                    {({left}) => 
                      <animated.ul style={{left}}>{this.tabshandler()}</animated.ul>
                    }
                    </Spring>
                    <Spring
                    to = {{left: activePage === "internships" ? "0vw": "-100vw"}}
                    >
                    {({left}) =>
                      <animated.div style={{left}} className="catboxes">
                        <DashBoxes data={this.state.dbData.timeline.internships}></DashBoxes>
                        <DashBoxes data={this.state.dbData.timeline.projects}></DashBoxes>
                        
                      </animated.div>
                    }
                    </Spring>  
                    </div>
                  
                
                <Timeline timeData={this.state.dbData.timeline[activePage]}></Timeline>
              </div>
    }
  }