import React, { Component } from 'react';
import { observer, inject } from 'mobx-react'
import moment from 'moment'


@inject('us')
@observer
class MembersDetails extends Component {
   constructor(){
   super()
    this.state={
        email:"",
        popUp:false
     }
}

//     closePop=()=>{
//         this.setState({
//             popUp: !this.state.popUp
//            },function(){
//                console.log(this.state.popUp)
//            })

//     }
//    togglePop=()=>{
       
//     if(!this.state.popUp){
//        this.setState({
//         email:this.props.item.email,
//         popUp: !this.state.popUp
//        },function(){
//        })
//     }
//    }

    render() {
        return (
            <tr onClick={this.togglePop} value={this.props.item}>
            <td><img style={{width:"60px"}} alt={"userImg"} src={this.props.item.picture}></img></td>
            <td>{this.props.item.firstname}</td>
            <td>{this.props.item.lastname}</td>
            <td>{this.props.item.age}</td>
            <td className="email" >{this.props.item.email}</td>
            <td>{this.props.item.city}</td>
            <td>{this.props.item.country}</td>
            <td>{this.props.item.phone}</td>
            <td>{this.props.item.acquired ===1 ? '✔': '❌'}</td>
            <td>{this.props.item.products ===1 ? '✔': '❌'}</td>
            </tr> 
        );
    }
}

export default MembersDetails

