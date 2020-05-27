import React, {Component, useState} from "react"
import parseJwt from "./auth.js"
import { useHistory } from "react-router-dom";
import Logo from "../ntnu-logo.png";
import Endpoint from "./endpoint.js"
export default function Login(props){


    const [email, setEmail] = useState("")
    const [pass, setPass] = useState("")
    const [isAdmin, setAdmin] = useState(false)

    const history = useHistory();

    function handleUser(e, type) {
        type(
            e.target.value
        )
    }

    
    function handleClick(e){
        e.preventDefault();

        let user = isAdmin ? "employeeNo" : "reguser"

        fetchData(user, email, pass)
        .then(res => res.json())
        .then(fin => {
            if(fin.token){
                let token = parseJwt(fin.token)
                localStorage.setItem("token",JSON.stringify(token))
                
                window.location.href=window.location.origin
                
  
            }else {
                alert(fin);
            }
        })

    }

    return (
        <div className = "regForm">
        <img src={Logo} className="header-logo"  alt="NTNU - Norwegian University of Science and Technology"/>
        <h1>Login</h1>
        <form>
            <label>
                <span>I'm an admin:</span>
                <input type="checkbox" onChange={() => setAdmin(!isAdmin)}></input>
            </label><br />
            <label className="username">
                <span>Username:</span>
                <input type="text" value={email} onChange={(e) => handleUser(e, setEmail)}></input>
            </label>
            <label className="password">
                <span>Password:</span>
                <input type="password" value={pass} onChange={(e) => handleUser(e, setPass)}></input>
            </label>
            <label>
                <input type="submit" onClick={(e) => handleClick(e)}></input>
            </label>
            
        </form>
        </div>
    )
}

const fetchData = async (userType, mail, pass) => {
    
   

    const requestOptions = {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ type: userType, email: mail, password: pass })
    };
    
    const result = await fetch(
      `${Endpoint}/login.php?`, requestOptions,
    );
    
    return result

  };