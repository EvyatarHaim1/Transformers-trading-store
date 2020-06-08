import React, { Component } from 'react';
import { Button, Container } from '@material-ui/core';
import { observer, inject } from 'mobx-react';
import { Input } from '@material-ui/core';
import Profile from '../Profile';
import { toast } from 'react-toastify';
import {Header} from 'semantic-ui-react';
import { FaRegUser, FaLock } from 'react-icons/fa';

@inject('us')
@observer
class Login extends Component {
	constructor(props) {
		super(props);
		this.state = {
			isLoggedIn: false,
			loading:this.props.us.loading,
			password:'',
			email: '',
			buttonDisabled: false
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

	login = async () => {
		if(this.state.email && this.state.password){
			this.setState({
				buttonDisabled: true
			});
			await this.props.us.loginByEmail(this.state);
		}
	};

	render() {
		return (
			<Container className={'loginBG'}>
				<div className={'loginDiv'}>
					<Header className={'loginTitle'}>Login </Header>
					<div className={'loginHeaders'}>
						<FaRegUser/> Email <br />
						<Input type="text" placeholder="Email" name="email" onChange={this.onChange} />
					</div>
					<div className={'loginHeaders'}>
					    <FaLock /> Password <br />
						<Input type="text" placeholder="Password" name="password" onChange={this.onChange} />
					</div>
					<Button
						disabled={!this.state.email || !this.state.password }
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
					{this.props.us.currentUser ? <Profile /> : null}
				</div>
			</Container>
		);
	}
}
export default Login;
