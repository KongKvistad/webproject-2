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
    console.log(user)

    if(user === "s_id" || user === "a_id"){
      return (
        <Router>
        <Redirect to="/dashboard"></Redirect>    
        
        <Link to="/dashboard">Dashboard</Link>
        <Link to="/marketplace">Marketplace</Link>
        
        <Switch>
          <Route exact path="/marketplace">
            <Canvas></Canvas>
          </Route>
          <Route exact path="/dashboard">
            <Window></Window>
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