import React from "react";
import '../../App.css';

export default class BoxComp extends React.Component {
   
    componentDidMount(){
        console.log(this.props)
    }

    render() {

        
        return (
          <div>

              {this.props.data.map((item, idx) => <div class="boxes"><h2 key={idx}>{item.name}</h2>
                                                                      <h3 key={idx}>by {item.owner}</h3>
                                                                      <ul>
                                                                          <li key={idx}>{item.tags}</li>
                                                                      </ul></div>)}

          </div>
        );
      }
}