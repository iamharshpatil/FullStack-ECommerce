const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const User = require("../../models/User");
const { model } = require("mongoose");

const registerUser = async (req, res) => {
  const { username, password, email } = req.body;

  try {
    const checkUser = await User.findOne({ email });
    if (checkUser)
      return res.json({
        success: false,
        message: "User Already exists with the same email! Please try again",
      });
    const hashedPassword = await bcrypt.hash(password, 10);
    const newUser = new User({
      userName: username,
      email: email,
      password: hashedPassword,
    });

    await newUser.save();
    res.status(201).json({ message: "User registered successfully" });
  } catch (error) {
    res.status(500).json({ error: "Registration failed" });
  }
};

const loginUser = async (req, res) => {
  const { email, password } = req.body;
  try {
    const checkUser = await User.findOne({ email });
    if (!checkUser)
      return res.json({
        success: false,
        message: "User does not exists! Please register first",
      });

    const isPasswordValid = await bcrypt.compare(password, checkUser.password);
    if (!isPasswordValid) {
      return res
        .status(401)
        .json({ success: false, message: "Invalid credentials" });
    }

    const token = jwt.sign(
      { userId: checkUser._id, role: checkUser.role, email: checkUser.email },
      process.env.JWT_SECRET,
      {
        expiresIn: "1h",
      }
    );

    return res.cookie("token", token, {
      httpOnly: true,
      secure: false,
    }).json({
      success: true,
      message: "User logged in successfully",
      user: {
        email: checkUser.email,
        role: checkUser.role,
        id: checkUser._id
      }
    });
  } catch (error) {
    res.status(500).json({ error: "Login failed" });
  }
};
const logout = async (req, res) => {
  try {
    // Logout logic here
    res.status(200).json({ message: "User logged out successfully" });
  } catch (error) {
    res.status(500).json({ error: "Logout failed" });
  }
};

module.exports = { registerUser ,loginUser };
