import React from 'react'; 
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import AppBar from 'material-ui/AppBar';
import RaisedButton from 'material-ui/RaisedButton';
import Inputthemes from '../themes/Inputthemes'; 

const Errors = (validators, stringState) => {
    let errors = { username: '', email: '', password: ''}; 
    Object.keys(validators).forEach((field) => {
        if (!validators[field].valid) {
            errors[field] = (
                stringState[field].map((error, i) => {     
                    return (<div className="error" key={i}> {error} </div>) 
                })
            )
        } else{
            errors[field] = <div className="success"> {field} is form valid </div>
        } 
    });
    return errors; 
}

const Formthemes = (props) => {
    console.log(props.validators); 
    // let errors = Errors(props.validatorsF); 
    return (
        // <div>
        //     <MuiThemeProvider>
        //         <div>
        //             <AppBar title = {props.title}  />
        //             <Inputthemes
        //                 hintText="Enter your User Name"
        //                 floatingLabelText="User Name"
        //                 id="username"
        //                 onChange = {(event) => this.inputChange('username')}
        //             />
        //             { errors.username }
        //             <br />
        //             <Inputthemes
        //                 hintText="Enter your Email"
        //                 floatingLabelText="Your Email"
        //                 id="email"
        //                 onChange = {(event) => this.inputChange('email')}
        //             />
        //             { errors.email }
        //             <br />
        //             <Inputthemes
        //                 hintText="Enter your Password"
        //                 floatingLabelText="Your Password"
        //                 id="password"
        //                 type="password"
        //                 onChange = {(event) => this.inputChange('password')}
        //             />
        //             { errors.password }
        //             <br />
                
        //         </div>
        //     </MuiThemeProvider>
        // </div>
        "OK"
    ); 
}

export default Formthemes; 