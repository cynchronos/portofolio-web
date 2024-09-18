import mongoose from "mongoose";
const mongodbURI:string = process.env.MONGODB_URI || "";

mongoose.connect(mongodbURI)

const db = mongoose.connection;

db.on("error", console.error.bind(console, "mongodb connection error:"));
db.once("open", () => {
  console.log("mongodb connected");
});

export default db;