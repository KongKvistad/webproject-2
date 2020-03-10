import React from "react";
import '../../App.css';
import BoxComp from "./boxcomp.js"

export default class Canvas extends React.Component {
    constructor(props) {
        super(props);
        this.state ={
            mpData: {
                "internships":[
                    {
                    "name": "testverdi",
                    "dato": "22-08-2020",
                    "sjef": "mordi"
                    },
                    
                    {
                    "name":"monsterfabrikken",
                    "dato": "18-08-2020",
                    "sjef": "max mekker"   
                    }
                ],

                "projects":[
                    {
                    "name": "skrukork for skrullinger",
                    "dato": "22-08-2020",
                    "sjef": "mordi"
                    },
                    
                    {
                    "name": "bachelor #1",
                    "dato": "18-08-2020",
                    "sjef": "max mekker"            
                    }
                ]
            },
            currPage: "internships"
            
        } 
    }

    componentDidMount(){
        console.log(this.state.mpData)
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
        return this.state.mpData[this.state.currPage].map((item, index) => (item))
    }

    render() {

        
      return (
        <div>
            <h1 className="canvas">marketplace</h1>
            <ul>{this.tabshandler()}</ul>
            
            <BoxComp data ={this.boxhandler()}></BoxComp>
        </div>
      );
    }
  }