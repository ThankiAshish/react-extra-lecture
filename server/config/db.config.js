const mongoose = require("mongoose");
const uri = process.env.MONGODB_URL || "mongodb://localhost:27017/extra";

mongoose
  .connect(uri)
  .then(() => {
    console.log("Connected to the database");
  })
  .catch((error) => {
    console.log("Database connection failed");
    console.log(error);
  });
