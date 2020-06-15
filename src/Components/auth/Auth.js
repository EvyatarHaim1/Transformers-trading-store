import createAuth0Client from '@auth0/auth0-spa-js';
import {Component} from 'react';
import {inject } from 'mobx-react';
@inject('ps')
class Auth extends Component{
  async componentWillMount(){
      let auth0 = await createAuth0Client({
        domain: 'dev-lgjx0d5i.auth0.com',
        client_id: 'Dj2ZypEI1gMHNL1Vz2XPIPGNd7v1a2Mt',
        redirect_uri: 'http://localhost:3000/callback',
        responseType: 'token id_token',
        scope: 'openid profile'
    });
    this.props.ps.initialize(auth0);
    this.props.ps.setLoader(false);
  }
  render(){
    return(null);
  }
}
export default Auth;