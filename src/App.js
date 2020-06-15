import React, { Component } from "react";
import './App.css';
import {BrowserRouter as Router ,Route, Switch, Redirect} from "react-router-dom";
import Transformers from './Components/Transformers';
import Members from './Components/Members';
import NavBar from './Components/NavBar';
import Login from './Components/Auth/Login';
import Profile from './Components/Auth/Profile';
import Register from './Components/Auth/Register';
import Callback from './Callback/Callback';
import Home from './Components/Home';
import Auth from './Components/Auth/Auth';
import Product from './Components/Product';
import { observer, inject } from 'mobx-react'
import { Provider } from 'mobx-react';

@inject('us','ps')
@observer
class App extends Component {
    constructor(props){
        super(props);
         this.state= {
          }
     }
     
      render(){

        const Routes = (props) =>{
            
            return(
                <Switch>
                    <ProtectedLogin exact path="/Login" user={ this.props.us.currentUser} component={Login}/>
                    <ProtectedProfile exact path="/Profile" user={ this.props.us.currentUser}  component={Profile}/>
                    <ProtectedRegister exact path="/Register" user={ this.props.us.currentUser}  component={Register}/>
                    <ProtectedProduct exact path="/Product" history={this.props.history} user={this.props.us.currentUser} component={Product}/>                    
                    <ProtectedTransformers excat path="/Transformers" user={ this.props.us.currentUser} component={Transformers}/> 
                </Switch>
            )
        }

        const ProtectedProfile = ({user,component:Component, ...rest}) =>{
            return (
                <Route
                {...rest}
                render = {()=>this.props.us.currentUser? (
                    <Component user={this.props.us.currentUser}/>
                ):
                (
                 <Redirect to="/Login"/>
                )
            }
                />
            )
        } 
        
        const ProtectedLogin = ({user,component:Component, ...rest}) =>{
            return (
                <Route
                {...rest}
                render = {()=>!this.props.us.currentUser? (
                    <Component user={user} auth={this.props.auth}/>
                ):
                (
                 <Redirect to="/Profile"/>
                )
            }
                />
            )
        } 
        
        const ProtectedRegister = ({user,component:Component, ...rest}) =>{
            return (
                <Route
                {...rest}
                render = {()=>!this.props.us.currentUser? (
                    <Component user={user}/>
                ):
                (
                 <Redirect to="/Profile"/>
                )
            }
                />
            )
        } 

        const ProtectedProduct = ({user,component:Component, ...rest}) =>{
            return (
                <Route
                {...rest}
                render = {()=>this.props.us.currentUser? (
                    <Component user={user}/>
                ):
                (
                 <Redirect to="/Transformers"/>
                )
            }
                />
            )
        } 
        
        const ProtectedTransformers = ({user,component:Component, ...rest}) =>{
            return (
                <Route
                {...rest}
                render = {()=>!this.props.us.currentUser? (
                    <Component user={user}/>
                ):
                (
                 <Redirect to="/Product"/>
                )
            }
                />
            )
        } 

        return (
            
            <Provider store={this.props.us, this.props.ps}>
                 <Auth />
                    <div className="App">
                 <Router>
                    <NavBar />
                    <Routes/>
                    <Route exact path="/" render={() => <Home history={this.props.history}/>}></Route>
                    <Route excat path="/Members" render={() => <Members />}></Route>
                    <Route exact path='/callback' render={() => <Callback auth={this.props.auth}/>}></Route>
                </Router>
                </div>
                </Provider>
        )
      }
    }
 export default App; 