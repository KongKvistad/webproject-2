import React, {useState, useEffect, useContext, Component} from "react"
import { UserContext } from "../../UserContext";


const GroupOrPoc = (props) => {
    

    const user = useContext(UserContext)
    
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
            <div className="dashbox">
                <div>
                {group.isGroup ? <h2>My Group</h2> : <h2>make Group</h2>}
                {group.isGroup ? <button onClick={() => destroyGroup()}>destroy</button> : void(0)}
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
                <div className="lowHalf">
                
                </div>
            </div>
        )
    }
    
    function destroyGroup(){
        deleteData(user, null, "destroy")
        .then(res => res.json())
        .then(json => {
            alert(json)
            if(json === true){
                window.location.reload(true);
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
                        <button onClick={() => removeMemb(item)}>remove</button>
                     </div>
                     :
                     <div>
                     <input placeholder={"add@ntnu.no"} onChange={e => updateMember(e, item)}/>  
                     <button onClick={() => addNew(item, newMemb[item])}>add</button>
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
      `http://192.168.64.3/php-aws-codepipeline/manageGroups.php?${userType}=${userNo}&method=add`, requestOptions,
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
      `http://192.168.64.3/php-aws-codepipeline/manageGroups.php?${userType}=${userNo}&method=${delType}`, requestOptions,
    );
    
    return result

  };