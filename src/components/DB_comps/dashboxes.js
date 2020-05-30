import React, {useState, useEffect, Component, useContext} from "react"
import DragDrop from "../dragdrop/dragDropList"
import {PrioContext} from "../../prioContext.js"
import {userContext} from "../../UserContext.js"
import GroupOrPoc from "./groupOrPoc.js"

export default function DashBoxes(props) {
    
    
   
    
    const help = props.data.coordinator

    if(props.userType === "studentNo"){
        return(


            <div className="box-row">
                <GroupOrPoc type ={props.page} data={props.data}></GroupOrPoc>
                
                <div className="dashbox">
                <h2>My Priorities</h2>
                <DragDrop activeCat = {props.page} ></DragDrop>
                </div>
                
                <div className="dashbox">
                    <h2>{props.page === "internships" ? "Coordinator" : "Mentor"}</h2>
                    {help ? <ul className="lowHalf">
                        <li>{help.name}</li>
                        <li>{help.phoneNo}</li>
                        <li>{help.email}</li>
                    </ul> : void(0)}
                </div>
            </div>
        )
    } else {
        return (
            <div className="box-row">
                <div className="dashbox">
                    <h2>pitches</h2>
                        <p className="lowHalf justText">
                            {"There are " + props.data.pitches + " new " + props.page + " for review"}        
                        </p>
                    
                </div>
                <div className="dashbox">
                    <h2>students</h2>
                    <p className="lowHalf justText">
                    {"There are " + props.data.studApply + " students that havent applied yet "} 
                            </p>
                    
                </div>
                
                <div className="dashbox">
                    <h2>companies</h2>
                    <p className="lowHalf justText">
                    {"There are " + props.data.compApply + " companies that havent prioritized applicants yet "}
                    </p>
                    
                </div>
            </div>
        )
    }
    
}



