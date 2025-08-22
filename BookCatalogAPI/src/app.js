import express from "express";
import cors from "cors";

const app = express();
app.use(cors());
app.use(express.json());

import bookRoutes from "./routers/book.routes.js";

// main path
app.use("/books", bookRoutes);

export default app;
