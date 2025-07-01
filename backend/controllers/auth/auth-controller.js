const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const User = require('../../models/User');
const { model } = require('mongoose');

const registerUser = async (req, res) => {
  const { username, password , email } = req.body;
    try {
     const hashedPassword = await bcrypt.hash(password, 10);
     const newUser = new User({
       userName: username,
       email: email,
       password: hashedPassword,
     });

    await newUser.save();
    res.status(201).json({ message: 'User registered successfully' });
  } catch (error) {
    res.status(500).json({ error: 'Registration failed' });
  }
}

const login = async (req, res) => {
  try {
    // Login logic here
    res.status(200).json({ message: 'User logged in successfully' });
  } catch (error) {
    res.status(500).json({ error: 'Login failed' });
  }
}
const logout = async (req, res) => {
  try {
    // Logout logic here
    res.status(200).json({ message: 'User logged out successfully' });
  } catch (error) {
    res.status(500).json({ error: 'Logout failed' });
  }
}


module.exports = {registerUser}