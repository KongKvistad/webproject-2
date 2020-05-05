import React from "react";
import '../../App.css';
import {Spring, animated} from 'react-spring/renderprops'
import Timeline from "./timeline.js";
import DashBoxes from "./dashboxes.js"
import {PrioContext} from "../../prioContext.js"
export default class Window extends React.Component {

  static contextType = PrioContext;

  constructor(props) {
    super(props);
    this.state ={
        dbData: false,
        currPage: "internships",
        
        
    }
    
}  

  // uses WEB API abortcontroller to cancel fetch request if need be
  abortController = new AbortController()

  componentDidMount() {
  // Simple GET request using fetch
  fetch('http://192.168.64.3/php-aws-codepipeline/getdashboard.php?studentNo=3', {signal: this.abortController.signal})
      .then(response => response.json())
      .then(data => this.setState({ dbData: data}))
      .catch(err => {
        console.log("err", err.name);
       
      });
  }

  componentWillUnmount(){
    this.abortController.abort()
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
    if(!this.state.dbData){
      return <div>loading...</div>
    } else {
    const activePage = this.state.currPage;
    const cats = Object.keys(this.state.dbData.timeline)
      
      return  <div className="parentwind">
                  
                    <div className="slidewind">
                    
                      <Spring to = {{left: activePage === "internships" ? "45vw": "26.8vw"}}>
                      {({left}) => <animated.ul style={{left}}>{this.tabshandler()}</animated.ul>}
                      </Spring>
                      
                      <Spring
                      to = {{left: activePage === "internships" ? "0vw": "-100vw"}}>
                      {({left}) =>
                    
                        <animated.div style={{left}} className="catboxes">
                              {cats.map((item, idx) => 
                                <DashBoxes key={idx} data={this.state.dbData.timeline[item]} page={item}></DashBoxes>   
                              )}
                                                     
                        </animated.div>

                      }
                      </Spring>  
                    </div>
                  
               
                <Timeline timeData={this.state.dbData.timeline[activePage]}></Timeline>
                
              </div>
    }
  }
}
