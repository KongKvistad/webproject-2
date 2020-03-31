import React from "react";
import '../../App.css';
import { PopContext } from "../../popupContext.js"


export default class Priorities extends React.Component {

    constructor(props) {
        super(props);
    }

    componentDidMount(){
        console.log("look!", this);
    }

    render(){
        return(
            <PopContext.Consumer>
            {(context) => (
                <div>{context.applicationList}</div>
            )}
            
            </PopContext.Consumer>
        )
    }


}