import React from 'react';

import { Register } from 'components/Page/Register'; 
import { Login } from 'components/Page/Login'; 
import { ForgotPassword } from 'components/Page/ForgotPassword'; 
import { ResetPassword } from 'components/Page/ResetPassword'; 
import { Admin } from 'components/Page/Admin'
import { ProtectedRoute } from 'router/protected.route'; 
import { Home } from 'components/Page/Home'; 

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
                <Route path="/Admin" component={Admin} />
                {/* <ProtectedRoute path="/Home"/> */}
                <Redirect from="/" to="/Home" />
            </Switch>
        </Router>
    ); 
}

export default App; 