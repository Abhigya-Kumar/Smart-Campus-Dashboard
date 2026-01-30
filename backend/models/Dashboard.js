import mongoose from "mongoose";

const dashboardSchema = new mongoose.Schema(
  {
    widgets: {
      type: Array,
      required: true,
    },
  },
  { timestamps: true }
);

export default mongoose.model("Dashboard", dashboardSchema);
