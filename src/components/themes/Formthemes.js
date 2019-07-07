import React from 'react';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import AppBar from 'material-ui/AppBar';
import RaisedButton from 'material-ui/RaisedButton';
import Inputthemes from '../themes/Inputthemes';

import { updateValidation, displayValidationErrors, isFormValid } from '../../helpers/Validations/Validator';

const SetstateForm = (type, page) => {
    page.state.inputManagement[type].errors = displayValidationErrors(type, page.state.validators); 
}

const InputChange = (type, page) => {
    let textInput = document.getElementById(type).value;
    updateValidation(type, textInput, page.state.validators);
    page.setState(SetstateForm(type, page));
    page.setState({ edit: true });
}

const Errors = (page) => {

    let validators = page.state.validators;
    // Create smart object ref from state of page
    // {
    //     'username': ''
    //     'email': ''
    //     'password': ''
    // }
    let arrayErrors = Object.keys(page.state.inputManagement); 
    let state = { options: {} };
    arrayErrors.forEach((e, i) => state.options[e] = '');
    // => create new state 

    let errors = state.options; 
    
    Object.keys(page.state.inputManagement).forEach((field) => {
        if (!validators[field].valid) {
            errors[field] = (
                page.state.inputManagement[field].errors.map((error, i) => {     
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
                Object.keys(atributeArray).map( (i) => {
                    return (
                        <div key = {i}>
                            <Inputthemes
                                hintText = { atributeArray[i].hintText }
                                floatingLabelText = { atributeArray[i].floatingLabelText } 
                                id = { atributeArray[i].id }
                                type = { atributeArray[i].type }
                                onChange = {(event) => InputChange( atributeArray[i].id, props.page)}
                            />
                            { props.errors[atributeArray[i].id] }
                            <br />
                        </div>
                    ); 
                })
            }
        </div>
    );
}

const Formthemes = (props) => {

    let stateForm = props.page.state;

    let errors = Errors(props.page);

    let buttonHandle = ''; 

    if ( isFormValid(stateForm.validators, stateForm.inputManagement) ){
        buttonHandle = ( 
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
                        page = { props.page }
                        errors = { errors } 
                    />
                    { buttonHandle } 
                </div>
            </MuiThemeProvider>
        </div>
    );
}

const style = {
    margin: 15,
};

export default Formthemes; 