import User from "../models/Users.models.js";
import bcryptjs from "bcryptjs";
import jwt from "jsonwebtoken";
export const createUser = async (req, res) => {
  const { firstname, lastname, email, username, password, isAdmin } = req.body;
  if (!firstname || !lastname || !email || !username || !password) {
    return res.status(400).json({ message: "All fields are required" });
  }
  try {
    const userExists = await User.findOne({ email });
    if (userExists) {
      return res.status(400).json({ message: "User already exists" });
    }
    const hashedPassword = bcryptjs.hashSync(password, 10);
    const user = await User.create({
      firstname,
      lastname,
      email,
      username,
      password: hashedPassword,
      isAdmin,
    });
    user.password = undefined;
    res.status(201).json({ user });
  } catch (error) {
    res.status(500).json({ message: error.message || "Something went wrong" });
  }
};

export const getUsers = async (req, res) => {
  try {
    const user = await User.find({}, { password: 0, __v: 0 });
    res.status(200).json({ user });
  } catch (error) {
    res.status(500).json({ message: error.message || "Something went wrong" });
  }
};

export const updateUser = async (req, res) => {
  const { userid } = req.user;
  const { firstname, lastname, email, username, password, isAdmin } = req.body;
  if (!firstname || !lastname || !email || !username || !password) {
    return res.status(400).json({ message: "All fields are required" });
  }
  try {
    const user = await User.findById(userid);
    if (!user) {
      return res.status(404).json({ message: "User not found" });
    }
    user.firstname = firstname;
    user.lastname = lastname;
    user.email = email;
    user.username = username;
    user.password = bcryptjs.hashSync(password, 10);
    user.isAdmin = isAdmin || false;
    await user.save();
    user.password = undefined;
    res.status(200).json({ user });
  } catch (error) {
    res.status(500).json({ message: error.message || "Something went wrong" });
  }
};

export const deleteUser = async (req, res) => {
  const { userid } = req.user;
  try {
    const user = await User.findByIdAndDelete(userid);
    res.status(200).json({ message: "User deleted successfully" });
  } catch (error) {
    res.status(500).json({ message: error.message || "Something went wrong" });
  }
};

export const login = async (req, res) => {
  const { email, password } = req.body;
  if (!email || !password) {
    return res.status(400).json({ message: "All fields are required" });
  }
  try {
    const user = await User.findOne({ email });
    if (!user) {
      return res.status(404).json({ message: "User not found" });
    }
    const validPassword = bcryptjs.compareSync(password, user.password);
    if (!validPassword) {
      return res.status(400).json({ message: "Invalid credentials" });
    }
    user.password = undefined;
    const token = jwt.sign(
      {
        userid: user._id,
        isAdmin: user.isAdmin,
        username: user.username,
      },
      process.env.JWT_SECRET,
      {
        expiresIn: "1d",
      }
    );
    res.status(200).json({ token });
  } catch (error) {
    res.status(500).json({ message: error.message || "Something went wrong" });
  }
};
