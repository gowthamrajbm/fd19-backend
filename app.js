const express = require("express");
const morgan = require("morgan");
const bodyParser = require("body-parser");
const mongoose = require("mongoose");

const employeeRoutes = require("./api/routes/employee.route");

const app = express();

mongoose.connect(
  "mongodb+srv://gowthamraj:support@123@cluster0-flcd7.mongodb.net/fd19?retryWrites=true",
  {
    useNewUrlParser: true
  }
);
mongoose.Promise = global.Promise;

app.use(morgan("dev"));

app.use((req, res, next) => {
  res.header("Access-Control-Allow-Origin", "*");
  res.header(
    "Access-Control-Allow-Headers",
    "Origin, X-Request-With, Content-Type, Accept, Authorization"
  );
  if (req.method === "OPTIONS") {
    res.header("Access-Control-Allow-Methods", "PUT, POST, PATCH, DELETE, GET");
    return res.status(200).json({});
  }
  next();
});

app.get("/", (req, res, next) => {
  res.send(
    "<h1>Something H1</h1><li><a href='/employee/login?a=10'>Employee</a><li><a href='/post/test'>Create Post</a><li><a href='/post/:id/test'>Update Post</a>"
  );
});
app.use("/employee", employeeRoutes);

app.use((req, res, next) => {
  const error = new Error("Not found");
  error.status = 404;
  next(error);
});

app.use((error, req, res, next) => {
  res.status(error.status || 500);
  res.json({
    success: false,
    response: error.message
  });
});

module.exports = app;
