import mongoose from "mongoose";

// application database schema
const applicationSchema = new mongoose.Schema(
  {
    job: { type: mongoose.Schema.Types.ObjectId, ref: "Job", required: true },
    name: { type: String, required: true, trim: true },
    email: { type: String, required: true, lowercase: true, trim: true },
    resumeUrl: { type: String, trim: true },
    coverLetter: { type: String, trim: true },
  },
  { timestamps: true }
);

export default mongoose.model("Application", applicationSchema);
