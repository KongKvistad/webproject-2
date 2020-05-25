// https://dev.to/iam_timsmith/lets-build-a-search-bar-in-react-120j

import React from 'react';
import Boxcomp from './boxcomp.js';
import Form from './form.js';

export default class Search extends React.Component {

    constructor(props) {
        super (props);

        this.state = {
      
            isFormOpen: false
        };
        
    }
  
    handleForm(){
        this.setState({isFormOpen: !this.state.isFormOpen});
    } 

    render(){
        return(
            <div className="search">
                <form onSubmit={this.onSubmit}>
                    <label for="search">Search:</label>
                    <input type="text" id="search" name="search" onChange={this.handleChange} placeholder="Search..."></input>
                </form>
                <button onClick={()=>this.handleForm()}>New +</button>
                <div className={this.state.isFormOpen ? "form-visible" : "form-invisible"}>
                <Form></Form>
                </div>
            </div>
        )
    }

}