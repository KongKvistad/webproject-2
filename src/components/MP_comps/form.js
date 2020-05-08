import React from "react";



export default class Form extends React.Component {

   

    constructor(props) {
        super(props);
        this.state = {
            companyName: "",
            title: "",
            author: "",
            startDate:"",
            endDate:"",
            noofstudents: "1"


        };

        this.handleChange = this.handleChange.bind(this);
        
    }

    /* handleChange(event) {
        this.setState({value: event.target.value});
      } */

    getRadiobuttonState(){
        return {
          selectedOption: 'internship'
        };
      }
    
    handleChange(event){
        const target = event.target;
        const value = target.name === 'isStudent' || 'keepHidden' ? target.checked : target.value;
        const name = target.name;

        this.setState({
            [name]: value,
            selectedOption: event.target.value
        });
    }

    



    render(){

        return (
            <form>
                <div class="forminfo">
                    <div class="formtitle">
                        <label>
                            Title:
                            <br /><input 
                                name="title"
                                type="text"
                                value={this.state.value}
                                onChange={this.handleChange}/>
                        </label>
                    </div>
                    <div class="formleft">
                        <label>
                            Company Name:
                            <br /><input
                                name="companyName"
                                type="text"
                                value={this.state.value}
                                onChange={this.handleChange} />
                        </label>
                    </div>
                    <div class="formmiddle">
                        <label>
                            Author:
                            <br /><input
                                name="author"
                                type="text"
                                value={this.state.value}
                                onChange={this.handleChange}/>
                        </label>
                    </div>
                
               
                    <div class="formright">
                        
                        <label>
                            <input type="radio" name="radiobuttons" value="internship" checked={this.state.selectedOption === 'internship'} onChange={this.handleChange}/>
                            Internship
                        </label>
                        
                        <label>
                            <input type="radio" name="radiobuttons" value="projects" checked={this.state.selectedOption === 'projects'} onChange={this.handleChange}/>
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

                <div class="forminfo">
                    <div class="formleft">
                        <label>
                            Start date:
                            <br /><input 
                                name="startDate"
                                type="date"/>
                        </label>
                    </div>
                    <div class="formmiddle">
                        <label>
                            End date:
                            <br /><input 
                                name="endDate"
                                type="date"/>
                        </label>
                    </div>
                    <div class="formright">
                        <label>
                                <input
                                    name="isStudent"
                                    type="checkbox"
                                    checked={this.state.isStudent}
                                    onChange={this.handleChange} />
                            I am a student
                        </label>
                        <label>
                                <input
                                    name="keepHidden"
                                    type="checkbox"
                                    checked={this.state.keepHidden}
                                    onChange={this.handleChange} />
                            Keep hidden
                        </label>
                    </div>

                </div>
               <div class="formdesc">
                    <label>
                        Description:
                        <br /><textarea value={this.state.value} onChange={this.handleChange}></textarea>
                    </label>
                </div>

                <input type="submit" id="formsubmit" value="Submit" name="submitform" />
            </form>
        )

    }
    
    
  

}