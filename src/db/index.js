// import mongoose from "mongoose";
import dotenv from './env';
dotenv.config();
import { DB_NAME } from "../constants.js";
// import dotenv from "dotenv";
// dotenv.config();

const connectDB = async () => {
  try {
    const connectionInstance = await mongoose.connect(
      `${process.env.MONGODB_URI}/${DB_NAME}`,
    );
    console.log(
      `\nMongoDb connected !! DB HOST:${connectionInstance.connection.host}`,
    );
    // console.log(connectionInstance);
  } catch (error) {
    console.log("MongoDB URI:", process.env.MONGODB_URI);

    console.error("MOnGODB connection error faced ", error);
    process.exit(1); // process is the reference to the current application
  }
};

export default connectDB;
