import React from "react";
import '../../App.css';
import BoxComp from "./boxcomp.js"
import Desc from "./description.js"
import Priorities from "./priorities.js"

import { PopContext } from "../../popupContext.js"

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
                    "tags": ["ux", "css", "innsight"],
                    "poc": "arne jensen",
                    "description": [
                        "Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia, looked up one of the more obscure Latin words, consectetur, from a Lorem Ipsum passage, and going through the cites of the word in classical literature, discovered the undoubtable source. Lorem Ipsum comes from sections 1.10.32 and 1.10.33 of (The Extremes of Good and Evil) by Cicero, written in 45 BC. This book is a treatise on the theory of ethics, very popular during the Renaissance. The first line of Lorem Ipsum, comes from a line in section 1.10.32.",
                        "The standard chunk of Lorem Ipsum used since the 1500s is reproduced below for those interested. Sections 1.10.32 and 1.10.33 from  by Cicero are also reproduced in their exact original form, accompanied by English versions from the 1914 translation by H. Rackham."
                    ]
                    },
                    
                    {
                    "name":"monsterfabrikken",
                    "dato": "18-08-2020",
                    "owner": "max mekker",
                    "tags": ["ux", "css", "innsight"],
                    "poc": "arne jensen",
                    "description": [
                        "Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia, looked up one of the more obscure Latin words, consectetur, from a Lorem Ipsum passage, and going through the cites of the word in classical literature, discovered the undoubtable source. Lorem Ipsum comes from sections 1.10.32 and 1.10.33 of (The Extremes of Good and Evil) by Cicero, written in 45 BC. This book is a treatise on the theory of ethics, very popular during the Renaissance. The first line of Lorem Ipsum, comes from a line in section 1.10.32.",
                        "The standard chunk of Lorem Ipsum used since the 1500s is reproduced below for those interested. Sections 1.10.32 and 1.10.33 from  by Cicero are also reproduced in their exact original form, accompanied by English versions from the 1914 translation by H. Rackham."
                    ]
                    },

                    {
                    "name":"monsterfabrikken",
                    "dato": "18-08-2020",
                    "owner": "max mekker",
                    "tags": ["ux", "css", "innsight"],
                    "poc": "arne jensen",
                    "description": [
                        "Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia, looked up one of the more obscure Latin words, consectetur, from a Lorem Ipsum passage, and going through the cites of the word in classical literature, discovered the undoubtable source. Lorem Ipsum comes from sections 1.10.32 and 1.10.33 of (The Extremes of Good and Evil) by Cicero, written in 45 BC. This book is a treatise on the theory of ethics, very popular during the Renaissance. The first line of Lorem Ipsum, comes from a line in section 1.10.32.",
                        "The standard chunk of Lorem Ipsum used since the 1500s is reproduced below for those interested. Sections 1.10.32 and 1.10.33 from  by Cicero are also reproduced in their exact original form, accompanied by English versions from the 1914 translation by H. Rackham."
                    ]
                    },

                    {
                    "name":"monsterfabrikken",
                    "dato": "18-08-2020",
                    "owner": "max mekker",
                    "tags": ["ux", "css", "innsight"],
                    "poc": "arne jensen",
                    "description": [
                        "Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia, looked up one of the more obscure Latin words, consectetur, from a Lorem Ipsum passage, and going through the cites of the word in classical literature, discovered the undoubtable source. Lorem Ipsum comes from sections 1.10.32 and 1.10.33 of (The Extremes of Good and Evil) by Cicero, written in 45 BC. This book is a treatise on the theory of ethics, very popular during the Renaissance. The first line of Lorem Ipsum, comes from a line in section 1.10.32.",
                        "The standard chunk of Lorem Ipsum used since the 1500s is reproduced below for those interested. Sections 1.10.32 and 1.10.33 from  by Cicero are also reproduced in their exact original form, accompanied by English versions from the 1914 translation by H. Rackham."
                    ]
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
            currPage: "internships",
            descOpen: false,
            apply: []
            
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
            <PopContext.Provider value={{ 
                state: this.state.descOpen, 
                setDesc: (input) => this.setState({descOpen: input}),
                
                applicationList: this.state.apply,
                setApp: (input) => this.state.apply.push(input),
                
                user: this.props.userData,

            }}>
                <Desc data={this.boxhandler()}></Desc>
                <BoxComp data ={this.boxhandler()}></BoxComp>
                {this.props.userData === "s_id" ? <Priorities/> : void(0)}
            </PopContext.Provider>
            
        </div>
      );
    }
  }