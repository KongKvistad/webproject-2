import React from "react";
import '../../App.css';
import {PrioContext} from "../../prioContext.js"
import {useHistory} from "react-router-dom";
import MyEditor from "../texteditor.js"
import Endpoint from "../endpoint.js"

export default class Desc extends React.Component {

   

    constructor(props) {
        super(props);
        
    }
    componentDidMount(){
        
    }


    approvePost = (context) => {

        let selection = context.popData

        selection.radioVal = this.props.radioVal

        postData(selection, "Approve")
        .then(res => res.json())
        .then(fin => {
            if(typeof(fin) === "string"){
                alert(fin)
            } else {
                
                window.location.href=window.location.origin + "/marketplace"
            }
        })

    }



    makeBtn =(con) =>{

        let activeCat = this.props.activeCat

        if(this.props.userType  === "studentNo"){
            return (
            <div>
                <button className = "addtolist" onClick={() => {con.setPrio({"id": con.popData.id, "title": con.popData.title}, activeCat);
                con.setPop(false)}}>
                Add to list</button>
            </div>
            )
        } else if (this.props.userType === "employeeNo" && this.props.activeCat === "pitched"){
            return(
                <div>
                 
                    <button className="approve" onClick={()=> this.approvePost(con)}>Approve</button>
                </div>
            );
        }
        
 
    }
    
    render() {
        const postType = this.props.activeCat === "pitched" ? this.props.radioVal : this.props.activeCat

        return(
            <PrioContext.Consumer>
            {(context) => (
                <div className={context.popData ? "popup-open" : "popup-closed"}>
                    <p onClick = {() => context.setPop(false)}>Close</p>
                    <div className="title">
                        <h2>{context.popData.title}</h2>
                        <p>{context.popData.companyName}</p>
                    </div>
                    <div className="info">
                        <p>Start date: {context.popData.startDate}</p>
                        <p>POC: {context.popData.author}</p>
                        <p>Tags: {context.popData.tags}</p>
                    </div>
                    <div className="content">
                        <h2>Description</h2>
                        <MyEditor postId={context.popData.id} 
                        postType={this.props.activeCat === "my_posts" ? context.popData.type : postType} 
                        postOrApp = {true} 
                        editable={this.props.activeCat === "pitched" || this.props.activeCat === "my_posts" ? true : false}></MyEditor>
                    </div>
                    {this.makeBtn(context)}
              
                </div>
            )}
                
            </PrioContext.Consumer>
        )
    }

}


const postData = async (data, mode) => {
    
   

    const requestOptions = {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({data})
    };
    
    const result = await fetch(
      `${Endpoint}/managePost.php?mode=${mode}`, requestOptions,
    );
    
    return result

  };