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
    
    
    render() {
        return(
            <PopContext.Consumer>
            {(context) => (
                <div className={context.state ? "popup-open" : "popup-closed"}>
                <p onClick = {() => context.setDesc(false)}>{context.state.owner}</p>
                </div>
            )}
                
            </PopContext.Consumer>
        )
    }

}