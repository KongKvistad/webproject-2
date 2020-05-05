import React from "react";
import '../../App.css';
import {PrioContext} from "../../prioContext.js"


export default class Desc extends React.Component {

   

    constructor(props) {
        super(props);
        
    }
    componentDidMount(){
        
    }
    makeBtn =(con) =>{

        let activeCat = this.props.activeCat

        if(this.props.userType  === "studentNo"){
            return (
            <button onClick={() => {con.setPrio({"id": con.popData.id, "title": con.popData.title}, activeCat);
            con.setPop(false)}}>
            add to list</button>
            )
        }
        
 
    }
    
    render() {
        return(
            <PrioContext.Consumer>
            {(context) => (
                <div className={context.popData ? "popup-open" : "popup-closed"}>
                    <p onClick = {() => context.setPop(false)}>Lukk</p>
                    <div className="title">
                        <h1>{context.popData.name}</h1>
                        <p>{context.popData.owner}</p>
                    </div>
                    <div className="info">
                        <p>Start date: {context.popData.dato}</p>
                        <p>POC: {context.popData.poc}</p>
                        <p>Tags: {context.popData.tags}</p>
                    </div>
                    <div className="content">
                        <h2>Description</h2>
                        <p>{context.popData.description}</p>
                    </div>
                    {this.makeBtn(context)}
              
                </div>
            )}
                
            </PrioContext.Consumer>
        )
    }

}