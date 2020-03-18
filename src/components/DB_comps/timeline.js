import React from "react";
import '../../App.css';


export default class Timeline extends React.Component {
    constructor(props){
        super(props);

        this.state ={
            endTime: "",
            startTime: "",
        }
    }
    
    componentDidMount(){
        let currUnix = Math.round((new Date()).getTime() / 1000);
        let endUnix = this.props.timeData.endDate;

        this.setState({
            endTime: new Date(endUnix * 1000).toString(),
            startTime: new Date(currUnix * 1000).toString()
        })

        console.log(new Date(endUnix * 1000).toString())
    }


    render(){
        return(
        <div className="timeline">
            <span>{this.state.startTime}</span>
            <span>{this.state.endTime}</span>
        </div>
        );
    }


}