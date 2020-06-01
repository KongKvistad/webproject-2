import React, {useState, useEffect, useContext, Component} from "react"
import { UserContext } from "../../UserContext";
import Endpoint from "../endpoint.js"

const GroupOrPoc = (props) => {
    

    const userData = useContext(UserContext)
    const user = userData.value
    const setUser = userData.setVal
    
    const [group, setGroup] = useState([]);
    const [newMemb, setMemb] = useState([]);
    
    useEffect(()=> {
        console.log(user)
        if(props.data.groups){
            setGroup({
                leader : props.data.groups[0],
                member1 : props.data.groups[1],
                member2 : props.data.groups[2],
                isGroup: props.data.isGroup
            })
        }
    },[])
    
    
    
    
    
    
    if(props.type === "projects"){
        return (
            <div className="dashbox groupBox">
                <div>
                {group.isGroup ? <h2>My Group</h2> : <h2>make Group</h2>}
                {group.isGroup ? <button className ="groupbuttons" onClick={() => destroyGroup()}>Destroy</button> : void(0)}
                </div>
                <div className="lowHalf">
                {mapMembers(group)}
                </div>
            </div>
        )
    } else{
        return(
            <div className="dashbox">
                        
                <h2>POC</h2>
                <p className="lowHalf justText">
                {props.data.poc}
                </p>
            </div>
        )
    }
    
    function destroyGroup(){
        deleteData(user, null, "destroy")
        .then(res => res.json())
        .then(json => {
            alert(json)
            if(json === true){
                window.location.href = window.location.origin;
            }
                
        })
    }




    function updateMember(e, stateType) {
        
        setMemb({
          ...newMemb,
          [stateType]: {email: e.target.value}
        });
      };

    function addNew(stateType, member){
        
        fetchData(user, stateType, member)
        .then(res => res.json())
        .then(json => {
            alert(json)
            if(json === true){
                setGroup({
                    ...group,
                    [stateType]: member,
                    isGroup: true
                  });
            }
                
        })
        
        


        
    }

    function removeMemb(member){
        deleteData(user, member, "remove")
        .then(res => res.json())
        .then(json => {
            alert(json)
            if(json === true){
                setGroup({
                    ...group,
                    [member] : undefined
                })
            }
                
        })
        
        
    }

    function mapMembers(group){
        
        const cats = Object.keys(group)
        cats.pop()
        
        
        return(
                
                cats.map((item) => (
                    
                    group[item] && group[item].id === user.studentNo
                    ?
                    <span>{group[item].email}</span>
                    :
                    group[item]
                     ?
                     <div>
                        <span>{group[item].email}</span>
                        <button className ="groupbuttons" onClick={() => removeMemb(item)}>Remove</button>
                     </div>
                     :
                     <div>
                     <input placeholder={"add@ntnu.no"} onChange={e => updateMember(e, item)}/>  
                     <button className ="groupbuttons" onClick={() => addNew(item, newMemb[item])}>Add</button>
                     </div> 

                    
                ))
                
                
             )
        
    }
}
export default GroupOrPoc;


const fetchData = async (user, stateType, member) => {
    
    const userType = Object.keys(user)[0]
    const userNo = user[userType]

    const requestOptions = {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ [stateType]: member })
    };
    
    const result = await fetch(
      `${Endpoint}/manageGroups.php?${userType}=${userNo}&method=add`, requestOptions,
    );
    
    return result

  };

  //deltype can either be destroy or remove
  const deleteData = async (user, member, delType) => {
    
    const userType = Object.keys(user)[0]
    const userNo = user[userType]

    const requestOptions = {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: delType === "remove" ? JSON.stringify({ [member]: true }) : JSON.stringify({ destroy: true }) 
    };
    
    const result = await fetch(
      `${Endpoint}/manageGroups.php?${userType}=${userNo}&method=${delType}`, requestOptions,
    );
    
    return result

  };