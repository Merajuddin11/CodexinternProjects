import mongoose from "mongoose";
import DBname from "../constant.js";

// for connect to database
const connectDb = async () => {
  try {
    const response = await mongoose.connect(
      `${process.env.MONGODB_URL}/${DBname}`
    );
    console.log(`DB Connected! :: ${response.connection.host}`);
  } catch (error) {
    console.log(`ERROR :: ${error?.message}`);
  }
};

export default connectDb;
