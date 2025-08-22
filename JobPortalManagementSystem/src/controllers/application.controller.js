import Application from "../models/application.model.js";
import Job from "../models/job.model.js";

// Apply for a job
export const applyForJob = async (req, res) => {
  try {
    const { jobId, name, email, resumeUrl, coverLetter } = req.body;

    const job = await Job.findById(jobId);
    if (!job || !job.isActive) {
      return res
        .status(404)
        .json({ success: false, message: "Job not found or inactive" });
    }

    const application = await Application.create({
      job: jobId,
      name,
      email,
      resumeUrl,
      coverLetter,
    });

    res.status(201).json({ success: true, data: application });
  } catch (err) {
    res.status(400).json({ success: false, message: err.message });
  }
};

// List applications for a user (by email) or for a job by query
export const listApplications = async (req, res) => {
  try {
    const { email, jobId } = req.query;
    const filter = {};
    if (email) filter.email = email.toLowerCase();
    if (jobId) filter.job = jobId;

    const apps = await Application.find(filter)
      .populate("job")
      .sort({ createdAt: -1 });
    res.json({ success: true, data: apps });
  } catch (err) {
    res.status(500).json({ success: false, message: err.message });
  }
};

// Delete an application (previously applied)
export const deleteApplication = async (req, res) => {
  try {
    const { id } = req.params;
    const deleted = await Application.findByIdAndDelete(id);
    if (!deleted)
      return res
        .status(404)
        .json({ success: false, message: "Application not found" });
    res.json({ success: true, message: "Application deleted" });
  } catch (err) {
    res.status(400).json({ success: false, message: err.message });
  }
};
