import React, {useState, useEffect, Component} from "react"
import DragDrop from "../dragdrop/dragDropList"
import {PrioContext} from "../../prioContext.js"


export default function DashBoxes(props) {
    
    
    const coord = Object.keys(props.data)[1];
    
    return(

        

        <div className="box-row">
            <div className="dashbox">
                <h2>Contract</h2>
                <div className="lowHalf">
                <p>You have not recieved a contract yet</p>
                </div>
            </div>
            <div className="dashbox">
            <h2>My Priorities</h2>
            <DragDrop activeCat = {props.page} ></DragDrop>
            </div>
            <div className="dashbox">
                <h2>{coord}</h2>
                <ul className="lowHalf">
                    <li>{props.data[coord].name}</li>
                    <li>{props.data[coord].room}</li>
                    <li>{props.data[coord].email}</li>
                </ul>
            </div>
        </div>
    )
}

