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
                    <h2>Add student</h2>
                        <ul className="lowHalf">
                            
                        </ul>
                    
                </div>
                <div className="dashbox">
                    <h2>Assign mentor</h2>
                        <ul className="lowHalf">
                            
                        </ul>
                    
                </div>
                
                <div className="dashbox">
                    <h2>Sort applications</h2>
                        <ul className="lowHalf">
                            
                        </ul>
                    
                </div>
            </div>
        )
    }
    
}



