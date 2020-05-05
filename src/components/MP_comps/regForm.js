import React from "react";



export default class Regform extends React.Component {


    constructor(props) {
        super(props);
        this.state = {
            companyName: "",
            location: "",
            contactName: "",
            contactTel: "",
            contactEmail: ""

        };

        this.handleChange = this.handleChange.bind(this);
        
    }

    handleChange(event){
        const target = event.target;
        const value = target.name; //=== 'isStudent' || 'keepHidden' ? target.checked : target.value;
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
                            Company name:
                            <br /><input 
                                name="companyName"
                                type="text"
                                value={this.state.value}
                                onChange={this.handleChange}/>
                        </label>
                    </div>
                    <div class="formleft">
                        <label>
                            Location:
                            <br /><input
                                name="location"
                                type="text"
                                value={this.state.value}
                                onChange={this.handleChange} />
                        </label>
                    </div>
                    <div class="formmiddle">
                        <label>
                            Contact person:
                            <br /><input
                                name="contactName"
                                type="text"
                                value={this.state.value}
                                onChange={this.handleChange}/>
                        </label>
                    </div>
                
               
                    <div class="formright">
                        
                        <label>
                            Contact phone number:
                            <br /><input
                                name="contactTel"
                                type="tel"
                                value={this.state.value}
                                onChange={this.handleChange}/>
                        </label>
                        
                        <label>
                            Contact email:
                            <br /><input
                                name="contactEmail"
                                type="tel"
                                value={this.state.value}
                                onChange={this.handleChange}/>
                        </label>
                        
                    
                    </div>
                </div>

               <div class="formdesc">
                    <label>
                        Description:
                        <br /><textarea 
                        value={this.state.value}
                        onChange={this.handleChange}>
                        </textarea>
                    </label>
                </div>

                <input type="submit" id="formReg" value="Register" />
            </form>
        )

    }


}