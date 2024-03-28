import './App.css';
import React, { useEffect, useState } from 'react';
import {GoogleLogin,GoogleLogout} from "react-google-login";
import { jwtDecode, InvalidTokenError } from 'jwt-decode';
import { HashRouter as Router, Routes, Route } from 'react-router-dom';
import {gapi} from 'gapi-script'
import LoginForm from './LoginForm/LoginForm';
import AOS from 'aos';
import 'aos/dist/aos.css';
// import {gapi} from 'gapi-script'

import { Link, animateScroll as scroll } from "react-scroll";
let decide=0;

const clientId="895318556149-o3jop46ajn7u0655b3dt03rsjuam2284.apps.googleusercontent.com"

function App() {
  const onSuccess=(res)=>{
    console.log("Login Sucess ",res.profileObj);
  }
  const onFailure=(res)=>{
    console.log("Login Failed ,",res);
  }
  const Logoutsuccess=()=>{
    console.log("Logout is success")
  }
 useEffect(()=>{
  function start(){
    gapi.client.init({
      clientId:clientId,
      scope:""
    })
  };
  gapi.load('client:auth2',start);
 });

  return (
 
    <>
    <GoogleLogin
                   clientId={clientId}
                   buttonText="Login"
                   onSuccess={onSuccess}
                   onFailure={onFailure}
                   cookiePolicy={'single_host_origin'}
                   isSignedIn={true}
                   />

                   <GoogleLogout
                   clinetId={clientId}
                   buttonText="Logout"
                   onLogoutSuccess={Logoutsuccess}
             />    
             </>     
       
  );
}

export default App;