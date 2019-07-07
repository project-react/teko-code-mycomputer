import React from 'react'
import { useGlobal } from 'reactn'
import RaisedButton from 'material-ui/RaisedButton';
import Button from '@material-ui/core/Button';
import auth from 'services/auth'; 
import { material } from 'components/material-ui'



const LoginButton = (Page) => {

    const handleClick = (event) => {
        auth.login(() => {
            Page.Page.props.history.push("/Admin");
        }); 
    } 

    return (
        <div>
            <RaisedButton label="Login" primary={true} style={style} onClick={ handleClick } />
        </div>
    )
}

const style = {
    margin: 15,
};

const LogoutButton = (props) => {
    const classes = material.useStyles();
    const handleClick = () => {
        auth.logout(() => {
            props.history.push("/");
        });
    }

    return (
        <div>
            <Button onClick={ handleClick } color="primary" variant="outlined" className={classes.link}>
                Logout
            </Button>
        </div>
    )
}

const SubmitButton = (props) => {
    const [type] = useGlobal('type'); 
    const handleClick = (event) => {
        event.preventDefault()
        console.log(type); 
    } 

    return (
        <div>
            <RaisedButton label="Submit" primary={true} style={style} onClick={ handleClick } />
        </div>
    )
}

export default {
    LoginButton,
    LogoutButton, 
    SubmitButton
}