import React from "react";



export default class regForm extends React.Component {


    constructor(props) {
        super(props);
        this.state = {
            companyName: "",
            location: "",
            contactName: "",
            contactTel:"",
            contactEmail:""

        };

        this.handleChange = this.handleChange.bind(this);
        
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
                                value={this.state.companyName}
                                onChange={this.handleChange}/>
                        </label>
                    </div>
                    <div class="formleft">
                        <label>
                            Location:
                            <br /><input
                                name="location"
                                type="text"
                                value={this.state.location}
                                onChange={this.handleChange} />
                        </label>
                    </div>
                    <div class="formmiddle">
                        <label>
                            Contact person:
                            <br /><input
                                name="contactName"
                                type="text"
                                value={this.state.contactName}
                                onChange={this.handleChange}/>
                        </label>
                    </div>
                
               
                    <div class="formright">
                        
                        <label>
                            Contact phone number:
                            <br /><input
                                name="contactTel"
                                type="tel"
                                value={this.state.contactTel}
                                onChange={this.handleChange}/>
                        </label>
                        
                        <label>
                            Contact email:
                            <br /><input
                                name="contactEmail"
                                type="tel"
                                value={this.state.contactEmail}
                                onChange={this.handleChange}/>
                        </label>
                        
                    
                    </div>
                </div>

               <div class="formdesc">
                    <label>
                        Description:
                        <br /><textarea></textarea>
                    </label>
                </div>

                <input type="submit" id="formReg" value="Register" />
            </form>
        )

    }


}