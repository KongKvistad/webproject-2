import React, {useState, useEffect, useContext} from "react";

export default function About(props){

    const logstate = props.loggedOut
    useEffect(() => {
        if(logstate){
            localStorage.removeItem("token")
            window.location.href=window.location.origin
        }
    },[])

    return (
        <h1>about</h1>
    );
    
}
// <!DOCTYPE html>
// <html lang="en">

// <head>
//     <meta charset="UTF-8">
//     <meta name="viewport" content="width=device-width, initial-scale=1.0">
//     <title>Document</title>
//     <link rel="stylesheet" type="text/css" href="about.css">
//     <link rel="stylesheet" type="text/css" href="index.css">
//     <link rel="stylesheet" type="text/css" href="App.css">
// </head>

// <body>
//     <header>
//         <img class="header-logo" src="ntnu-logo.png" alt="NTNU - Norwegian University of Science and Technology">
//         <img class="header-logo-height" src="ntnu-logo-height.png" alt="NTNU - Norwegian University of Science and Technology">
//         <nav>
//             <ul>
//                 <li><a href="#">About</a></li>
//                 <li><a href="#">Marketplace</a></li>
//                 <li><a href="#">Dashboard</a></li>
//             </ul>
//         </nav>
//     </header>
//     <div id="about-container">
//         <h1>About us</h1>

//         <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore
//             magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
//             commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat
//             nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit
//             anim id est laborum.</p>

//         <h2>To be a fadderbedrift</h2>
//         <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore
//             magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
//             commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat
//             nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit
//             anim id est laborum.</p>
//         <h3>Responsibility</h3>
//         <p>Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem
//             aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo.
//             Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni
//             dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor
//             sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore
//             magnam aliquam quaerat voluptatem. Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis
//             suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur? Quis autem vel eum iure reprehenderit qui in
//             ea voluptate velit esse quam nihil molestiae consequatur, vel illum qui dolorem eum fugiat quo voluptas
//             nulla pariatur?</p>
//         <h2>Marketplace</h2>
//         <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore
//             magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
//             commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat
//             nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit
//             anim id est laborum.</p>

//     </div>
// </body>

// </html>