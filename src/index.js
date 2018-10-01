import React from "react";
import ReactDOM from "react-dom";
import App from './components/App/app';
import {Switch,BrowserRouter,IndexRouter,Redirect, Route} from 'react-router-dom';


ReactDOM.render(
                <BrowserRouter>
                    <App /> 
                </BrowserRouter>
  ,
  document.getElementById("root")
);
