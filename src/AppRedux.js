// import React, { useContext } from "react";
// import './App.css';
// import {BrowserRouter as Router ,Route, Switch, Redirect} from "react-router-dom";
// import Transformers from './Components/Transformers';
// import Members from './Components/Members';
// import NavBar from './Components/NavBar';
// import Login from './Components/auth/Login';
// import Profile from './Components/auth/Profile';
// import Register from './Components/auth/Register';
// import Home from './Components/Home';
// import AuthApi from './Components/auth/auth';
// import Cookies from 'js-cookie';

//  export default function App( props ){
//     const [auth, setAuth] = React.useState(false); 


//     const readCookies = () =>{
//         const user = Cookies.get("user");
//         if(user){
//             setAuth(true);
//         }
//     }
//     React.useEffect(()=>{
//         readCookies();
//     },[])
    
//         return (
//             <div className="App">
//                 <AuthApi.Provider value={{auth,setAuth}}>
//                 <Router>
//                     <NavBar />
//                     <Route excat path="/" exact render={() => <Home />}></Route>
//                     <Route excat path="/Members" exact render={() => <Members />}></Route>
//                     <Route excat path="/Transformers" exact render={() => <Transformers/>}></Route>
//                    <Routes/>
//                 </Router>
//                 </AuthApi.Provider>
//             </div>
//         )
//     }

//  export const LoginAuth = (props)=> {
//      const Auth = React.useContext(AuthApi)
//      const clickHandler = () => {
//         Auth.setAuth(true);
//         Cookies.set("user", "loginTrue")
// }
// return(
//     <div>
//         <button onClick={clickHandler}>Profile</button>
//     </div>
// )
// }

//  export const LogoutAuth = (props)=>{
//     const Auth = React.useContext(AuthApi)
//     const clickHandler = () => {
//        Auth.setAuth(false);
//        Cookies.remove("user");
//    }
// return(
//    <div>
//    <button onClick={clickHandler}>Logout</button>
//    </div>
// )
// }

// const Routes = (props) =>{
//     const Auth = React.useContext(AuthApi)
//     return(
//         <Switch>
//             <ProtectedLogin path="/Login" auth={Auth.auth} component={Login}/>
//             <ProtectedProfile path="/Profile" auth={Auth.auth} component={Profile}/>
//             <ProtectedRegister path="/Register" auth={Auth.auth} component={Register}/>
//         </Switch>
//     )
// }

// const ProtectedProfile = ({auth,component:Component, ...rest}) =>{
//     return (
//         <Route
//         {...rest}
//         render = {()=>auth? (
//             <Component auth={auth}/>
//         ):
//         (
//          <Redirect to="/Login"/>
//         )
//     }
//         />
//     )
// } 

// const ProtectedLogin = ({auth,component:Component, ...rest}) =>{
//     return (
//         <Route
//         {...rest}
//         render = {()=>!auth? (
//             <Component auth={auth}/>
//         ):
//         (
//          <Redirect to="/Profile"/>
//         )
//     }
//         />
//     )
// } 

// const ProtectedRegister = ({auth,component:Component, ...rest}) =>{
//     return (
//         <Route
//         {...rest}
//         render = {()=>!auth? (
//             <Component auth={auth}/>
//         ):
//         (
//          <Redirect to="/Profile"/>
//         )
//     }
//         />
//     )
// } 



