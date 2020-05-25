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
import About from "../about.js"
import Login from "./login.js"
import Signup from "./signup.js"
import RegForm from "./MP_comps/regForm.js"

export default function Home(props) {

  
  
  const [internPrio, setIntern] = useState(false);
  const [projPrio, setProj] = useState(false);
  const [savePos1, setSave1] = useState(false);
  const [savePos2, setSave2] = useState(false);
  
  const [groupNo, setGroupNo] = useState(false);

  const [PopData, setPop] = useState(false);
    

    const userData = useContext(UserContext)
    const user = userData.value
    const setUser = userData.setVal
    
    const userType = user.hasOwnProperty("contactName") ? "name" : user.hasOwnProperty("employeeNo") ? "employeeNo" : user.hasOwnProperty("studentNo") ? "studentNo" : "reguser"

    
 
    useEffect( () =>{
<<<<<<< HEAD
      const fetchData = async () => {
        const result = await fetch(
          //aws: http://ec2-13-48-129-131.eu-north-1.compute.amazonaws.com/priorities.php?${userType}=${user[userType]}  __ http://192.168.64.3/php-aws-codepipeline/priorities.php?${userType}=${user[userType]}
          `http://ec2-13-48-129-131.eu-north-1.compute.amazonaws.com/priorities.php?${userType}=${user[userType]}`,
        );
          return result
        
      };
   
      /* fetchData().then(res => res.json())
=======
      
      fetchPrio().then(res => res.json())
>>>>>>> fee6e81c21949532985e41841dd1985b0b79636e
      .then(json => {
        
        setIntern(json.internships)
        setProj(json.projects)
        setGroupNo(json.groupNo)
      }) 
    },[])
    

    const fetchPrio = async () => {
      const result = await fetch(
        //aws: http://ec2-13-48-129-131.eu-north-1.compute.amazonaws.com/priorities.php?${userType}=${user[userType]}
        `http://192.168.64.3/php-aws-codepipeline/priorities.php?${userType}=${user[userType]}`,
      );
        return result
      
<<<<<<< HEAD
      fetch(`http://ec2-13-48-129-131.eu-north-1.compute.amazonaws.com/priorities.php?${userType}=${user[userType]}`)
        .then(response => response.json())
        .then(data => {
          
          setIntern(data.internships)
          setProj(data.projects)
        
        });
    },[])
=======
    };
 
>>>>>>> fee6e81c21949532985e41841dd1985b0b79636e
    

    
    
    
    
    

  
    if(userType === "studentNo" || userType === "employeeNo"){


      
      return (
        <Router>
        <Redirect to="/dashboard"></Redirect>    
        
        <ul className="navbar">
        <Link to="/about">Log Out</Link>
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
            setPrio: (inp, type) => injectPrio(inp, type, internPrio, projPrio, setSave1, setSave2),
            
            savePos1: savePos1,
            setSave1: (bool) => setSave1(bool),

            savePos2: savePos2,
            setSave2: (bool) => setSave2(bool),


            fetchPrio: () => fetchPrio(),
            
          }}>
          <Route exact path="/marketplace">
            <Canvas userType={userType} userData={user[userType]}></Canvas>
          </Route>
          <Route exact path="/dashboard">
          
            <Window userType={userType} userData={user[userType]} ></Window>
           
          </Route>
          </PrioContext.Provider>
        </Switch>
        <Route exact path="/about">
          <About loggedOut = {true}></About>
        </Route>
        </Router>
        );
        // if usertype is company
    } else if (userType === "name"){
      return (
        
        <Router>
        <Redirect to="/marketplace"></Redirect> 
        <ul className="navbar">  
       
        <li><Link to="/marketplace">Marketplace</Link></li>
        <li><Link to="/about">Log Out</Link></li>
        </ul>
        <PrioContext.Provider value={{
          //what data to show in the popup
          popData: PopData,
          setPop: (inp) => setPop(inp),
        }}>
        <Route exact path="/marketplace">
            
            <Canvas></Canvas>
        </Route>

        </PrioContext.Provider>

        <Route exact path="/about">
          <About loggedOut = {true}></About>
        </Route>
        
        </Router>
      )

    } else {
      return (

        //otherwise the user isreguser 
        <Router>
        <Redirect to="/about"></Redirect> 
        <ul className="navbar">   
     
        <li><Link to="/marketplace">Marketplace</Link></li>
        <li><Link to="/login">Log In</Link></li>
        <li><Link to="/signup">Sign Up</Link></li>
      
        </ul>
        <PrioContext.Provider value={{
          //what data to show in the popup
          popData: PopData,
          setPop: (inp) => setPop(inp),
        }}>
        <Route exact path="/marketplace">
            
            <Canvas></Canvas>
        </Route>

        </PrioContext.Provider>

        <Route exact path="/about">
          <About user = {user}></About>
        </Route>
        <Route exact path="/login">
            <Login loggedOut={false}></Login>
        </Route>
        <Route exact path="/signup">
            <Signup></Signup>
        </Route>
        
        </Router>
      )
    }

    
    
}



