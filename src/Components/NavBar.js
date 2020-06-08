import React, { Component } from 'react';
import {AppBar, Toolbar, IconButton, MenuList, MenuItem} from '@material-ui/core';
import MenuIcon from '@material-ui/icons/Menu';
import { Link } from "react-router-dom";
import { observer, inject } from 'mobx-react';
import Register from './auth/Register';
import Login from './auth/Login';

@inject('us')
@observer
  class NavBar extends Component {
    constructor(props) {
      super(props)
        this.state=({
          logedIn:this.props.us.isLoggedIn
        })
       }
  
    render() {
      

      return (
        <div >
          <AppBar position="static" style={{backgroundColor: 'black', color: 'white'}} >
            <Toolbar >
            <IconButton edge="start" color="inherit" aria-label="menu"/>
            <MenuIcon  />
            <MenuList className="Links">
              <MenuItem className="Link" component={Link} to="/">
              Home
              </MenuItem>
              <MenuItem className="Link" component={Link} to="/Transformers">
              Transformers
              </MenuItem>
              <MenuItem className="Link" component={Link} to="/Members">
              Members
              </MenuItem>
              <MenuItem className="Link" component={Link} to="/Register">
              Register
              </MenuItem>
              <MenuItem className="Link" component={Link} to="/Login">
              {this.props.us.isLoggedIn? 'Logout' : 'Login'}
              </MenuItem>
              <MenuItem className="Link" component={Link} to="/Profile">
              {this.props.us.isLoggedIn? this.props.us.currentUser.picture : null}
              </MenuItem>
            </MenuList>
        </Toolbar>
          </AppBar>
          <div>
          </div>
        </div>
        )
    }
}

export default NavBar;
