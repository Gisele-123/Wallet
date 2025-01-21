require("dotenv").config();
const mongoose = require("mongoose");

//CONNECT
const dbConnect = async () => {
  const MONGO_URL = process.env.MONGO_URL;
  try {
    const URL = `${MONGO_URL}`;
    await mongoose.connect(URL);
    console.log("DB Connected Successfully...");
  } catch (error) {
    console.log(error.message);
    //exit the server
    process.exit(1);
  }
};

dbConnect();
