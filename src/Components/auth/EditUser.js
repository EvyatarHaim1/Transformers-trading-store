import React, { Component } from 'react'

export class EditUser extends Component {
    constructor(props){
    super(props)
    this.state=({
        firstName: this.props.userDetails.firstName,
          lastName: this.props.userDetails.lastName,
          email: this.props.userDetails.email,
          age: this.props.userDetails.age,
          city : this.props.userDetails.city,
          phone: this.props.userDetails.phone,
          password: this.props.userDetails.password,
          country: this.props.userDetails.country,
          buyer: this.props.userDetails.buyer,
          seller: this.props.userDetails.seller, 
          picture: this.props.userDetails.picture,
          credit: this.props.userDetails.credit,
    })
    }
    render() {
        return (
            <div>
                edit user component
            </div>
        )
    }
}

export default EditUser
