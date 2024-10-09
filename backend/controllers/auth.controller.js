import bcrypt from "bcryptjs";
import { genarateTokenAndSetCookie } from "../lib/utils/genarateToken.js";
import User from "../models/user.model.js";

export const signup = async (req, res) => {
  try {
    const { username, fullname, password, email } = req.body;

    if (!username || !fullname || !email || !password) {
      return res.status(401).json({ message: "All fields are required" });
    }

    if (password.length < 6) {
      return res
        .status(401)
        .json({ message: "Password must be at least 6 characters" });
    }

    //check email format
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (!emailRegex.test(email)) {
      return res.status(401).json({ message: "Invalid Email" });
    }

    //check user was existed
    const existedUser = await User.findOne({ username });
    if (existedUser) {
      return res.status(401).json({ message: "Username already taken" });
    }

    //check email was existed
    const existedEmail = await User.findOne({ email });
    if (existedEmail) {
      return res.status(401).json({ message: "email already taken" });
    }

    //password convert to hashed password
    const salt = await bcrypt.genSalt(10);
    const hashedPassword = await bcrypt.hash(password, salt);

    //create new User
    const newUser = new User({
      username: username,
      fullname: fullname,
      email: email,
      password: hashedPassword,
    });

    if (newUser) {
      // genarate tocken and cookies
      genarateTokenAndSetCookie(newUser._id, res);
      await newUser.save();

      res.status(201).json({
        _id: newUser._id,
        fullname: newUser.fullname,
        username: newUser.username,
        email: newUser.email,
        followers: newUser.followers,
        following: newUser.following,
        profileImg: newUser.profileImg,
        coverImg: newUser.coverImg,
      });
    } else {
      res.status(400).json({ error: "Invalid user data" });
    }
  } catch (err) {
    console.log(err);
    res.status(500).json({ error: "Server Error" });
  }
};

export const login = async (req, res) => {
  try {
    const { username, password } = req.body;

    if (!username || !password) {
      return res.status(401).json({ message: "All fields are required" });
    }

    const user = await User.findOne({ username });
    const isPasswordCorrect = await bcrypt.compare(
      password,
      user?.password || ""
    );

    if (!user || !isPasswordCorrect) {
      return res.status(401).json({ message: "Invalid user name or password" });
    }

    // genarate tocken and cookies
    genarateTokenAndSetCookie(user._id, res);

    res.status(200).json({
      _id: user._id,
      fullname: user.fullname,
      username: user.username,
      email: user.email,
      followers: user.followers,
      following: user.following,
      profileImg: user.profileImg,
      coverImg: user.coverImg,
    });
  } catch (error) {
    console.log(error);
    res.status(500).json({ error: "Server Error" });
  }
};

export const logout = async (req, res) => {
  try {
    res.cookie("jwt", "", { maxAge: 0 });
    res.status(200).json({ message: "Logout successfully!" });
  } catch (error) {
    console.log(error);
    res.status(500).json({ error: "Server Error" });
  }
};

export const getMe = async (req, res) => {
  try {
    const user = await User.findById(req.user._id).select("-password");
    res.status(200).json(user);
} catch (error) {
    console.log(error);
    res.status(500).json({ error: "Server Error" });
}
};
