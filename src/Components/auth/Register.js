import React, { Component } from 'react';
import { Input, Button} from '@material-ui/core';
import { observer, inject } from 'mobx-react';
import {storage} from "../../firebase/firebase";
import { toast } from 'react-toastify';
import Select from 'react-select';
import axios from 'axios';
import { FaRegUser,FaCity, FaBirthdayCake,  FaUsers, FaPhoneAlt, FaLock, FaEnvelope, FaCreditCard,FaGlobeAmericas } from 'react-icons/fa';

@inject('us')
@observer
class Register extends Component {
    constructor(props){
        super(props)
        this.state={  
            firstname:"" ,
            lastname:"" ,
            email:"" ,
            age:"",
            city :"" ,
            phone:"",
            password: "",
            country: "",
            acquired: [],
            products: [], 
            picture: "",
            credit: 500,
            btnDisabled : true,
            country:"Afghanistan",
            countryFlag: this.props.us.countries.map(e=>e.flag)
        }
        this.pictureHandler = this.pictureHandler.bind(this);
        this.register = this.register.bind(this);
    }

    componentDidMount = () => {
        this.props.us.getCountries()
    }

    handleInput=(e)=>{
      e.preventDefault()
    console.log(e.target.name,e.target.value)
        this.setState({
        [e.target.name]:e.target.value
      })
      } 

    pictureHandler=(e)=>{
        const image = e.target.files[0];
        this.setState({
            picture: image,
            btnDisabled : false
            });
    }

    uploadImgToFirebase = async (e) => {
        e.preventDefault()
    const selectedImg = this.state.picture 
    console.log('start of upload')
    if(this.state.picture === '') {
      console.error(`not an image, the image file is a ${typeof(image)}`)
    }
      const uploadTask = storage.ref(`/images/${selectedImg.name}`).put(selectedImg)
    uploadTask.on('state_changed', 
    (snapShot) => {
      console.log(snapShot)
    }, (err) => {
      console.log(err)
    }, async() => {
      await storage.ref('images').child(selectedImg.name).getDownloadURL()
        .then(fireBaseUrl => {
          this.setState({
              picture: fireBaseUrl
          })
        })
    })
    }

    register = async()=>{
      await this.props.us.register(this.state)
      toast.success('You have successfully registered')
    }
    
    render() {
        return (
        <div className={"borderRegister"}>
            <form className={"register"}>
               <h1 className={"newUserTitle"} >ADD USER</h1>
               <ul className={"newUserList"}>
                  <li> <FaRegUser/> FirstName <br></br> <Input className='a' type="text" placeholder="FirstName" 
                      name="firstname" onChange={this.handleInput} required> </Input></li>
                  <li> <FaPhoneAlt/> Phone <br></br> <Input className='a' type="text" placeholder="phone" 
                      name="phone" onChange={this.handleInput} required> </Input></li>
                  <li> <FaBirthdayCake/> Age <br></br> <Input className='a' type="number" placeholder="age" 
                      name="age" onChange={this.handleInput} required> </Input></li>
                  <li> <FaUsers/> LastName <br></br> <Input className='a' type="text" placeholder="lastName" 
                      name="lastname" onChange={this.handleInput} required> </Input></li>   
                  <li><FaCity/> City <br></br> <Input className='a' type="text" placeholder="city" 
                      name="city" onChange={this.handleInput} required> </Input></li>
                  <li> <FaLock/> Password <br></br>  <Input className='a' type="text" placeholder="password" 
                      name="password" onChange={this.handleInput} required> </Input></li>
                  <li> <FaEnvelope/> Email <br></br> <Input className='b' type="text" placeholder="email" 
                      name="email" onChange={this.handleInput} required> </Input></li>
                    <li> <FaCreditCard/> Credit<br></br> <Input className='b' type="number" placeholder="credit" 
                        name="credit" onChange={this.handleInput} required> </Input></li>
                  <li > <FaGlobeAmericas/> Country:<form className="c">
                    <select className="b" className="countrySelect" 
                      name='country' onChange={this.handleInput} required>
                    {this.props.us.countries.map(e=> <option key={e.name}> {e.name} </option> )}
                    </select>  
                    </form>
                  </li>
                    <li><Input style={{width:"150px", height:"50px"}} className="d" type="file" name="file" onChange={(e)=>this.pictureHandler(e)} required></Input></li>
                  <li> 
                    <Button className={this.state.btnDisabled ? 'background-gray' : 'background-black'} 
                            onMouseDown={this.uploadImgToFirebase} 
                            onMouseUp={this.uploadImgToFirebase}
                            style={{width:"150px", backgroundColor:"gray", color:'white', height:"50px"}}
                            disabled={this.state.btnDisabled}
                            >
                            Upload picture</Button></li> <br/>
                  <li className="f" ><Button onClick={this.register} className="e"
                  style={{width:"150px", backgroundColor:"black", color:'white', height:"50px"}}
                          >Register
                  </Button> 
                  </li>
            </ul>
            </form>
        </div>
        )
    }
}

export default Register
