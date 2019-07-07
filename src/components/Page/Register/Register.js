import React, { Component } from 'react';
import './Register.css';
import validators, { resetValidators } from '../../../helpers/Validations/Validator';
import Formthemes from '../../themes/Formthemes'; 
import Linkthemes from '../../themes/Linkthemes'; 

class Register extends Component {
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
                password: {
                    hintText: 'Enter your Password', 
                    floatingLabelText: 'Your Password', 
                    id: 'password', 
                    type: 'password', 
                    errors: [], 
                }, 
                confirmpassword: {
                    hintText: 'Enter your Comfirm Password', 
                    floatingLabelText: 'Comfirm Password', 
                    id: 'confirmpassword', 
                    type: 'password', 
                    errors: [], 
                }, 
            }, 
            edit: false, 
        }
        resetValidators();
        document.title = "Register"; 
    }

    handleClick(event) {
        console.log("Success");
    }
    
    render() { 
        let buttonManagement = ["ForgotPassword", "Login", "ResetPassword"]; 
        return (  
            <div>
                <Formthemes 
                    title = "Register"
                    page = {this}
                />
                <Linkthemes 
                    buttonManagement = { buttonManagement }
                />
            </div> 
        );
    }
}

export default Register;