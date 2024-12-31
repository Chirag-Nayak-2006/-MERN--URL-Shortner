import express from "express";
import dotenv from "dotenv";
import cors from "cors";
import connectDb from "./config/dbConfig";
import shortUrl from "./routes/shortUrl";

/* the .env file contains all the sensitive data that shouldnt be commited to github, or shared to the user, 
it is usually stored securely on the hosting platform if it is a deployed app */

dotenv.config(); // saves all the key value pairs present in the .env file to the process.env variable

connectDb(); // connects to the database file

const backendPort = process.env.BACKEND_PORT; // saves value of BACKEND_PORT stored in .env file into backendPort variable
const frontendPort = process.env.FRONTEND_PORT; // --''--

const app = express(); // makes an express object called app

/* Middlewares are all functions that the request has to pass through before giving a response */

// uses "express.json()" middleware; it converts all the json files content sent during req to req.body
app.use(express.json());

// this middleware converts requests sent via html forms into req.body; the {extended: true} allows parsing of nested objects
app.use(express.urlencoded({ extended: true }));

// this middleware 'cors' (Cross origin resource sharing) is a securing feature that prevents different domains to make requests
// the below whitelists our frontend domain, {credentials : true} allows cookies and authentication
app.use(
  cors({
    origin: `http://localhost:${frontendPort}`,
    credentials: true,
  })
);

// this middleware routes any req starting with /api/ to shortUrl which is a router function
app.use("/api/", shortUrl);

// this basically starts the server, ie, starts listening to the backend port and once it does successfully connect
// it executes the function passed into it
app.listen(backendPort, () => {
  console.log(`Server started successfully on http://localhost:${backendPort}`);
});
