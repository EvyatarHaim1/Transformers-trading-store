import React, { Component } from 'react';
import './../App.css';
import { observer, inject } from 'mobx-react'
import EditUser from './EditUser';
import { Button } from '@material-ui/core';

@inject('us')
@observer
 class Profile extends Component {
    constructor(props){
        super(props)
        this.state=({
          firstName: this.props.us.currentUser.firstname,
          lastName: this.props.us.currentUser.lastname,
          email: this.props.us.currentUser.email,
          age: this.props.us.currentUser.age,
          city : this.props.us.currentUser.city,
          phone: this.props.us.currentUser.phone,
          password: this.props.us.currentUser.password,
          country: this.props.us.currentUser.country,
          acquired: this.props.us.currentUser.acquired,
          products: this.props.us.currentUser.products, 
          picture: this.props.us.currentUser.picture,
          credit: this.props.us.currentUser.credit,
          edit: false
        })
    } 
    
  componentDidMount= async()=>{
}

editUser = async()=> {
  if(!this.state.edit){
  this.setState({
    edit: true
  })
}
}

    render() {
  return (
      <div className={"userContainer"}>
        <h1 id={"welcomeUser"}> welcome <br/>{this.state.firstName} {this.state.lastName}</h1>
        <ul className={"userDetails"}>
        <li><Button style={{backgroundColor: '#867979', color: 'white'}} onClick={this.editUser}> Edit User </Button></li>
          <li> <img alt={"userPic"} className="userPic" src ={this.state.picture}/> </li>
          <li> Email: {this.state.email}</li>
          <li>Age: {this.state.age}</li>
          <li> City : {this.state.city}</li>
          <li>Phone: {this.state.phone},</li>
          <li>Password: {this.state.password}</li>
          <li>Country: {this.state.country}</li>
          <li>Shopping History: {this.state.acquired}</li>
          <li>Published products:{this.state.products} </li>
          <li>credit: {this.state.credit}</li>
        </ul>
        <div>{this.state.edit === true ? <EditUser userDetails={this.state}/> : null}</div>
      </div>
  )
  }
}
export default Profile;