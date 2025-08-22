import dotenv from "dotenv";
import { connectDB } from "./database/db.js";
import app from "./app.js";

dotenv.config();

const PORT = process.env.PORT || 4000;
const MONGODB_URI = process.env.MONGODB_URI;

if (!MONGODB_URI) {
  console.error("Missing MONGODB_URI in .env");
  process.exit(1);
}

// DB connect
await connectDB(MONGODB_URI);

// it is initial listinig port number
app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});
