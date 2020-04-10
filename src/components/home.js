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

import {PrioContext} from "../prioContext.js"
import { UserContext } from "../UserContext.js";

import Canvas from "./MP_comps/canvas.js";
import Window from "./DB_comps/window.js"
import injectPrio from "./helper_func/injectprio.js"

export default function Home(props) {
  let internships=
  [
    {
      "id": "1",
      "name": "Testverdi"
    },
    {
      "id": "3",
      "name": "These are not the droids you are looking for"
    },
    {
      "id": "14",
      "name": "skrukork for skrullinger"
    },
  ]
  let projects = 
      [
        {
          "id": "201",
          "name": "hallo i luken"
        },
        {
          "id": "8",
          "name": "bachelor #1"
        },
        {
          "id": "12",
          "name": "stuffy"
        },
      ]
      

    

    const [internPrio, setIntern] = useState(internships);
    const [projPrio, setProj] = useState(projects);
    const [PopData, setPop] = useState(false);
    const [savePos, setSave] = useState(false);

    const user = useContext(UserContext)
    
    const userType = Object.keys(user)[0]
    
    

  
    if(userType === "s_id" || userType === "a_id"){
      return (
        <Router>
        <Redirect to="/dashboard"></Redirect>    
        
        <ul className="navbar">
        <li><Link to="/marketplace">Marketplace</Link></li>
        <li><Link to="/dashboard">Dashboard</Link></li>
        
        </ul>
        
        <Switch>
        <PrioContext.Provider value={{
            //get internships prios + change prio
            internships: internPrio,
            reordIntern: (inp) => setIntern(inp),

            //get projects prios + change prio
            projects: projPrio,
            reordProj: (inp) => setProj(inp),

            //what data to show in the popup
            popData: PopData,
            setPop: (inp) => setPop(inp),
            
            //add / remove priorities to list
            setPrio: (inp, type) => injectPrio(inp, type, internPrio, projPrio, setSave),
            
            savePos: savePos,
            setSave: (bool) => setSave(bool)
            
          }}>
          <Route exact path="/marketplace">
            <Canvas userType={userType}></Canvas>
          </Route>
          <Route exact path="/dashboard">
          
            <Window userData={user[userType]}></Window>
           
          </Route>
          </PrioContext.Provider>
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

