import React, {useState, useEffect} from "react"
import {useSpring, animated} from 'react-spring'

export default function Node(props) {
    
    const [styledata, set, stop] = useSpring(() => ({opacity: 0}))
    

    function convertToNumb(unix){
        return new Date(unix * 1000)
    }

    if(!props.edgeNode){
        return (
            <li className="tick hasNode"  onMouseEnter={() => set({opacity: 1})} onMouseLeave={()=> set({opacity: 0})}>
                <animated.div style={styledata}  className ="nodeCont">
                    <h3>{props.data.title}</h3>
                    <span>{convertToNumb(props.data.time).toDateString()}</span>
                    <span>{props.data.place}</span>
                </animated.div>
            </li>
        )
    } else {
        return(
            <div className={props.edgeNode === "Current date" ? "tick start" : "tick end"} onMouseEnter={() => set({opacity: 1})} onMouseLeave={()=> set({opacity: 0})}>
                <animated.div style={styledata} className="nodeCont">
                    <h3>{props.edgeNode}</h3>
                    <span>{convertToNumb(props.data).toDateString()}</span>
                </animated.div>
            </div>
        );
    }
    
}