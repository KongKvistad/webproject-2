import React from "react";
import '../../App.css';
import BoxComp from "./boxcomp.js"
import Desc from "./description.js"
import Priorities from "./priorities.js"
import mapCheckBoxes from "../helper_func/mapcheckboxes.js"
import DragDrop from "../dragdrop/dragDropList.js"
import getData from "../helper_func/getdata.js"
import Search from "../MP_comps/search.js"
import Form from "./form.js"

import { PrioContext } from "../../prioContext.js"
import { getDefaultNormalizer } from "@testing-library/react";

export default class Canvas extends React.Component {
    constructor(props) {
        super(props);
        this.state ={
            mpData: [1],
            admProjList: false,
            currPage: "internships",
            radioVal: "internships",
            isFormOpen: false,
            
            
        } 
    }


    // uses WEB API abortcontroller to cancel fetch request if need be
    abortController = new AbortController()

    componentDidMount(){
        //aws: `http://ec2-13-48-129-131.eu-north-1.compute.amazonaws.com/getmarketplace.php?${this.props.userType}=${this.props.userData}`  http://192.168.64.3/php-aws-codepipeline/getmarketplace.php?${this.props.userType}=${this.props.userData}
        fetch(`http://ec2-13-48-129-131.eu-north-1.compute.amazonaws.com/getmarketplace.php?${this.props.userType}=${this.props.userData}`, {signal: this.abortController.signal})
        .then(response => response.json())
        .then(res => this.setState({
            mpData: res.entries,
            admProjList:res.studProjPrio}))
        .catch(err => {
            console.log("err", err.name);
           
          });
    }


    

    componentWillUnmount(){
        this.abortController.abort()
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
        //special handling for projects
        if(this.state.currPage === "students" && this.state.radioVal === "projects"){
            return this.state.admProjList;
        }
        
        else if(this.state.currPage === "students" || this.state.currPage === "companies" || this.state.currPage === "pitched"){
            return this.state.mpData[this.state.currPage]
            
        } else {
            return this.state.mpData[this.state.currPage].map((item, index) => (item))
        }
        
    }

    renderPrio = (cats) => {
        if (this.props.userType === "studentNo" ) {
            return cats.map((item, index) => 
               this.state.currPage === item ? <DragDrop key={index} data={this.state.mpData[item]} activeCat={item} page={"marketplace"}/> : void(0)
            )
        } else {
            return void(0)
        }
                
                        
    }

    
    handleForm(){
        this.setState({isFormOpen: !this.state.isFormOpen});
    } 
    
    
    render() {
     
    const cats = Object.keys(this.state.mpData)
        
      
          if(this.state.mpData.length === 1){
              return <h1>loading...</h1>
          } else{
            return(
                <div className="main">
                    <h1>Marketplace</h1> 

                    <ul>{this.tabshandler()}</ul>
                    
                    <div className={this.state.isFormOpen ? "form-visible" : "form-invisible"}>
                        <Form></Form>
                    </div>
                    
                    <Desc data={this.boxhandler()} userType={this.props.userType} activeCat={this.state.currPage} radioVal={this.state.radioVal}></Desc>
                    
                    <div className="frame">
                        <div className="toolbar">
                            <div className="search">
                                <form onSubmit={this.onSubmit}>
                                    
                                    <input type="text" id="search" name="search" onChange={this.handleChange} placeholder="Search..."></input>
                                </form>
                            </div>
                            {/* <Search items={this.state.mpData[this.state.currPage]} ></Search> */}

                            {this.state.currPage === "students" || this.state.currPage === "companies" || this.state.currPage === "pitched" ?
                                <div className="checkboxes">
                                    <label htmlFor="internships">internships:</label>
                                    <input type="radio" id="check-int" name="internships" checked={this.state.radioVal === "internships"} onChange={(event) => this.setState({ radioVal: event.target.name })}></input>
                                    <label htmlFor="projects">projects</label>
                                    <input type="radio" id="chec-proj" name="projects" checked={this.state.radioVal === "projects"} onChange={(event) => this.setState({ radioVal: event.target.name })}></input>
                                </div> :
                                void (0)
                            }
                            <button onClick={() => this.handleForm()}>New +</button>
                        </div>
                        <div className="mp-container">

                            <BoxComp
                                activeCat={this.state.currPage}
                                radioVal={this.state.radioVal}
                                user={this.props.userType}
                                data={this.boxhandler()}>

                            </BoxComp>
                            {this.renderPrio(cats)}

                        </div>
                    </div>
                </div>
            )  
          }
        
        
      
      
    }
    
  }

  