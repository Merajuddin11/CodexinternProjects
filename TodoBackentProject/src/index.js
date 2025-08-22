import connectDb from "./database/db.connect.js";

import dotenv from "dotenv";
import app from "./app.js";

dotenv.config();

// DB connect
connectDb()
  .then(() => {
    console.log("We are good to go for the development...");

    // it is initial listinig port number
    app.listen(process.env.PORT, () => {
      console.log(`Server is listining on port :: ${process.env.PORT}`);
    });
  })
  .catch((error) => {
    console.log(error?.message);
  });
