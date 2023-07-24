  import React, { useState } from 'react';

  const Login = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
  
    const handleEmailChange = (e) => setEmail(e.target.value);
    const handlePasswordChange = (e) => setPassword(e.target.value);
  
    const handleSubmit = (e) => {
      e.preventDefault();
      // Implement authentication logic here (e.g., make an API call to the server)
      // On successful authentication, store the token or user information in local storage
      const authToken = 'your_auth_token'; // Replace with the actual token received from the server
      localStorage.setItem('authToken', authToken);
      // Redirect the user to the content page (assuming you have set up routes properly)
      window.location.replace('/content');
    };
  
    return (
      <div>
        <h2>Login</h2>
        <form onSubmit={handleSubmit}>
          <div>
            <label>Email:</label>
            <input type="email" value={email} onChange={handleEmailChange} />
          </div>
          <div>
            <label>Password:</label>
            <input type="password" value={password} onChange={handlePasswordChange} />
          </div>
          <button type="submit">Login</button>
        </form>
      </div>
    );
  };
  
  export default Login;
  


