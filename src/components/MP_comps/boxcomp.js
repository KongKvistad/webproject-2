import React from "react";
import '../../App.css';

export default class BoxComp extends React.Component {
   
    componentDidMount(){
        console.log(this.props)
    }

    render() {

        
        return (
          <div>
            <ul>
              {this.props.data.map((item, idx) => <li key={idx}>{item.name}</li>)}
            </ul>
          </div>
        );
      }
}