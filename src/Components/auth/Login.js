import React, { Component } from 'react';
import { Button, Container } from '@material-ui/core';
import { observer, inject } from 'mobx-react';
import { Input } from '@material-ui/core';
import Profile from './Profile';
import { toast } from 'react-toastify';
import {Header} from 'semantic-ui-react';
import { FaRegUser, FaLock } from 'react-icons/fa';
import {BrowserRouter as Router ,Route, Switch, Redirect} from "react-router-dom";

@inject('us', 'ps')
@observer
class Login extends Component {
	constructor(props) {
		super(props);
		this.state = {
			isLoggedIn: false,
			loading:this.props.us.loading,
			password:'',
			email: '',
			buttonDisabled: true,
			auth: false
		};
		this.onChange = this.onChange.bind(this);
		this.login = this.login.bind(this);
	}
	
	onChange = (e) => {
		console.log(e.target.name, e.target.value);
		this.setState({
			[e.target.name]: e.target.value
		});
	};

    resetForm = async()=>{
		this.setState({
		   password:'',
		   email: '',
		   buttonDisabled: true,
		   auth: false
		})
	   }


	login = async () => {
		if(!this.state.password){
			return;
		}
		if(!this.state.email){
			return;
		}
		try{
			let result = await this.props.us.loginByEmail(this.state);
			if(!this.props.us.currentUser){
				alert('Password or Email incorrect')
				this.resetForm()
				return;
			}
			else if (result && this.props.us.currentUser){
				this.props.us.isLoggedIn = true;
				this.props.us.currentUser = result;
				this.props.us.username = result.firstname + result.lastname;
				this.props.ps.auth0.loginWithRedirect()		
			}
		}
			catch(e){
				console.log(e)
				this.resetForm()
			}
		}
	
	

	render() {
		return (
			<Container className={'loginBG'}>
				<div className={'loginDiv'}>
					<Header className={'loginTitle'}>Login </Header>
					<div className={'loginHeaders'}>
						<FaRegUser/> Email <br />
						<Input style={{width:"250px"}} type="text" placeholder="Email" name="email" onChange={this.onChange} />
					</div>
					<div className={'loginHeaders'}>
					    <FaLock /> Password <br />
						<Input style={{width:"250px"}} type="password" placeholder="Password" name="password" onChange={this.onChange} />
					</div>
					<Button
						disabled={this.state.buttonDisabled} 
						variant="primary"
						onClick={this.login}
						style={{
							width: '100px',
							backgroundColor: 'black',
							color: 'white',
							margin: 'auto',
							height: '40px',
							borderRadius: '20px'
						}}
					>
						Login
					</Button>
					{this.state.email && this.state.password ? this.state.buttonDisabled = false  : null}
					{this.props.ps.loading ? <i className="fa fa-gear fa-spin"/>: null} 
					{this.props.us.currentUser ? <Redirect to="/Profile"/> : null }
				</div>
			</Container>
		);
	}
}
export default Login;


