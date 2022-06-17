import React from "react";
import ReactDOM from "react-dom/client";
import {BrowserRouter as Router} from 'react-router-dom';

import App from './App';
import 'antd/dist/antd.css';
import './App.css';
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <Router>
        <App /> 
    </Router>
    
);