const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
require('dotenv').config();

const app = express();
const PORT = process.env.PORT;
const SECRET_KEY = process.env.SECRET_KEY;


//Middleware
app.use(cors());
app.use(bodyParser.json());


//Sample user data 
const users = [];


//User registration route
app.post('/api/signup', (req,res) => {
   const { email, password } = req.body;

   // Check if the user with the same email already exists
  if(users.some((user) => user.email === email )){
    return res.status(409).json({ error: 'Email already exists'});
  }   

  // Hash the password using bcrypt
  bcrypt.hash(password, 10, (err, hashedPassword) => {
    if(err){
        return res.status(500),json({ error: "Internal server error"})
    }


    // Create a new user Object
    const newUser = {
      id: users.length + 1,
      email,
      password: hashedPassword  
    };

     // Store the user object in the users array
     users.push(newUser);

     // Generate a JWT token for the user
     const token = jwt.sign({ id: newUser.id, SECRET_KEY})

     // Send the token as the response
     res.json({ token });

  });
});


  // User login route
  app.post('/api/login', (req, res) => {
    const { email, password } = req.body;

    // Find the user 
    const user = users.find((user) => user.email === email ) 
    
    // If the user doesn't exist or the password is incorrect 
    if (!user || !bcrypt.compareSync(password, user.password)){
       return res.status(401).json({ error: 'Invalid credentials'}) 
    }

    // Generate a JWT token for the user
    const token  = jwt.sign({ id: user.id}, SECRET_KEY)

    //Send the token as a response
    res.json({ token });
  });

  //Start the server
  app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`)
  })
