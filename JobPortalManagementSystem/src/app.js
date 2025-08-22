import express from "express";
import cors from "cors";
import morgan from "morgan";

import jobRoutes from "./routers/job.routes.js";
import applicationRoutes from "./routers/application.routes.js";

const app = express();
app.use(cors());
app.use(express.json());
app.use(morgan("dev"));

// home paths
app.get("/", (req, res) => res.send({ ok: true, msg: "Job Portal API" }));

app.use("/jobs", jobRoutes);
app.use("/applications", applicationRoutes);

export default app;
