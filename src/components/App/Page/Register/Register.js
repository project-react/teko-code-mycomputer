import React, { Component } from 'react'; 
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider'; 
import AppBar from 'material-ui/AppBar'; 
import RaisedButton from 'material-ui/RaisedButton'; 
import TextField from 'material-ui/TextField'; 
// import axios from 'axios'; 
// import 'bootstrap/dist/css/bootstrap.css';
import './Register.css'; 

// console.log(validators); 

class Register extends Component {
    constructor(props) {
        super(props);
        this.State = {
            user_name: '',
            email: '',  
            password: '', 
        } 
    }

    handleClick(event) {
        console.log("Success"); 
    }

    render() {
        return (
            <div>
                <MuiThemeProvider>
                     <div>
                         <AppBar title="Register" />
                            <TextField 
                                hintText = "Enter your User Name"
                                floatingLabelText = "User Name"
                                onChange = {(event, newValue) => this.setState({user_name:newValue})}
                            />
                            <br />
                            <TextField 
                                hintText = "Enter your Email"
                                floatingLabelText = "Your Email"
                                onChange = {(event, newValue) => this.setState({email:newValue})}
                            />
                            <br />
                            <TextField
                                type = "password"
                                hintText="Enter your Password"
                                floatingLabelText="Password"
                                onChange = {(event,newValue) => this.setState({password:newValue})}
                            />
                            <br />
                            <RaisedButton label="Submit" primary={true} style={style} onClick={(event) => this.handleClick(event)}/>

                    </div>
                </MuiThemeProvider> 
            </div>
        ); 
    }

}

const style = {
    margin: 15,
};

export default Register;