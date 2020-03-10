import React, { useState, useEffect } from "react";

function Students() {
    const [hasError, setErrors] = useState(false);
    const [data, setData] = useState([]);

  useEffect(() => {
    async function fetchData() {
      const res = await fetch("http://127.0.0.1:5500/src/mockData/getcomp.json"); // json file needs to be running with live server
      res
        .json()
        .then(res => setData(res.tasks))
        .catch(err => setErrors(err));
    }

    fetchData();
    
  },[]);

  return (
    // <ul>
    //     {data.map(elem => (
    //         <li key={elem.id}>{elem.id}</li>
    //     ))}
    // </ul>
    <p>students</p>
      )
}



export default Students;