import React, {useState, useEffect, useContext} from "react";
import Logo from "./ntnu-logo.png";
import LogoH from "./ntnu-logo-height.png";

export default function About(props){

    const logstate = props.loggedOut
    useEffect(() => {
        if(logstate){
            localStorage.removeItem("token")
            window.location.href=window.location.origin
        }
    },[])

    return (
        <div className ="about-container">
        
        
            <img src={Logo} className="header-logo"  alt="NTNU - Norwegian University of Science and Technology"/>
            <img className="header-logo-height" src={LogoH} alt="NTNU - Norwegian University of Science and Technology"/>
            <h1>about</h1>
                <p>This is a website run by NTNU. The purpose of this website is to provide a platform that is easy to use 
                    for companies that are interested in students to help them out with a project or an internship. Companies 
                    and students are able to log in, pitch new ideas, and to look through the marketplace.</p>

            <h2>To be involved with NTNU</h2>
                <p>Being apart of a project or offering an internship can be enriching for both the company and the student 
                    or students working for the company. Getting involved means that the company that needs help with a problem, 
                    or want an intern, accepts a lot of responsibility in order to get the best outcome for both the company and 
                    the student(s) working for it.</p>
            <h3>Responsibility</h3>
                <p>With signing up and adding a new project or internship comes great responsibility. It is important for NTNU 
                    that all companies understand what this responsibility entails. When being involved with NTNU, you are 
                    expected to commit to the students or student working for you as an intern or on a project. You are expected 
                    to help and guide this student in any way you can, and respect the students and what they are there to do for 
                    you. You should not consider the students as free labor, as they are in your company to learn. It is therefore 
                    important that your company does everything it can to create a good environment for the student(s).</p>
            <h3>How to add a project/internship</h3>
                <p>Adding a bachelor/master project or an internship means that your company have to commit to the students or 
                    student who are working for you. You must therefore register to the platform before you are allowed to add a new 
                    idea. It is also important for us to make sure that there are no new ideas added where no one takes responsibility.
                    When you have added a new idea, you will notice that this idea is not immediately placed in the marketplace. 
                    This is because NTNU review every single idea and decide whether it can be approved immediately, if it needs adjustment, 
                    or if it is the type of idea that can’t be done and it is declined. This might take a few days, so please be patient and 
                    come back later to check the status of your idea.</p>
            <h2>Marketplace</h2>
                <p>The marketplace contains all bachelor/master projects and internships that are available for students to consider when 
                    choosing what they want to work with. The marketplace is open to the public, meaning all visitors to this website will be 
                    able to view them. However, if your company have an idea that should not be visible to the public, you can choose “Keep 
                    hidden” in the form for adding a new idea once you log in. This, however, will not keep the idea hidden from any user that 
                    is logged in to the system, whether they are an administrator, student, or another company. This is because NTNU doesn’t 
                    want any secrecy around the projects and internship, in order to ensure that the student will get the best outcome of 
                    working for your company. This means that the student should be able to discuss issues they meet while working for you, 
                    and they should be able to show it off to future employers. </p>
        </div>
    );
    
}
