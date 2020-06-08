import React, { Component } from 'react'
import './App.css';
import {BrowserRouter as Router,Route, Link, Switch, Redirect} from "react-router-dom";
import Transformers from './Components/Transformers';
import Members from './Components/Members';
import NavBar from './Components/NavBar';
import Login from './Components/auth/Login';
import Profile from './Components/Profile';
import { observer, inject } from 'mobx-react';
import Register from './Components/auth/Register';
import Home from './Components/Home';
import { Button } from '@material-ui/core';
import AuthApi from './Components/auth/Registration'
import axios from 'axios';


@inject('us')
@observer
class App extends Component {
  constructor(props){
    super(props)
    this.state={  
        auth: false
    }
  }
 

checkLoginStatus(){
axios.get(`http://localhost:4200/users/logged_in`, {withCredentials: true}).then(response =>{
  console.log('loggedIn in?', response);
}).
catch(error => {
  console.log("check login error", error );
})
}

componentDidMount(){
  this.checkLoginStatus();
}



  render(){
  return (
    <div className="App">
    <Router>
          <NavBar/>
          <Route excat path="/" exact render={() => <Home />}></Route>
          <Route excat path="/Members" exact render={() => <Members />}></Route>
          <Route excat path="/Transformers" exact render={() => <Transformers/>}></Route>
          <Route excat path="/Register" exact render={() => <Register/>}></Route>
          <Route excat path="/Login" exact render={() => <Login/>}></Route>
          <Route excat path="/Profile" exact render={() => <Profile/>}></Route>
    </Router>
   
      </div>
  )
  }
}


export default observer(App) 