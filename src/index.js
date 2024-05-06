// This is used mostly, but not consistent with our stle of code
// require('dotenv').config({path : './env'})
import dotenv from "dotenv";
import connectDB from "./db/index.js";

import { app } from "./app.js";
 
dotenv.config({
  path: "./env",
});

connectDB()
  .then(() => {
    app.on("error", (error) => {
      console.log("Our application is not able to talk to database", error);
      throw error;
    });
    app.listen(process.env.PORT || 5000, () => {
      console.log(`Server is running at port : ${process.env.PORT}`);
    });
  })
  .catch((error) => {
    console.log("MongoDB connection failed !!", error);
  });

/*
NOOB Method

(async () => {
  try {
    await mongoose.connect(`${process.env.DATABASE_URL}/${DB_name}`);
    app.on("error", (error) => {
      console.log("Our application is not able to talk to database", error);
      throw error;
    });
    app.listen(process.env.PORT, () => {
      console.log(`App is listening on port ${process.env.PORT}`);
    });
  } catch (error) {
    console.error("Error while connecting to Database", error);
    throw error;
  }
})();
*/
