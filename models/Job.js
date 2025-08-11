// server/models/Job.js
import mongoose from 'mongoose';

const jobSchema = new mongoose.Schema({
  user: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User',
    required: true,
  },
  company: {
    type: String,
    required: true,
  },
  position: {
    type: String,
    required: true,
  },
  status: {
    type: String,
    enum: ['applied', 'interviewing', 'offer', 'rejected'],
    default: 'applied',
  },
}, { timestamps: true });

jobSchema.index({ user: 1, createdAt: -1 });

export default mongoose.model('Job', jobSchema);
