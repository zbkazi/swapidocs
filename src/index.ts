import app from "./app";
// import db from "./config/dbUrl";
import "dotenv/config";
import mongoose from "mongoose";
import swaggerDocs from "./swaggerDocs";
app;
// db;

swaggerDocs;

mongoose
  .connect("mongodb://localhost:27017/kazibyte_api")
  .then(() => {
    console.log("Connected to MongoDB success localhost");
  })
  .catch((err) => {
    console.log(err);
  });

// error handling middleware

// 404 not found middleware
app.use((_req, res, _next) => {
  return res.status(404).json({
    success: false,
    message: "Not found",
  });
});
// server error middleware
app.use((err, _req, res, _next) => {
  return res.status(500).json({
    success: false,
    message: err.message,
  });
});

// bad request middleware
app.use((err, _req, res, _next) => {
  return res.status(400).json({
    success: false,
    message: err.message,
  });
});
