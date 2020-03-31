// https://dev.to/iam_timsmith/lets-build-a-search-bar-in-react-120j

import React from 'react';

export default class Search extends React.Component {

    constructor(props) {
        super (props);

        this.state = {
            filtered: []
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

    handleChange(e) {
        let currentList = [];
        let newList = [];

        if (e.target.value !== "") {
            currentList = this.props.items;
            newList = currentList.filter(item=> {
                const lc = item.toLowerCase();
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

    render(){
        return(
            <div>
                <Search/>
            </div>
        )
    }

}