import { Router } from "express";
import {
  applyForJob,
  listApplications,
  deleteApplication,
} from "../controllers/application.controller.js";

const router = Router();

// Apply
router.post("/", applyForJob); // POST /applications

// List by email or jobId
router.get("/", listApplications); // GET /applications?email=a@b.com

// Delete previously applied application
router.delete("/:id", deleteApplication); // DELETE /applications/:id

export default router;
