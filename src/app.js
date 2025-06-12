import express from "express";
import cors from "cors";
import cookieParser from "cookie-parser";

const app = express();

app.use(
    cors({
        origin: process.env.CORS_ORIGIN,
        credentials: true,
    }),
);

app.use(express.json({ limit: "16kb" }));
app.use(express.urlencoded({ extended: true, limit: "16kb" }));
app.use(express.static("public"));
app.use(cookieParser());

// routes :
import userRouter from '. / routes / user.route.js ';

// routes declaration
app.use("/api/v1/users", userRouter);
// http://localhost:6000/api/v1/users/register

export { app };

/*
NOTES:
Two packages needed for app : 
1. cookie-parser 
2. cors  

MiddleWare:
>>  
*/