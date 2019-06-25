import React, { Component } from 'react';

import './Register.css';
import validators, { resetValidators } from '../../helpers/Validations/Validator';
import Formthemes from '../../themes/Formthemes'; 


class Register extends Component {
    constructor(props) {
        super(props);
        this.state = {
            validators: validators, 
            username: [],
            email: [],
            password: [],
            edit: false,
            inputManagement: [
                {
                    hintText: 'Enter your User Name', 
                    floatingLabelText: 'User Name', 
                    id: 'username', 
                    type: '', 
                }, 
                {
                    hintText: 'Enter your Email', 
                    floatingLabelText: 'Your Email', 
                    id: 'email', 
                    type: '', 
                }, 
                {
                    hintText: 'Enter your Password', 
                    floatingLabelText: 'Your Password', 
                    id: 'password', 
                    type: 'password', 
                }
            ]
        }
        resetValidators();
    }

    handleClick(event) {
        console.log("Success");
    }
    
    render() { 
        return (   
            <Formthemes 
                stateErrors = {this.state}
                title = "Register"
                page = {this}
            />
        );
    }
}

export default Register;