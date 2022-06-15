import mongoose from 'mongoose';

const PostSchema = new mongoose.Schema({
  text: { type: String, required: true, maxlength: 256 },
  createdDate: { type: Date, required: true },
  createdBy: {
    type: mongoose.Schema.Types.ObjectId,
    required: true,
    ref: 'User',
  },
});

export default mongoose.models.Post ||
  mongoose.model('Post', PostSchema);
