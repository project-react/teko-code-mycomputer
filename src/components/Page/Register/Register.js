import React, { Component } from 'react';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import AppBar from 'material-ui/AppBar';
import RaisedButton from 'material-ui/RaisedButton';

import './Register.css';
import { updateValidation, resetValidators, displayValidationErrors, isFormValid } from '../../helpers/Validations';
import validators from '../../helpers/Validations/Validator'; 
import Inputthemes from '../../themes/Inputthemes'; 
import Formthemes from '../../themes/Formthemes'; 


class Register extends Component {
    constructor(props) {
        super(props);
        this.state = {
            username: [],
            email: [],
            password: [],
            edit: false
        }
        resetValidators();
    }

    handleClick(event) {
        console.log("Success");
    }
    
    setStateRegister(type){
        switch(type){
            case 'username':
                this.setState({ 'username' : displayValidationErrors(type, validators) });
                break;
            case 'email':
                this.setState({ 'email' : displayValidationErrors(type, validators) });
                break;
            default:
                this.setState({ 'password' : displayValidationErrors(type, validators) });
        }
    }

    inputChange = (type) => {
        let textInput = document.getElementById(type).value;   
        updateValidation(type , textInput, validators);
        this.setStateRegister(type); 
        this.setState({ edit: true }); 
    }
    render() { 
    
        // let error = { username: '', email: '', password: ''}; 
        // if (this.state.edit){
        //     Object.keys(validators).forEach((field) => {
        //         if (!validators[field].valid) {
        //             error[field] = (
        //                 this.state[field].map((error, i) => {     
        //                     return (<div className="error" key={i}> {error} </div>) 
        //                 })
        //             )
        //         } else{
        //             error[field] = <div className="success"> {field} is form valid </div>
        //         } 
        //     });
        // }

        // let buttonRegister = ''; 
        // if ( isFormValid(validators) ){
        //     buttonRegister = (
        //         <RaisedButton label="Submit" primary={true} style={style} onClick={(event) => this.handleClick(event)} />
        //     ); 
        // }
        return (
            // <div>
            //     <MuiThemeProvider>
            //         <div>
            //             <AppBar title="Register" />
            //             <Inputthemes
            //                 hintText="Enter your User Name"
            //                 floatingLabelText="User Name"
            //                 id="username"
            //                 onChange = {(event) => this.inputChange('username')}
            //             />
            //             { error.username }
            //             <br />
            //             <Inputthemes
            //                 hintText="Enter your Email"
            //                 floatingLabelText="Your Email"
            //                 id="email"
            //                 onChange = {(event) => this.inputChange('email')}
            //             />
            //             { error.email }
            //             <br />
            //             <Inputthemes
            //                 hintText="Enter your Password"
            //                 floatingLabelText="Your Password"
            //                 id="password"
            //                 type="password"
            //                 onChange = {(event) => this.inputChange('password')}
            //             />
            //             { error.password }
            //             <br />
            //             { buttonRegister }
            //         </div>
            //     </MuiThemeProvider>
            // </div>

            <div>
                "nguyenduychien"
                <Formthemes 
                    validators = {validators}
                />
            </div>
        );
    }
}
const style = {
    margin: 15,
};

export default Register;