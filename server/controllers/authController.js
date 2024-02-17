const userService = require("../services/auth.service");

const authController = {
  register: async (req, res) => {
    const { email, password } = req.body;

    try {
      const user = await userService.register(email, password);

      if (!user) {
        return res.status(400).json({
          message: "User already exists",
        });
      }

      return res.status(201).json({
        message: "User created successfully",
        user,
      });
    } catch (error) {
      return res.status(500).json({
        message: error.message,
      });
    }
  },

  login: async (req, res) => {
    const { email, password } = req.body;

    try {
      const user = await userService.login(email, password);

      if (!user) {
        return res.status(400).json({
          message: "Invalid credentials",
        });
      }

      return res.status(200).json({
        message: "User logged in successfully",
        user,
      });
    } catch (error) {
      return res.status(500).json({
        message: error.message,
      });
    }
  },
};

module.exports = authController;
