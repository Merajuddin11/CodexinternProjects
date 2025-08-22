import express from "express";

const app = express();

app.use(express.json({ limit: "200kb" }));
app.use(express.urlencoded({ extended: true, limit: "200kb" }));

import todoRoute from "./routes/todo.route.js";

// it is our main or initial path
app.use("/api/v1/todo", todoRoute);

export default app;
