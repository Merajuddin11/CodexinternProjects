import { Router } from "express";
import {
  createJob,
  listJobs,
  getJobById,
} from "../controllers/job.controller.js";

const router = Router();

// Admin/HR could create jobs
router.post("/", createJob);

// Public: search & list
router.get("/", listJobs); // GET /jobs?search=node

// Public: single job
router.get("/:id", getJobById);

export default router;
