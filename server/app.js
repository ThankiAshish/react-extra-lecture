const express = require("express");
const dotenv = require("dotenv");
const cors = require("cors");
const routes = require("./routes");
require("./config/db.config");

dotenv.config();

const app = express();
const port = process.env.PORT || 3000;
const hostname = process.env.HOSTNAME || "localhost";

app.use(cors());
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.use("/api", routes);

app.get("/404", (req, res) => {
  res.status(404).json({
    message: "Resource not found",
    status: 404,
  });
});

app.use("*", (req, res) => {
  res.status(404).redirect("/404");
});

app.listen(port, hostname, () => {
  console.log(`Server is running on port ${port}`);
});
