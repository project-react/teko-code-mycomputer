import React from 'react'; 
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import AppBar from 'material-ui/AppBar';
import RaisedButton from 'material-ui/RaisedButton';
import Inputthemes from '../themes/Inputthemes'; 

import { updateValidation, displayValidationErrors, isFormValid } from '../helpers/Validations/Validator'; 

const SetstateForm = (type, page) => {
    switch(type){
        case 'username':
            page.setState({ 'username' : displayValidationErrors(type, page.state.validators) });
            break;
        case 'email':
            page.setState({ 'email' : displayValidationErrors(type, page.state.validators) });
            break;
        default:
            page.setState({ 'password' : displayValidationErrors(type, page.state.validators) });
    }
}

const InputChange = (type, page) => {
    let textInput = document.getElementById(type).value;   
    updateValidation(type , textInput, page.state.validators);
    page.setState(SetstateForm(type, page)); 
    page.setState({ edit: true }); 
}

const Errors = ( page ) => {
    let validators = page.state.validators; 
    let errors = { username: '', email: '', password: ''}; 
    Object.keys(validators).forEach((field) => {
        if (!validators[field].valid) {
            errors[field] = (
                page.state[field].map((error, i) => {     
                    return (<div className="error" key={i}> {error} </div>) 
                })
            )
        } else {
            errors[field] = <div className="success"> {field} is form valid </div>
        } 
    });
    return errors; 
}

const AddInputsToForm = (props) => {
    let atributeArray = props.atributeArray; 
    return (
        <div>
            { 
                atributeArray.map((Atribute, i) => {
                    return (
                        <div key = {i}>
                            <Inputthemes
                                hintText = { Atribute.hintText }
                                floatingLabelText = { Atribute.floatingLabelText } 
                                id = { Atribute.id }
                                onChange = {(event) => InputChange( Atribute.id, props.page)}
                            />
                            { props.errors[Atribute.id] }
                            <br />
                        </div>
                    )
                })
            }
        </div>
    );
}

const Formthemes = (props) => {
    let stateForm =  props.page.state; 
    let errors = Errors( props.page ); 
    let buttonRegister = ''; 
    if ( isFormValid(stateForm.validators) ){
        buttonRegister = (
            <RaisedButton label="Submit" primary={true} style={style} onClick={(event) => props.page.handleClick(event)} />
        ); 
    }
    return (
        <div>
            <MuiThemeProvider>
                <div>
                    <AppBar title = {props.title}  />
                    <AddInputsToForm 
                        atributeArray = { stateForm.inputManagement }
                        page = {props.page}
                        errors = {errors} 
                    />
                    { buttonRegister }    
                </div>
            </MuiThemeProvider>
        </div>
    ); 
}

const style = {
    margin: 15,
};

export default Formthemes; 