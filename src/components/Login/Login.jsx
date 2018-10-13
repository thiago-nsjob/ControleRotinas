import React, { Component } from 'react';
import {Button,Paper,Grid,TextField,Typography,FormControl,Input,OutlinedInput} from '@material-ui/core';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import {AuthContextConsumer} from '../Auth/AuthContext';
import Divider from '@material-ui/core/Divider';


const styles = theme => ({
  loginContainer:{
    display:"flex",
    "justify-content": "center",
    "align-items": "center",
    "padding-top":"10vh",
  },
  login:{
    "background-color": "#4B5D78",
    width:"400px",
    height:"500px",
  },
  textField:{
    width:"20em",
  },
  button: {
    "background-color": "#EB5E55",
    color:"white",
    textAlign: 'center',
    margin: theme.spacing.unit,
  },
  divider:{
    "width":"90%",
    "background-color":"#EB5E55",
    "margin-bottom":"1em",
  },
  title:{
    "margin-top":"5vh",
    align:"center",
    color:"white",
    "font-size":"55pt",
    "font-family":"LemonJelly",
    "width":"90%",
  }
});

class Login extends Component {
  render() {
    const {classes} = this.props;
    return (
       <AuthContextConsumer>
       {(args) => (
         <div className={classes.loginContainer}>
            <Paper className={classes.login}>
            <Grid container direction="row" justify="center" spacing={16}>
                <Typography align="center" component="h2"  gutterBottom className={classes.title}>
                  Controle Rotinas
                </Typography>
                <Divider className={classes.divider} />
                <TextField 
                  id="outlined-email-input"
                  label="Email"
                  type="email"
                  name="email"
                  className={classes.textField}
                  autoComplete="email"
                  margin="normal"
                  variant="outlined"
                  FormHelperText={{}}
                />
                 <TextField 
                  id="outlined-email-input"
                  label="Password"
                  type="password"
                  name="Password"
                  className={classes.textField}
                  margin="normal"
                  variant="outlined"
                />
                <Grid item xs={4}>
                    <Button size="large" variant="contained" color="primary" onClick={()=>args.isAuthenticated()} className={classes.button}>
                      Sign In
                    </Button>
                </Grid>
                <Grid item xs={4}>
                    <Button size="large" variant="contained" color="secondary" onClick={()=>args.isAuthenticated()} className={classes.button}>
                      Sign up
                    </Button>
                </Grid> 
              </Grid>
            </Paper>
          </div>
        )}
       </AuthContextConsumer>
    );
  }
}

Login.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(Login);