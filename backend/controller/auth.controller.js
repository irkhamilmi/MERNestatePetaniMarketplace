import User from "../models/user.model.js";
import bcryptjs from "bcryptjs";
import { errorHandler } from "../utils/error.js";
import jwt from "jsonwebtoken";

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

export const signin = async (req, res, next) => {
  const { email, password } = req.body;
  try {
    const vadlidUser = await User.findOne({ email });
    if (!vadlidUser) return next(errorHandler(404, "User not found"));
    const validPassword = bcryptjs.compareSync(password, vadlidUser.password);
    if (!validPassword) return next(errorHandler(401, "Passwd salh"));
    const token = jwt.sign({ id: vadlidUser._id }, process.env.JWT_SECRET);
    const { password: pass, ...rest } = vadlidUser._doc;
    res
      .cookie("access_token", token, { httpOnly: true })
      .status(200)
      .json(rest);
  } catch (error) {
    next(error);
  }
};
