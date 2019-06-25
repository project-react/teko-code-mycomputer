import React, { Component } from 'react';
import './Register.css';
import validators, { resetValidators } from '../../helpers/Validations/Validator';
import Formthemes from '../../themes/Formthemes'; 

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
    }

    handleClick(event) {
        console.log("Success");
    }
    
    render() { 
        return (   
            <Formthemes 
                // stateErrors = {this.state}
                title = "Register"
                page = {this}
            />
        );
    }
}

export default Register;