import React from 'react';
import ReactDOM from 'react-dom';
import * as serviceWorker from './serviceWorker';

import Register from './components/Page/Register/Register'; 
// import { Login } from './components/Page/Login'; 
// import { input } from './components/themes/Inputthemes'; 

ReactDOM.render(<Register />, document.getElementById('Register')); 


// nguyenduychien test

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA


serviceWorker.unregister();
