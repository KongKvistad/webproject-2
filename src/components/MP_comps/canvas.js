import React from "react";
import '../../App.css';
import BoxComp from "./boxcomp.js"
import Desc from "./description.js"
import Priorities from "./priorities.js"
import mapCheckBoxes from "../helper_func/mapcheckboxes.js"
import DragDrop from "../dragdrop/dragDropList.js"
import getData from "../helper_func/getdata.js"

import { PrioContext } from "../../prioContext.js"
import { getDefaultNormalizer } from "@testing-library/react";

export default class Canvas extends React.Component {
    constructor(props) {
        super(props);
        this.state ={
            mpData: {},
            currPage: "internships",
            checkinternships: true,
            checkprojects: true,
            
            
            
        } 
    }
    componentWillMount(){
        this.setState({mpData: getData(this.props.userType)})
    }
    
    
    tabshandler = () => {
        return Object.keys(this.state.mpData).map((item, index) => (
            <li key={index}
            className="tab" 
            onClick={() => this.setState({currPage :item})}
            >{item}</li>
        ))
    }

    boxhandler = () => {
        if(this.state.currPage === "students"){
            return mapCheckBoxes(this.state, "students")
            
        } else if (this.state.currPage === "companies"){
            return mapCheckBoxes(this.state, "companies")
        }
         else {
            return this.state.mpData[this.state.currPage].map((item, index) => (item))
        }
        
    }

    renderPrio = (cats) => {
        if (this.props.userType === "s_id" ) {
            return cats.map((item, index) => 
               this.state.currPage === item ? <DragDrop key={index} data={this.state.mpData[item]} activeCat={item} page={"marketplace"}/> : void(0)
            )
        } 
                
                        
    }

    checkHandler = (box) => {
        if (box.name === "internships"){
            this.setState({checkinternships: !this.state.checkinternships})
        } else if (box.name === "projects"){
            this.setState({checkprojects: !this.state.checkprojects})
        }

    }

    
    
    render() {
     
    const cats = Object.keys(this.state.mpData)
        
      return (
        <div>
            <h1 className="canvas">Marketplace</h1>
            <ul>{this.tabshandler()}</ul>
            
                <Desc data={this.boxhandler()} userType= {this.props.userType} activeCat={this.state.currPage}></Desc>
                <div className="frame">
                <div className = "toolbar">
                <div className="search">
                    <form>
                        <label htmlFor="search">Search:</label>
                        <input type="text" id="search" name="search" placeholder="Search..."></input>
                    </form>
                    <p>Filter</p>
                    <button>New +</button>
                </div>
                {this.state.currPage === "students" || this.state.currPage === "companies" ? 
                    <div className="checkboxes">
                        <label htmlFor="internships">internships:</label>
                        <input type="checkbox" id="check-int" name="internships" checked={this.state.checkinternships} onChange ={(event) =>this.checkHandler(event.target)}></input>
                        <label htmlFor="projects">projects</label>
                        <input type="checkbox" id="chec-proj" name="projects" checked={this.state.checkprojects} onChange={(event) =>this.checkHandler(event.target)}></input>
                    </div> :
                    void(0)
                }
                </div>
                    <div className="mp-container">
                    
                        <BoxComp 
                         activeCat={this.state.currPage}
                         user= {this.props.userType} 
                         data ={this.boxhandler()}>

                        </BoxComp>
                        {this.renderPrio(cats)}
                    </div>
                </div>
        </div>
        
      );
      
    }
  }

  