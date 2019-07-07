import React, { Component } from 'react';

import validators, { resetValidators } from 'helpers/Validations/Validator'
import Formthemes from 'components/themes/Formthemes'; 
import Linkthemes from 'components/themes/Linkthemes'; 
import auth from 'services/auth'; 

class Login extends Component {
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
                password: {
                    hintText: 'Enter your Password', 
                    floatingLabelText: 'Your Password', 
                    id: 'password', 
                    type: 'password', 
                    errors: [], 
                }, 
            }, 
            edit: false, 
        }
        resetValidators();
        document.title = "Login"; 
    }

    handleClick(event) {
        auth.login(() => {
            this.props.history.push("/Admin");
        }); 
    }
    
    render() { 
        let buttonManagement = ["ForgotPassword", "Register", "ResetPassword"]; 
        return (   
            <div>
                <Formthemes 
                    title = "Login"
                    page = {this}
                />
                <Linkthemes 
                    buttonManagement = { buttonManagement }
                />
            </div>
        );
    }
}

export default Login;