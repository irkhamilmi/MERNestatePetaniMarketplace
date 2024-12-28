import mongoose, { mongo } from "mongoose";

const userSchema = new mongoose.Schema(
  {
    username: {
      type: String,
      required: true,
      unique: true,
    },
    email: {
      type: String,
      required: true,
      unique: true,
    },
    password: {
      type: String,
      required: true,
    },
    avatar: {
      type: String,
      default:
        "https://img.freepik.com/free-vector/mysterious-mafia-man-wearing-hat_52683-34829.jpg?t=st=1735306443~exp=1735310043~hmac=daec6a8491ce558b870fb5621f4128d14f785d49a6dde5d31fd64b6a019a291d&w=740",
    },
  },
  { timestamps: true }
);

const User = mongoose.model("User", userSchema);

export default User;
