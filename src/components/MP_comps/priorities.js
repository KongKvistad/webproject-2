import React from "react";
import '../../App.css';
import {PrioContext} from "../../prioContext.js"


export default class Priorities extends React.Component {

    constructor(props) {
        super(props);
    }

    componentDidMount(){
       
    }


    conHandler = (data) => {
        return data.map(x => (x.name))
    }

    render(){
        return(
            <PrioContext.Consumer>
            {(context) => (
                <div className="prioList">{this.conHandler(context.internPrio)}</div>
            )}
            
            </PrioContext.Consumer>
        )
    }


}