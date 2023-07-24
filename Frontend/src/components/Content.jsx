import React from 'react';
import "./Login.css";



const Content = () => {
  const logout =() => {
   localStorage.removeItem('signup');
   window.location.reload();
  }
   
  const deleteAccount = () => {
    localStorage.clear();
    window.location.reload();
  }

  return (
    <div>
      <h1>Home page</h1>
      <h2>Welcome {localStorage.getItem("name")}</h2>
      <p>This is the home page for you to enjoy!</p>
      <button className='btn-submit' onClick={logout}>Logout</button>
      <button className='btn-submit' onClick={deleteAccount}>Delete Account</button>
    </div>
  )
}

export default Content;
