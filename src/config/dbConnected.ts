import mongoose from "mongoose";
import "dotenv/config";

const mongoURI = process.env.mongoURL_online as string;
mongoose.set("strictQuery", true);

mongoose.connect(mongoURI)
  .then(() => {
    console.log("Connected to MongoDB successfully");
  })
  .catch((err) => {
    console.error("MongoDB connection error:", err);
  });

const db = mongoose.connection;

db.on("error", console.error.bind(console, "MongoDB connection error:"));
db.once("open", () => {
  console.log("MongoDB connection is open");
});

export default db;
