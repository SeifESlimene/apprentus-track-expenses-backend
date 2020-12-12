// Import Our Libraries
const express = require("express");
const mongoose = require("mongoose");
// Initialize An Express Server
const app = express();
// Library To Use Env File
require("dotenv").config();
// Import Library To Use Cors
const cors = require("cors");
// Import Morgan Library
const morgan = require("morgan");
// Import Routes
const expenseRoute = require("./routes/expense.route.js");

// Using Built-in Json Middleware
app.use(express.json())

// Use Cors Middleware
app.use(cors());

// use Morgan
app.use(morgan("tiny"));

// Our Root Endpoint
app.get("/", (req, res) => {
  res.status(200).send({ msg: "Hello Server" });
});

// Our Root Expense Endpoint
app.get("/:expense", (req, res) => {
  res.send({ expense: req.params.expense });
});

// use our expense Router
app.use("/api/v1/", expenseRoute);

// Connecting to Our Database
const connection = mongoose.connect(process.env.MONGO_URI, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

if (connection) {
  console.log("Successfully Connected To Database");
} else {
  console.log("There Is An Error!");
}

// Our Port
const port = process.env.PORT || 5000;
// Server Listening
app.listen(port, () => {
  console.log(`Listening On http://localhost:${port}`);
});
