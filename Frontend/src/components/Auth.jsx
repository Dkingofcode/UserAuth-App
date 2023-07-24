import React, { useEffect, useRef, useState } from 'react';
import Content from './Content';
import './Login.css';


function Auth() {
  const name=useRef();
  const email=useRef();
  const password=useRef();
  const [showhome, setShowHome] = useState(false);
  const localSignup = localStorage.getItem("signup");
  const [show, setShow] = useState(false);
  const [showPage, setShowPage] = useState('');
  const localName = localStorage.getItem("name");
  const localEmail = localStorage.getItem("email");
  const localPassword = localStorage.getItem('password');
  

  useEffect(() => { 
    if(localSignup){
        setShowHome(true);
    }
    if(localEmail){
       setShow(true); 
    }
  })

  const Switchpage = () => {
    setShowPage('signup');
  }



  const handleCLick = () => {
    //console.log(name.current.value, email.current.value, password.current.value);

    if(name.current.value && email.current.value && password.current.value){
        localStorage.setItem("name", name.current.value)
        localStorage.setItem("email", email.current.value)
        localStorage.setItem("password", password.current.value)
        localStorage.setItem("signup", email.current.value)
        alert("Account created successfully!")
        window.location.reload();
    }
  }

  const handleLogin = () => {
    if(email.current.value === localEmail && password.current.value === localPassword){
      localStorage.setItem("signup", email.current.value)
        window.location.reload(); 
        console.log('login');
    }else{
        alert("please enter valid credentials");
         console.log('login');
    }
        
  }
  
  return(
      <div>
       {showhome ? (
       <Content />
       )  : (showPage === 'login' ?   
            <div className="container">
               <h1>Hello {localStorage.getItem("name")}</h1>
              <div className='form-group'>  
                <input placeholder='Email' type='text' ref={email}  />
              </div>
              <div>
                <input placeholder='Password' type='password' ref={password} />
              </div>
              <button onClick={() => handleLogin()}>Login</button>
              <a href='#' onClick={() => setShowPage('signup')}>Go to signup</a>
           </div>
              : 
           <div className='container'>
           <div className='form-group'>
            <input placeholder='Name' type='text' ref={name} />
           </div>
           <div className='form-group'>
              <input placeholder='Email' type='text' ref={email} />
           </div>
            <div className='form-group'>
               <input placeholder='Password' type='text' ref={password} /> 
            </div>
            <button className='btn-submit' onClick={() => handleCLick()}>Sign up</button>
            <a href='#' onClick={() => setShowPage('login')}>Go to Login</a>
         </div>
            )}
      </div>
   );
}; 

export default Auth;
