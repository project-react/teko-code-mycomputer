import React from 'react';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import RaisedButton from 'material-ui/RaisedButton';
import { Link } from 'react-router-dom'

const ButtonDesign = (Array) => {
    return (
        <div>
            {
                Array.map((i) => {
                    let ref = '/' + i; 
                    return (
                        <div key={i}>
                            <Link to = {ref} ><RaisedButton label = {i} primary={true} style={style} /></Link>  
                        </div>
                    ); 
                })
            }
        </div>
    ); 
}

const Linkthemes = (props) => {
    const listButton = ButtonDesign(props.buttonManagement); 
    return (
        <div>
            <MuiThemeProvider>
                { listButton }
            </MuiThemeProvider>
        </div>
    ); 
}

const style = {
    margin: 15,
};

export default Linkthemes; 