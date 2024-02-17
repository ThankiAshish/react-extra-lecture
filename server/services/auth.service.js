const User = require("../models/user.model");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");

const register = async (email, password) => {
  const existingUser = await User.findOne({ email });

  if (existingUser) {
    return null;
  }

  const salt = bcrypt.genSaltSync(10);
  const hash = bcrypt.hashSync(password, salt);

  const user = await User.create({
    email,
    password: hash,
  });

  await user.save();

  return user;
};

const login = async (email, password) => {
  const user = await User.findOne({ email });

  if (!user) {
    return null;
  }

  const isMatch = await bcrypt.compare(password, user.password);
  if (!isMatch) {
    return null;
  }

  const payload = {
    user: {
      _id: user._id,
    },
  };

  const token = jwt.sign(payload, process.env.JWT_SECRET, {
    expiresIn: "1h",
  });

  user = {
    id: user._id,
    email: user.email,
    token: token,
  };

  return user;
};

module.exports = {
  register,
  login,
};
