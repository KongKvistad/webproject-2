import React, {useState, useEffect, useContext} from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  Redirect,
  useHistory,
  useLocation
} from "react-router-dom";

import Canvas from "./MP_comps/canvas.js";
import Window from "./DB_comps/window.js"
import { UserContext } from "../UserContext.js";

export default function Home(props) {
    
    const user = useContext(UserContext)
    const userType = Object.keys(user)[0]
    

    if(userType === "s_id" || userType === "a_id"){
      return (
        <Router>
        <Redirect to="/dashboard"></Redirect>    
        
        <ul className="navbar">
        <li><Link to="/dashboard">Dashboard</Link></li>
        <li><Link to="/marketplace">Marketplace</Link></li>
        </ul>
        
        <Switch>
          <Route exact path="/marketplace">
            <Canvas userData={userType}></Canvas>
          </Route>
          <Route exact path="/dashboard">
            <Window userData={user[userType]}></Window>
          </Route>
        </Switch>
        
        </Router>
        );
    } else {
      return (
        <Router>
        <Redirect to="/marketplace"></Redirect>    
        <Link to="/marketplace">Marketplace</Link>
        <Link to="/marketplace">{user === "business" ? "Log out" : "login"}</Link>
        
        <Route exact path="/marketplace">
            
            <Canvas></Canvas>
        </Route>
        
        </Router>
      )
    }

    
}