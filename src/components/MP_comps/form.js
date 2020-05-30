import React, {useContext} from "react";
import {UserContext} from "../../UserContext.js"
import Endpoint from "../endpoint.js"



export default class Form extends React.Component {

    static contextType = UserContext;
   

    constructor(props) {
        super(props);
        this.state = {
            companyName: "",
            title: "",
            author: "",
            startDate:"",
            endDate:"",
            noofstudents: "1",
            keephidden: false,
            tags: "",
            postType: "",
            description: "",


        };

        this.handleChange = this.handleChange.bind(this);
        
        
    }

    componentDidMount(){
        let con = this.context.value

        this.setState({companyName: con.contactName ? con.name : ""})
    }



   
    
    handleChange(event){
        const target = event.target;
        const value = target.name === 'keepHidden' ? target.checked : target.value;
        const name = target.name;

        this.setState({
            [name]: value
         
        });
    }

    
    submitForm =(e) => {
        e.preventDefault()

        let user = this.context.value

        let data = this.state;
        
        const userData = user.hasOwnProperty("contactName") ? {"name": user.name} : user.hasOwnProperty("employeeNo") ? {"employeeNo": user.employeeNo} : user.hasOwnProperty("studentNo") ? {"studentNo" : user.studentNo} : "reguser"

       

        data.user = userData
        
      


        fetchData(data)
        .then(res => res.json())
        .then(result => {
            
            if(typeof(result) === "string"){
                alert(result)
            } else {
                window.location.href=window.location.origin
            }
        })
    }


    render(){

        return (
            <form>
                <p className="closeForm" onClick={() => this.props.closeFunc()}>X</p>
                <div className="forminfo">
                    
                    <div className="formtitle">
                        <label>
                            Title:
                            <br /><input 
                                name="title"
                                type="text"
                                value={this.state.title}
                                onChange={this.handleChange}/>
                        </label>
                        
                    </div>
                    <div className="formleft">
                        <label>
                            Company Name:
                            <br /><input
                                name="companyName"
                                type="text"
                                value={this.state.companyName}
                                onChange={this.handleChange} />
                        </label>
                    </div>
                    <div className="formmiddle">
                        <label>
                            Author:
                            <br /><input
                                name="author"
                                type="text"
                                value={this.state.author}
                                onChange={this.handleChange}/>
                        </label>
                    </div>
                
               
                    <div className="formright">
                        
                        <label>
                            <input type="radio" name="postType" value="internship" checked={this.state.postType === 'internship'} onChange={this.handleChange}/>
                            Internship
                        </label>
                        
                        <label>
                            <input type="radio" name="postType" value="projects" checked={this.state.postType === 'projects'} onChange={this.handleChange}/>
                            Projects
                        </label>
                        
                        <label>
                            Number of students:
                            <select value={this.state.noofstudents} onChange={this.handleChange}
                                list="noofstudents" 
                                name="noofstudents">
                                        <option value= "1">1</option>
                                        <option value= "2">2</option>
                                        <option value= "3">3</option>
                                        <option value= "4">4</option>
                                        <option value= "5">5</option>
                            </select>
                        </label>
                    </div>
                </div>

                <div className="forminfo">
                    <div className="formleft">
                        <label>
                            Start date:
                            <br /><input 
                                value={this.state.startDate}
                                onChange={this.handleChange}
                                name="startDate"
                                type="date"/>
                        </label>
                    </div>
                    <div className="formmiddle">
                        <label>
                            End date:
                            <br /><input
                                value={this.state.endDate}
                                onChange={this.handleChange}
                                name="endDate"
                                type="date"/>
                        </label>
                    </div>
                    <div className="formright">
                        {/* <label>
                                <input
                                    name="isStudent"
                                    type="checkbox"
                                    checked={this.state.isStudent}
                                    onChange={this.handleChange} />
                            I am a student
                        </label> */}
                        <label>
                                <input
                                    name="keepHidden"
                                    type="checkbox"
                                    checked={this.state.keepHidden}
                                    onChange={this.handleChange} />
                            Keep hidden
                        </label>
                        <label>
                                <input
                                    name="tags"
                                    type="input"
                                    checked={this.state.tags}
                                    onChange={this.handleChange} />
                            Tags
                        </label>
                    </div>

                </div>
               <div className="formdesc">
                    <label>
                        Description:
                        <br /><textarea name="description" value={this.state.description} onChange={this.handleChange}></textarea>
                    </label>
                </div>

                <button  onClick={(e) => this.submitForm(e)} type="button" id="formsubmit" value="Submit" name="submitform" >Submit</button>
            </form>
        )

    }
    
    
  

}


const fetchData = async (data) => {
    
   

    const requestOptions = {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({data})
    };
    
    const result = await fetch(
      `${Endpoint}/newPost.php`, requestOptions,
    );
    
    return result

  };