const express = require("express");
require("dotenv").config();
const cors = require("cors");
const Connection = require("./config/db");
const userRouter = require("./routes/user.route");

const app = express();

// Middleware
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cors());

Connection();
app.use("/api/v1", userRouter);

app.get("/", (req, res) => {
  res.send("Server is Running! 🚀");
});

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});

module.exports = app;
