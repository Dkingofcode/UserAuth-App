import React, { useState } from 'react';

const Signup = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  // Add more state variables for other signup information if needed

  const handleEmailChange = (e) => setEmail(e.target.value);
  const handlePasswordChange = (e) => setPassword(e.target.value);
  // Add more handle functions for other form fields if needed

  const handleSignup = (e) => {
    e.preventDefault();
    // Implement signup logic here (e.g., make an API call to the server to create a new user)
    // On successful signup, store the user information in local storage
    const newUser = {
      email,
      password,
      // Add other signup information to the newUser object if needed
    };
    localStorage.setItem('user', JSON.stringify(newUser));
    // Redirect the user to the login page (assuming you have set up routes properly)
    window.location.replace('/login');
  };

  return (
    <div>
      <h2>Signup</h2>
      <form onSubmit={handleSignup}>
        <div>
          <label>Email:</label>
          <input type="email" value={email} onChange={handleEmailChange} />
        </div>
        <div>
          <label>Password:</label>
          <input type="password" value={password} onChange={handlePasswordChange} />
        </div>
        {/* Add more input fields for other signup information if needed */}
        <button type="submit">Signup</button>
      </form>
    </div>
  );
};

export default Signup;
