import React, {Component} from 'react';
import { withRouter } from 'react-router';
import { observer, inject } from 'mobx-react';
@inject('us','ps')
@observer
class Callback extends Component{
  async componentWillUpdate(nextProps){
    await this.props.ps.auth0.handleRedirectCallback();
    let token = await this.props.ps.auth0.getTokenSilently();
    this.props.ps.setAuth(token);
    this.props.history.push('/');
  }
  render(){
    return(
      <div>Loading user profile. {this.props.ps.loading ?
        <i style={{color: 'black'}} className="fa fa-gear fa-spin"></i>
        : null}
      </div>
    )
  }
}
export default withRouter(Callback);