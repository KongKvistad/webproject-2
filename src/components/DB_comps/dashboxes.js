import React, {useState, useEffect} from "react"
import DragDrop from "../dragDropList"



export default function DashBoxes(props) {
    
    const prioList = props.data.priorites
    const listData = {
        columns: {
            "column-1": {
                id: "column-1",
                title: "todo",
                taskIds: ["firstChoice", "secondChoice", "thirdChoice"]
            }
        },
    
        columnOrder: ["column-1"],
    
        tasks: {
            "firstChoice": prioList.firstChoice,
            "secondChoice": prioList.secondChoice,
            "thirdChoice": prioList.thirdChoice
        }
        };

    
    
    return(
        <div className="box-row">
            <div className="dashbox">
                <DragDrop items={listData}></DragDrop>
            </div>
            <div className="dashbox"></div>
            <div className="dashbox"></div>
        </div>
    )
}

