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
                    "name": "Testverdi",
                    "dato": "22-08-2020",
                    "owner": "Vinmonopolet",
                    "tags": ["ux", "css", "innsight"]
                    },
                    
                    {
                    "name":"monsterfabrikken",
                    "dato": "18-08-2020",
                    "owner": "max mekker",
                    "tags": ["ux", "css", "innsight"]
                    },

                    {
                    "name":"monsterfabrikken",
                    "dato": "18-08-2020",
                    "owner": "max mekker",
                    "tags": ["ux", "css", "innsight"]
                    },

                    {
                    "name":"monsterfabrikken",
                    "dato": "18-08-2020",
                    "owner": "max mekker",
                    "tags": ["ux", "css", "innsight"]
                    }
                ],

                "projects":[
                    {
                    "name": "skrukork for skrullinger",
                    "dato": "22-08-2020",
                    "owner": "vinmonopolet",
                    "tags": ["ux", "css", "innsight"]
                    },
                    
                    {
                    "name": "bachelor #1",
                    "dato": "18-08-2020",
                    "owner": "max mekker",
                    "tags": ["ux", "css", "innsight"]             
                    },

                    {
                    "name": "skrukork for skrullinger",
                    "dato": "22-08-2020",
                    "owner": "vinmonopolet",
                    "tags": ["ux", "css", "innsight"]
                    },
                        
                    {
                    "name": "bachelor #1",
                    "dato": "18-08-2020",
                    "owner": "max mekker",
                    "tags": ["ux", "css", "innsight"]             
                    }
                ]
            },
            currPage: "internships"
            
        } 
    }

    // componentDidMount(){
    //     console.log(this.state.mpData)
    // }
    
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
            <h1 className="canvas">Marketplace</h1>
            <ul>{this.tabshandler()}</ul>
            
            <BoxComp data ={this.boxhandler()}></BoxComp>
        </div>
      );
    }
  }