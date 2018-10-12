import React from 'react';

const Context =  React.createContext();

class AuthContext extends React.Component{
    
    constructor(props){
        super(props)
        this.handleSignIn = this.handleSignIn.bind(this);
        this.handleSignOut = this.handleSignOut.bind(this);
        this.isAuthenticated = this.isAuthenticated.bind(this);
        this.checkToken = this.checkToken.bind(this);
    }

    checkToken =(token)=>{
        //implement here the jwt api token validation
        return true;
    }    

    handleSignIn =(credentials) =>{
      return new Promise((resolve,reject)=>{     
        console.log(`user informed ${credentials.user}`);
        console.log(`session storage${sessionStorage.getItem("ControleRotinas.UserToken")}`)
        let token = sessionStorage.getItem("ControleRotinas.UserToken");

        if(credentials.user ===`test` && this.checkToken(token)){
            sessionStorage.setItem(`ControleRotinas.UserToken`,"test");
            resolve(this.isLogged);
        }
        else
            reject("401 - Not authorized");
        }
      )
    }

    handleSignOut=()=>{
        return new Promise((resolve,reject)=>{
                  try{
                    sessionStorage.removeItem("ControleRotinas.UserToken");
                    console.log(`Logged out!`);
                    resolve(200);
                  }
                  catch(err){
                    reject(err);
                  }   
              }
        )
      }

    isAuthenticated =()=>{
        console.log(`checking token`);
        let token = sessionStorage.getItem("ControleRotinas.UserToken");
        return this.checkToken(token);
    }


    render(){
        return(
            <Context.Provider value={{isAuthenticated: this.isAuthenticated,
                                      handleSignIn: this.handleSignIn,
                                      handleSignOut:this.handleSignOut}}>
                {this.props.children}
            </Context.Provider>
        )
    }

}

const AuthContextConsumer =  Context.Consumer;

export  {AuthContext,AuthContextConsumer};
