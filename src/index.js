// require("dotenv").config({ path: "./env" });
import dotenv from "dotenv";
dotenv.config();
console.log("✅ MONGODB_URI:", process.env.MONGODB_URI);
import mongoose from "mongoose";
// import { DB_NAME } from "./constants";
import express from "express";
// import { app } from "./app.js";
import connectDB from "./db/index.js";

const app = express();

const PORT = process.env.PORT || 8000;

// console.log(process.env.MONGO_URI);  // you cant do this as port is in env file and you cannot directly console the variables stored in env file 

connectDB()
    .then(() => {

        app.on("error", (error) => {
            console.log("ERRORRRR", error);
            throw error;
        });

        app.listen(PORT, () => {
            console.log(`Server is running at port : ${PORT}`);
        })

    })
    .catch((err) => {
        console.log("MONGO db connection failed!!!!!", err)
    })
















/*

import express from "express";
const app = express()(
 
  // always try catch me wrap kro ya promises use kro
  // database is always in another continent , so use async await

  // ;( async () =>{})()
    async () => {
      try {
          await mongoose.connect(`${process.env.MONGODB_URI}/${DB_NAME}`);
          
          app.on("error", (error) => {
              console.log("ERRORRRR", error);
              throw error;
          });
  
          app.listen(process.env.PORT, () => {
              console.log(`App is listening on port ${process.env.PORT}`);
          });
      } catch (error) {
          console.error("ERROR: ", error);
          throw error;  
      }
  },
)();
  
*/