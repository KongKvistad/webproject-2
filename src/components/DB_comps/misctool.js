import React, {useState, useEffect, useContext} from "react";
import Endpoint from "../endpoint.js"


const MiscTool = () => {
    
    const [companies, setComp] = useState([])
    const [students, setStud] = useState([])
    const [combination, setComb] = useState(false)
    const [loading, setLoad] = useState(true)

    useEffect( () => {
        getData()
        .then(res => res.json())
        .then(final => {
            setStud(final.students);
            setComp(final.companies);
            setLoad(false)

        })
        

    },[])

    

    const handleStud = (stud, internID) => {
        

        let avail = 0
        
        let compMatch = companies.filter(x => x.internID === internID)
        
        let slots = compMatch[0].studSlots
        
        slots.forEach((elem, idx) => {
            if(elem.hasOwnProperty("name")){
                avail ++
            }
        });

        if(avail >= slots.length){
            alert("no more slots!")
            return 
        }


        compMatch[0].studSlots.splice(avail, 1, stud)

        setStud(students.filter(x => x.studentNo !== stud.studentNo))

    }

    const filterStud = (company) => {
        
        let studCompMatch = []
        
        students.forEach(stud => {
            if(stud.priorities.filter(x => x === company.internID).length > 0){
                studCompMatch.push(stud)
            }
        })

        return studCompMatch
    }

    const removeStud = (company, idx) => {
        
        // behold the fucking genius

        
        let stud = company.studSlots.splice(idx, 1, idx)[0]

        //if box is empty
        if(typeof(stud) === "number"){
            return
        } else {
            setStud(students => [...students, stud])    
        }
        
        
      
    }


    const getTitle = (prioNum) => {
        let matchComp =  companies.filter(x => x.internID === prioNum)
        if(matchComp.length > 0){
            return matchComp[0].title
        } else {
            return null
        }
        
        
    }
    const mapComp = (arr) => {
        
        return arr.map((company, idx) => <li key={idx} className="compTab">
            <div className="compInfo">
            <span>{company.title}</span>
            <span>{company.companyName}</span>
            <ul className="compPrio">
                <li>priorities: </li>
                {company.priorities !== null ? company.priorities.map((prios, priX) => <li key={priX}>{"#"+(priX + 1) + " - " +prios.name}</li>) :<li>no prios!</li>}
            </ul>
            </div>
            <ul className="slots">
                {company.studSlots.map((elem, ix) =>
                 <li onClick={(e) => removeStud(company, ix)} className={elem.name ? "slot-active" : "slot"} key ={ix}> {elem.name ? elem.name : "None"} </li>)}
            </ul>
            <ul className="students">
                {filterStud(company).map((stud, idx) => 
                    <li key={idx} onClick={() => handleStud(stud, company.internID)}>{stud.name}
                        <ul className="studPrio">
                            {stud.priorities.map((x, priX) => <li>{"#" + (priX + 1) + " - " + getTitle(x)}</li>)}                       
                        </ul>
                    </li>
                )}
            </ul>
        </li>);
    };
    
    if(loading){
        return <h1>loading...</h1>
    } else {
        return(
            <div className="miscWindow">
                <ul className="companies">
                {mapComp(companies)}
                
                </ul>
                
            </div>
          )
    }
    
  }

  export default MiscTool

const getData = async (type, postId) => {
const result = await fetch(
    `${Endpoint}/comparison.php`
);
return result
};