import React, {useState, useEffect, useContext} from "react";
import { DragDropContext } from 'react-beautiful-dnd';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  Redirect,
  useHistory,
  useLocation
} from "react-router-dom";

import Home from "./components/home.js"

import parseJwt from "./components/auth.js"
import { UserContext } from "./UserContext.js"

import {PrioContext} from "./prioContext.js"


//
// Although the page does not ever refresh, notice how
// React Router keeps the URL up to date as you navigate
// through the site. This preserves the browser history,
// making sure things like the back button and bookmarks
// work properly.

// consult state diagram if cryptic (👁 ͜ʖ👁)

export default function App() {
  const [auth, setAuth] = useState(false);

  
  //auth onload for root component
  useEffect(() => {
    
    let lsToken = localStorage.getItem('token')
    let token = window.location.pathname
    let tokenChk = parseJwt(token)
   
    
    //option 1: exists in localstorage
    if(lsToken){
      let data = JSON.parse(lsToken) 
      console.log("hit")
      setAuth(data)
    } 
    //option 2: token is supplied in url
    else if (tokenChk.hasOwnProperty("studentNo") || tokenChk.hasOwnProperty("employeeNo") || tokenChk.hasOwnProperty("contactName")){
      localStorage.setItem('token', JSON.stringify(tokenChk));
      setAuth(tokenChk)
    } 
    else{
      setAuth("reguser")
    }
    // let data = JSON.parse(localStorage.getItem('token'))
     
  
  },[]);
  if(auth){
    return (
      <UserContext.Provider value={{
        value: auth,
        setVal: (inp) => setAuth(inp)}}>
      <Router>
      <Route path= {["/","/home","/:token"]}>
        <Home></Home>
      </Route>
      </Router>
      </UserContext.Provider>
     
      );
  }
  else {
    return(<h1></h1>)
  }
  
}



