import React, { Component } from 'react';

import validators, { resetValidators } from '../../../helpers/Validations/Validator';
import Formthemes from '../../themes/Formthemes'; 
import Linkthemes from '../../themes/Linkthemes'; 

class ResetPassword extends Component {
    constructor(props) {
        super(props);   
        this.state = {
            validators: validators, 
            inputManagement: {
                password: {
                    hintText: 'Enter your Password', 
                    floatingLabelText: 'Your Password', 
                    id: 'password', 
                    type: 'password', 
                    errors: [], 
                }, 
                newpassword: {
                    hintText: 'Enter your New Password', 
                    floatingLabelText: 'New Password', 
                    id: 'newpassword', 
                    type: 'password', 
                    errors: [], 
                }
            }, 
            edit: false, 
        }
        resetValidators();
        document.title = "Reset Password"; 
    }

    handleClick(event) {
        console.log("Success");
    }
    
    render() { 
        let buttonManagement = ["Login", "ForgotPassword", "Register"]; 
        return ( 
            <div>
                <Formthemes 
                    title = "Reset Password"
                    page = {this}
                />
                <Linkthemes 
                    buttonManagement = { buttonManagement }
                />
            </div> 
        );
    }
}

export default ResetPassword;