import User from "../models/user.model.js";
import bcryptjs from "bcryptjs";
import { errorHandler } from "../utils/error.js";

export const signup = async (req, res, next) => {
  const { username, email, password } = req.body;
  const hasPasswd = bcryptjs.hashSync(password, 10);
  const newUser = new User({ username, email, password: hasPasswd });
  try {
    await newUser.save();
    res.status(201).json("json create succes");
  } catch (error) {
    next(errorHandler(550, "error from the function"));
  }
};
