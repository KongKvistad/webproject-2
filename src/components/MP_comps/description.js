import React from "react";
import '../../App.css';
import { PopContext } from "../../popupContext.js"


export default class Desc extends React.Component {

    // static contextType = PopContext

    constructor(props) {
        super(props);
        
    }
    componentDidMount(){
        console.log(this)
    }
    decideUser =(con) =>{
        return con.user === "s_id" ?
        <button onClick={() => con.setApp(con.state.name)}>add to list</button> :
        void(0)
    }
    
    render() {
        return(
            <PopContext.Consumer>
            {(context) => (
                <div className={context.state ? "popup-open" : "popup-closed"}>
                    <p onClick = {() => context.setDesc(false)}>Lukk</p>
                    <div className="title">
                        <h1>{context.state.name}</h1>
                        <p>{context.state.owner}</p>
                    </div>
                    <div className="info">
                        <p>Start date: {context.state.dato}</p>
                        <p>POC: {context.state.poc}</p>
                        <p>Tags: {context.state.tags}</p>
                    </div>
                    <div className="content">
                        <h2>Description</h2>
                        <p>{context.state.description}</p>
                    </div>
                    {this.decideUser(context)}
              
                </div>
            )}
                
            </PopContext.Consumer>
        )
    }

}