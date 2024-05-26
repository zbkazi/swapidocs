import app from "./app";
// import db from "./config/dbUrl";
import "dotenv/config";
import mongoose from "mongoose";
import swaggerDocs from "./swaggerDocs";
import '@/utils/Errors'
app;
// db;

swaggerDocs;

mongoose
  .connect("mongodb://localhost:27017/swaggerAPI_Docs")
  .then(() => {
    console.log("Connected to MongoDB success localhost");
  })
  .catch((err) => {
    console.log(err);
  });

