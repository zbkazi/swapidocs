import app from "./app";
import db from "@/config/dbConnected";
import "dotenv/config";
import mongoose from "mongoose";
import swaggerDocs from "./swaggerDocs";
import '@/utils/Errors'
app;
db;

swaggerDocs;





// mongoose
//   .connect(process.env.mongodbURL_localhost as string)
//   .then(() => {
//     console.log("Connected to MongoDB success localhost");
//   })
//   .catch((err) => {
//     console.log(err);
//   });

