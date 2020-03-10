import React, { useState, useEffect } from "react";

function parseJwt(token) {

    //remove forward slash at beginning
    let test = token.split("").slice(1).join("")

    //get only the payload
    var payload = test.split('.')[1];
    try {
        
        var jsonPayload = decodeURIComponent(atob(payload).split('').map(function(c) {
            return '%' + ('00' + c.charCodeAt(0).toString(16)).slice(-2);
        }).join(''));
     
        return JSON.parse(jsonPayload);
    }
    catch {
        return false;
    }
}

export default parseJwt;