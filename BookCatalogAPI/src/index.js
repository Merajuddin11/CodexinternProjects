import app from "./app.js";
import connectDB from "./database/db.js";

import dotenv from "dotenv";
dotenv.config();

// DB connect
connectDB();

// it is initial listinig port number
app.listen(process.env.PORT, () =>
  console.log(`server is listening on ${process.env.PORT}`)
);
