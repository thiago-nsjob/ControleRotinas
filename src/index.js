import React from "react";
import ReactDOM from "react-dom";
import App from './components/App/app';
import jss from 'react-jss';
import {Switch,BrowserRouter,IndexRouter,Redirect, Route} from 'react-router-dom';
import './index.css';

ReactDOM.render(
                <BrowserRouter>
                    <App /> 
                </BrowserRouter>
  ,
  document.getElementById("root")
);
