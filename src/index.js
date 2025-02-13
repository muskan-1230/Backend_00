// require("dotenv").config({ path: "./env" });
// import dotenv from ".env";
// dotenv.config();

// import mongoose from "mongoose";
// import { DB_NAME } from "./constants";
import express from "express";
import connectDB from "./db/index.js";
// import connectDB from "./db.js";


const app = express();

const PORT = process.env.PORT || 3000;

connectDB();

app.listen(PORT, () => {
  console.log(`🚀 Server is running on port ${PORT}`);
});

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
