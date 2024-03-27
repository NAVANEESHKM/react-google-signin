import './App.css';
import React, { useEffect, useState } from 'react';

import { jwtDecode, InvalidTokenError } from 'jwt-decode';
import { HashRouter as Router, Routes, Route } from 'react-router-dom';

import LoginForm from './LoginForm/LoginForm';
import AOS from 'aos';
import 'aos/dist/aos.css';

import { Link, animateScroll as scroll } from "react-scroll";
let decide=0;


function App() {

 

  return (
 
    
    <Router>
      
      <Routes>
         <Route path="/" element={<LoginForm/>}/>
         
      </Routes>
    </Router>
    
       
  );
}

export default App;