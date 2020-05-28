import React, {useState, useEffect, useContext} from "react";
import Endpoint from "../endpoint.js"


const MiscTool = () => {
    
    const [companies, setComp] = useState(false)
    const [students, setStud] = useState(false)
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

    const makeSlots = (num) => {
        return [...new Array(num).fill({id: null})]
    }

    const mapComp = (arr) => {
        return arr.map((item, idx) => <li key={idx} className="compTab">
            <div className="compInfo">
            <span>{item.title}</span>
            <span>{item.companyName}</span>
            </div>
            <ul className="slots">
                {makeSlots(parseInt(item.noOfStudents)).map((elem, ix) => <li key ={ix}> {elem.id} </li>)}
            </ul>
            <ul className="students">
                    <li>geir</li>
                    <li>geir</li>
                    <li>geir</li>
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