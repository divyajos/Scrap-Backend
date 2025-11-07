import mongoose from "mongoose";

const url = "mongodb://localhost:27017/divujoshi230pm12july";

mongoose.connect(url);

console.log("database connected succsefully");