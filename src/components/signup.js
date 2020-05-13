import React, {Component, useState, useContext} from "react"
import parseJwt from "./auth.js"
import { useHistory } from "react-router-dom";
import { UserContext } from "../UserContext"
export default function Signup(props){



    
    const [poc, setPoc] = useState("")
    const [phone, setPhone] = useState("")
    const [email, setEmail] = useState("")
    const [pass, setPass] = useState("")
    const [name, setName] = useState("")
    const [location, setLoc] = useState("")
    const [desc, setDesc] = useState("")


    const userData = useContext(UserContext)
    const user = userData.value
    const setUser = userData.setVal
   

    const history = useHistory();

    function handleUser(e, type) {
        if(e.target.value.includes("æ") || e.target.value.includes("ø") || e.target.value.includes("å")){
            alert("no norwegian chars, please")
        } else {
            type(
                e.target.value
            )
        }
        
        
        
    }

    
    function handleClick(e){
        e.preventDefault();


        // write handling for special chartracters



        let data = {
            poc: poc,
            phone: phone,
            email: email,
            pass: pass,
            name: name,
            location: location,
            desc: desc
        } 
     

        fetchData(data)
        .then(res => res.json())
        .then(fin => {
            if(fin.token){
                let token = parseJwt(fin.token)
                localStorage.setItem("token", JSON.stringify(token))
                
                
                window.location.href=window.location.origin
                
  
            }else {
                alert(fin);
            }
        })

    }

    return (
   
        <form>
            <label>
                
            </label>
            <label className="mail">
                <span>mail</span>
                <input type="text" value={email} onChange={(e) => handleUser(e, setEmail)}></input>
            </label>
            <label className="username">
                <span>Company Name</span>
                <input  type="text" value={name} onChange={(e) => handleUser(e, setName)}></input>
            </label>
            <label className="password">
                <span>password</span>
                <input type="password" value={pass} onChange={(e) => handleUser(e, setPass)}></input>
            </label>
            <label className="conTlf">
                <span>telephone</span>
                <input type="text" value={phone} onChange={(e) => handleUser(e, setPhone)}></input>
            </label>
            <label className="POC">
                <span>Person of contact</span>
                <input type="Text" value={poc} onChange={(e) => handleUser(e, setPoc)}></input>
            </label>
            <label className="location">
                <span>Location</span>
                <input type="text" value={location} onChange={(e) => handleUser(e, setLoc)}></input>
            </label>
            <label className="description">
                <span>description</span>
                <input type="textarea" value={desc} onChange={(e) => handleUser(e, setDesc)}></input>
            </label>

            <label>
                <input type="submit" onClick={(e) => handleClick(e)}></input>
            </label>
            
        </form>
    
    )
}

const fetchData = async (data) => {
    
   

    const requestOptions = {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(data)
    };
    
    const result = await fetch(
      `http://192.168.64.3/php-aws-codepipeline/signup.php?`, requestOptions,
    );
    
    return result

  };