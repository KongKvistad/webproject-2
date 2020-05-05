import React, {useState, useEffect, Component} from "react"
import DragDrop from "../dragdrop/dragDropList"
import {PrioContext} from "../../prioContext.js"
import { useContext } from "react"


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
                <div className="dashbox"></div>
                <div className="dashbox"></div>
                <div className="dashbox"></div>
            </div>
        )
    }
    
}


const GroupOrPoc = (props) => {
    

    
    
    const [group, setGroup] = useState([]);
    const [newMemb, setMemb] = useState([]);
    
    useEffect(()=> {
        if(props.data.groups){
            setGroup({
                leader : props.data.groups[0],
                member1 : props.data.groups[1],
                member2 : props.data.groups[2]
            })
        }
    },[])
    
    
    
    
    
    
    if(props.type === "projects"){
        return (
            <div className="dashbox">
                        
                {group.leader ? <h2>My Group</h2> : <h2>make goup</h2>}
                <div className="lowHalf">
                {mapMembers(group)}
                </div>
            </div>
        )
    } else{
        return(
            <div className="dashbox">
                        
                <h2>POC</h2>
                <div className="lowHalf">
                
                </div>
            </div>
        )
    }
    
    

    function updateField(e, stateType) {
        setGroup({
          ...group,
          [stateType]: {name: e.target.value}
        });
      };

    function addNew(e, stateType){
        setMemb({
            ...newMemb,
            [stateType]: {name: e.target.value}
          });
    }


    function mapMembers(group){
        
        const cats = Object.keys(group)
        
        
        return(
                cats.map((item) => <div>
                {
                    group[item]
                     ?
                     <input value={group[item].name} onChange={e => updateField(e, [item])}/>
                     :
                     <input placeholder={"add@ntnu.no"} onChange={e => addNew(e, [item])}/>
                         
                     
                }
                <button onClick={(e) =>console.log(e.target)}>add</button>
                </div>
                )
                // <div>
                //    {group.member2
                //     ?
                //     <input value={group.member2.name} onChange={e => updateField(e, "member2")}/>
                //     :
                //     <div>
                //     <input placeholder={"add@ntnu.no"} onChange={e => addNew(e, "member2")}/>
                //         <button onClick={(e) =>console.log(e.target)}>add</button>
                //     </div>
                //    }
                    
                   
                    
                     
                        
                    
                   
                //     {/* <button onClick={(e) =>console.log(e.target)}>remove</button> */}
                // </div>
                )
            
    
        

    

        
        
        
    }
}
