// https://dev.to/iam_timsmith/lets-build-a-search-bar-in-react-120j

import React from 'react';
import Boxcomp from './boxcomp.js';
import Form from './form.js';

export default class Search extends React.Component {

    constructor(props) {
        super (props);

        this.state = {
            filtered: [],
            isFormOpen: false
        };
        this.handleChange = this.handleChange.bind(this);
    }
    componentDidMount(){
        this.setState({
            filtered: this.props.items
        });
    }

    componentWillReceiveProps(nextProps) {
        this.setState({
            filtered: nextProps.items
        });
    }

    onSubmit(e){
        e.preventDefault();
    }
    handleChange(e) {
        
        let currentList = [];
        let newList = [];

        if (e.target.value !== "") {
            currentList = this.props.items;
            newList = currentList.filter(item=> {
                const lc = item.name.toLowerCase();
                const filter = e.target.value.toLowerCase();
                return lc.includes(filter);
            });
        } else {
            newList = this.props.items;
        }

        this.setState({
            filtered: newList
        });
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
                <p>Filter</p>
                <button onClick={()=>this.handleForm()}>New +</button>
                <div className={this.state.isFormOpen ? "form-visible" : "form-invisible"}>
                <Form></Form>
                </div>
            </div>
        )
    }

}