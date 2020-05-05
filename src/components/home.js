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

  
  
  const [internPrio, setIntern] = useState(false);
  const [projPrio, setProj] = useState(false);
  const [savePos, setSave] = useState(false);



 
    useEffect( () =>{
      const fetchData = async () => {
        const result = await fetch(
          `http://ec2-13-48-129-131.eu-north-1.compute.amazonaws.com/priorities.php?${userType}=${user[userType]}`,
        );
          return result
        
      };
   
      fetchData().then(res => res.json())
      .then(json => {
        
        setIntern(json.internships)
        setProj(json.projects)
      })
      
      // fetch(`http://192.168.64.3/php-aws-codepipeline/priorities.php?${userType}=${user[userType]}`)
      //   .then(response => response.json())
      //   .then(data => {
          
      //     setIntern(data.internships)
      //     setProj(data.projects)
        
      //   });
    },[])
    

    
    
    const [PopData, setPop] = useState(false);
    

    const user = useContext(UserContext)
    
    const userType = Object.keys(user)[0]
    
    

  
    if(userType === "studentNo" || userType === "employeeNo"){


      
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
            <Canvas userType={userType} userData={user[userType]}></Canvas>
          </Route>
          <Route exact path="/dashboard">
          
            <Window userType={userType} userData={user[userType]} ></Window>
           
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
        <PrioContext.Provider value={{
          //what data to show in the popup
          popData: PopData,
          setPop: (inp) => setPop(inp),
        }}>
        <Route exact path="/marketplace">
            
            <Canvas></Canvas>
        </Route>
        </PrioContext.Provider>
        </Router>
      )
    }

    // else if (userType === "employeeNo"){
    //   return (
    //     <Router>
    //     <Redirect to="/login"></Redirect>
    //         <div>
    //           <p>login</p>
    //           <input></input>
    //         </div>
    //     </Router>
    //   );
    // } 
    
}

