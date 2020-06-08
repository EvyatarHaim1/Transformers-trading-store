// import React,{useState} from 'react'
// import './App.css';
// import {BrowserRouter as Router,Route, Link, Switch, Redirect} from "react-router-dom";
// import Transformers from './Components/Transformers';
// import Members from './Components/Members';
// import NavBar from './Components/NavBar';
// import Login from './Components/Login';
// // import Profile from './Components/Profile'
// import { observer, inject } from 'mobx-react';
// import Register from './Components/Register';
// import Home from './Components/Home';
// import { Button } from '@material-ui/core';
// import AuthApi from './auth/auth';
// import Cookies from 'js-cookie';


// function App() {
//   const [currentUser, setCurrentUser] = useState('')
//    const [isLoggedIn, setIsLoggedIn] = useState(false)
//    const [loading, setLoading] = useState(true)
//    const [auth, setAuth] = React.useState(false);

//    const readCookie = () => {
//      const user = Cookies.get("user")
//      if(user){
//        setAuth(true)
//      }
//    }
//   React.useEffect(()=>{
//     readCookie();
//   }, [])

//     return (
//         <div className="App">
//         <AuthApi.Provider value={auth,setAuth}>
//         <Router>
//               <NavBar/>
//               <Routes/>
//               <Route excat path="/" exact render={() => <Home />}></Route>
//               <Route excat path="/Members" exact render={() => <Members />}></Route>
//               <Route excat path="/Transformers" exact render={() => <Transformers/>}></Route>
//         </Router>
//         </AuthApi.Provider>
//           </div>
//       )
//       }
  
//     function LoginAuth () {
//       console.log('hola')
//       const Auth = React.useContext(AuthApi)
//       const handleOnClick = () => {
//        Auth.setAuth(true);
//        Cookies.set("user","loginTrue")
//       }
//     return(
//         <div>
//            <Button onClick={handleOnClick}>Login</Button>
//         </div>
//     )
//     }

//     const Profile = () => {
//       const Auth = React.useContext(AuthApi)
//       const handleOnClick= ()=>{
//        Auth.setAuth(false)
//        Cookies.remove("user")
//       }
//         return(
//             <div>
//                 <h1> Profile </h1>
//                 <Button onClick={handleOnClick}>Logout</Button>
//             </div>
//         )
//         }
    

//     const Routes = ()=>{
//       const Auth = React.useContext(AuthApi)
//       return(
//         <Switch>
//           <ProtectedLogin path="/login" login={LoginAuth} component={Login} auth={Auth.auth}/>
//           <ProtectedRegister path="/Register" component={Register} auth={Auth.auth}/>
//           <ProtectedProfile path="/Profile" component={Profile} auth={Auth.auth}/>
//         </Switch>
//       )
//     }
    
//     const ProtectedProfile = ({auth,component:Component,...rest}) =>{
//       return(
//         <Route
//         {...rest}
//         render = {()=>auth? (
//           <Component/>
//         ):
//         (
//           <Redirect to="/login"/>
//         )
//       }
//         />
//       )
//     }
    
//     const ProtectedLogin = ({auth,component:Component,...rest}) =>{
//       return(
//         <Route
//         {...rest}
//         render = {()=>!auth? (
//           <Component/>
//         ):
//         (
//           <Redirect to="/Profile"/>
//         )
//       }
//         />
//       )
//     }

//     const ProtectedRegister = ({auth,component:Component,...rest}) =>{
//       return(
//         <Route
//         {...rest}
//         render = {()=>!auth? (
//           <Component/>
//         ):
//         (
//           <Redirect to="/Profile"/>
//         )
//       }
//         />
//       )
//     }
//     export default App;