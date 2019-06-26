import React, { Component } from 'react';

import validators, { resetValidators } from '../../helpers/Validations/Validator';
import Formthemes from '../../themes/Formthemes'; 
import Linkthemes from '../../themes/Linkthemes'; 

class ForgotPassword extends Component {
    constructor(props) {
        super(props);   
        this.state = {
            validators: validators, 
            inputManagement: {
                username: {
                    hintText: 'Enter your User Name', 
                    floatingLabelText: 'User Name', 
                    id: 'username', 
                    type: '', 
                    errors: [], 
                }, 
                email: {
                    hintText: 'Enter your Email', 
                    floatingLabelText: 'Your Email', 
                    id: 'email', 
                    type: '', 
                    errors: [], 
                }, 
            }, 
            edit: false, 
        }
        resetValidators();
        document.title = "Forgot Password"; 
    }

    handleClick(event) {
        console.log("Success");
    }
    
    render() { 
        let buttonManagement = ["Login", "ResetPassword", "Register"]; 
        return (
            <div>
                <Formthemes 
                    title = "Forgot Password"
                    page = {this}
                />
                <Linkthemes 
                    buttonManagement = { buttonManagement }
                />
            </div>   
        );
    }
}

export default ForgotPassword;