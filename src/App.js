import React from 'react';

import Register from './components/Page/Register/Register'; 
import Login from './components/Page/Login/Login'; 
import ForgotPassword from './components/Page/ForgotPassword/ForgotPassword'; 
import ResetPassword from './components/Page/ResetPassword/ResetPassword'; 
import Home from './components/Page/Home/Home'; 

import { BrowserRouter as Router, Redirect, Route, Switch } from 'react-router-dom'; 

const App = () => {
    return (
        <Router>
            <Switch>
                <Route path="/Login" component={Login} />
                <Route path="/Register" component={Register} />
                <Route path="/ForgotPassword" component={ForgotPassword} />
                <Route path="/ResetPassword" component={ResetPassword} />
                <Route path="/Home" component={Home} />
                <Redirect from="/" to="/Login" />
            </Switch>
        </Router>
    ); 
}

export default App; 