import React from 'react';
import ReactDOM from 'react-dom';
import * as serviceWorker from './serviceWorker';
import App from './App'; 
import { BrowserRouter } from 'react-router-dom';

require('dotenv').config()

ReactDOM.render(<BrowserRouter> <App /> </BrowserRouter>, document.getElementById('root')); 

serviceWorker.unregister();