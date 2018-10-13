import React, { Component } from 'react';
import { Navbar, Button } from 'react-bootstrap';
import {Switch,BrowserRouter,IndexRouter,Redirect, Route} from 'react-router-dom';
import Home from '../Home/Home';
import Login from '../Login/Login';
import {AuthContext,AuthContextConsumer} from '../Auth/AuthContext';
import ProtectedRoute from '../ProtectedRoute/ProtectedRoute';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';



//Pallete https://coolors.co/161925-4b5d78-8ea8c3-e63946-eb5e55
//https://coolors.co/161925-4b5d78-8ea8c3-457b9d-d4f8f0

const styles = theme => ({
  body:{
    "background-color":"#161925",
    height:"100%",
  },
});

class App extends Component { 
  render(){
    const {classes} = this.props;
      return (
        <div className={classes.body}>
        <AuthContext>
          <Switch>
            <Route   path="/" component={Login} />
            <Route   path="/login" component={Login} />
            <ProtectedRoute path={"/home"} component={Home} />                             
          </Switch>
        </AuthContext>
        </div>
      );
  }
}


App.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(App);