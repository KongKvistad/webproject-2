import React from "react";
import '../../App.css';

export default class BoxComp extends React.Component {
   
    componentDidMount(){
        console.log(this.props)
    }

    render() {

        
        return (
          <div class="boxes">

              {this.props.data.map((item, idx) => <div class="box"><h2 key={idx}>{item.name}</h2>
                                                                      <h3 key={idx}>by {item.owner}</h3>
                                                                      <ul>
                                                                          <p key={idx}>{item.tags}</p>
                                                                      </ul></div>)}

          </div>
        );
      }
}