import User from "../models/User.js";
import Jwt from "jsonwebtoken";
import { hashPassword, comparePassword } from "../utils/utils.js";
export const regUser = async (req, res) => {
  try {
    const { name, dateOfBirth, email, password } = req.body;
    if (!name) {
      return res.send({ message: "Name is Required" });
    }
    if (!email) {
      return res.send({ message: "Email is Required" });
    }
    if (!password) {
      return res.send({ message: "Password is Required" });
    }

    const existingUser = await User.findOne({ email });

    if (existingUser) {
      return res.status(200).send({
        success: false,
        message: "This email is already in Use",
      });
    }

    const hashedPassword = await hashPassword(password);

    const user = await new User({
      name,
      dateOfBirth,
      email,
      password: hashedPassword,
    }).save();
    res.status(201).send({
      success: true,
      message: "user registerd Successfully",
      user,
    });
  } catch (error) {
    res.status(404).json({ message: error.message });
  }
};

export const loginUser = async (req, res) => {
  try {
    const { email, password } = req.body;
    if (!email || !password) {
      return res.status(404).send({
        success: false,
        message: "Invalid Credentials",
      });
    }
    const user = await User.findOne({ email });
    if (!user) {
      return res.status(404).send({
        success: false,
        message: "User Not Found",
      });
    }
    const match = await comparePassword(password, user.password);
    if (!match) {
      return res.status(200).send({
        success: false,
        message: "Invalid Credentials",
      });
    }

    const token = await Jwt.sign({_id: user.id}, process.env.JWT_SECRET, {
        expiresIn: "23h",
    });
    res.status(200).send({
        success: true,
        message: "Successfully LoggedIN",
        user:{
            name: user.name,
            dateOfBirth: user.dateOfBirth,
            email: user.email,
            password: user.password
        },
        token
    })
  } catch (error) {
    res.status(404).json({ message: error.message });
  }
};
