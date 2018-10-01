import React, { Component } from 'react';
import { Navbar, Button } from 'react-bootstrap';
import {Switch,BrowserRouter,IndexRouter,Redirect, Route} from 'react-router-dom';
import Home from '../Home/Home';

class App extends Component { 
  render(){
      return (
        <Switch>
        <Route exact path={"/home"} component={Home} />                             
              <Route path="/" render={()=>"nothing to do here"}  />
              
        </Switch>
      );
  }
}

export default App;