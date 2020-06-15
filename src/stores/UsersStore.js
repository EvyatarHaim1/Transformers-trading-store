import { observable, action } from 'mobx'
import { user } from './user'
import axios from 'axios';

 export class UsersStore {
     @observable.ref users=[];
     @observable.ref isLoggedIn = false
     @observable.ref loading = true
     @observable.ref username= ""
     @observable.ref currentUser= ""
     @observable.ref countries= []



  setLoader(loading) {
    this.loading = loading;
  }
  setAuth(token) {
    this.authenticated = token;
  }
  initialize(auth0) {
    this.auth0 = auth0;
  }


    @action fetch_Users_Api = async()=>{
       await axios.get(`http://localhost:4200/users/getUsersFromApi`)     
}

    @action get_all_users_from_DB = async()=>{
      let usersfromDB = await axios.get(`http://localhost:4200/users/getUsersFromDB`)
      let temp = []
    usersfromDB.data.map(u => temp.push(new user(u._id,u.firstname,u.lastname,u.email,u.age,u.city,
    u.phone,u.password,u.country,u.acquired,u.products,u.picture,u.credit,)))
    console.log(temp)
    this.users =  temp   
}


@action getCountries=async ()=>{
  let countries= await axios.get(`https://restcountries.eu/rest/v2/all`)
  this.countries=countries.data
  }
  
@action searchByCategory = (category, text) => {
  console.log(category,text)
  if(text){
  let filtered = this.users.filter(e => e[category.toLowerCase()].toLowerCase().includes(text.toLowerCase()))
  this.users = filtered
  }else{
  this.get_all_users_from_DB()
  }
}


@action loginByEmail = async(loginUser) => {
  let currentUser = await axios.post(`http://localhost:4200/users/loginUser`,{
    auth:{
      loginUser
    }
  })
  this.currentUser= currentUser.data
  this.isLoggedIn = true
}

   
   @action register = async(newuser)=>{
     console.log(newuser)
     await axios.post(`http://localhost:4200/users/register`, {
       auth: {
         newuser
        }
      },{withCredentials : true}
      )
      this.get_all_users_from_DB()
    }
    
    @action editUser = async(user)=>{
     let currentUser = await axios.post(`http://localhost:4200/users/loginUser`,user)
     this.currentUser = currentUser.data
   }


}

