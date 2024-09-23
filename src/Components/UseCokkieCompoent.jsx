import { useState,useEffect } from "react";
import {useCookies} from "react-cookie";
export function CookieComponent(){
    //configure state for component
    const [userDetails,setUserDetails]=useState({userName:'',password:''});
    //create cookie for applications
    const[cookies,setCookie,removeCookie]= useCookies(['username']);
    //User-function
    function handleUser(e){
      setUserDetails({
        userName:e.target.value,
        password:userDetails.password
      })
    }
     //User-password-function
     function handlePassword(e){
        setUserDetails({
          userName:userDetails.userName,
          password:e.target.value
        })
      }
      //handle login-btn
      function handleLogin(){
        setCookie("username",userDetails.userName,{path:"/",expires: new Date("2024-05-04")});
        alert("Login successfully");
      }
      //handle sign-out
      function handleSignOut(){
        removeCookie("username");
        alert("signout successfully");
      }
    return(
        <div className="container-fluid">
            <dl>
                <dt>User Name</dt>
                <dd><input type="text" onChange={handleUser} /></dd>
                <dt>Password</dt>
                <dd><input type="password" onChange={handlePassword}/></dd>
            </dl>
            <button onClick={handleLogin}> Login</button>
            <hr></hr>
            <div>
                <h3>Home <button onClick={handleSignOut}>signOut</button></h3>
                Hello!{cookies.username}
            </div>
        </div>
    )
}

