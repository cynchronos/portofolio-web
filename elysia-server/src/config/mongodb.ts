import mongoose from "mongoose";
const mongodbURI:string = process.env.MONGODB_URI || "";

// create retry connection if not connected with loop
const mongodbInit = () => {
  console.log("MongoDB connecting...")
  mongoose.connect(mongodbURI).then(() => {
    console.log("MongoDB is connected")
  }).catch((err) => {
    console.log("MongoDB connection unsuccessful, retry after 5 seconds. ", err)
    setTimeout(mongodbInit, 5000)
  })
}

mongodbInit();

export default mongodbInit;