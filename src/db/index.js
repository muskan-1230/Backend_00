// import mongoose from "mongoose";
// import dotenv from 'dotenv';
// dotenv.config();
// import { DB_NAME } from "../constants.js";

// const MONGODB_URI=process.env.MONGODB_URI;
// console.log(MONGODB_URI);


// console.log("MongoDB URI:", process.env.MONGODB_URI); // Debugging line
// // console.log("DB_NAME:", process.env.DB_NAME); // Debugging line
// //  const DB_NAME="MUSKAN";
// //  const MONGODB_URI=`mongodb+srv://vikaspatel07071999:latghat1234@cluster0.rc0vet2.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0&readPreference=primary&appname=Cluster0&ssl=true`;
// // const MONGODB_URI="mongodb+srv://vikaspatel07071999:latghat1234@cluster0.rc0vet2.mongodb.net/mydatabase?retryWrites=true&w=majority";
// // console.log("MongoDB URI:", MONGODB_URI); // Debugging line
// // console.log("DB_NAME:", DB_NAME); // Debugging line

// const connectDB = async () => {
//   try {
//     const connectionInstance = await mongoose.connect(
//       `${process.env.MONGODB_URI}/${DB_NAME}`,
//     );
//     console.log(
//       `\nMongoDb connected !! DB HOST:${connectionInstance.connection.host}`,
//     );
//     // console.log(connectionInstance);
//   } catch (error) {
//     // console.log("MongoDB URI:", process.env.MONGODB_URI);

//     console.error("MOnGODB connection error faced ", error);
//     process.exit(1); // process is the reference to the current application
//   }
// };

// export default connectDB;



import mongoose from "mongoose";
import dotenv from 'dotenv';
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