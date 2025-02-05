import { Schema, model } from "mongoose";

const projectSchema: Schema = new Schema({
  title: {
    type: String,
    required: true,
  },
  slug: {
    type: String,
    required: true,
    unique: true,
  },
  description: {
    type: String,
    required: true,
  },
  credits: {
    type: [{
      name: {
        type: String,
        required: true,
      },
      github: {
        type: String,
        required: true,
      },
    }],
    required: true,
  },
  url: {
    type: String,
    required: true,
  },
  status: {
    type: String,
    required: true,
  },
  assets: {
    type: [String],
    required: true,
  },
  createdAt: {
    type: Date,
    default: Date.now,
  },
  updatedAt: {
    type: Date,
    default: Date.now,
  },
});

const Project = model("Project", projectSchema);
export default Project;