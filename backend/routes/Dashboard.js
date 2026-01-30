import express from "express";
import Dashboard from "../models/Dashboard.js";

const router = express.Router();

/* 
   GET dashboard layout
 */
router.get("/", async (req, res) => {
  try {
    const dashboard = await Dashboard.findOne();
    if (!dashboard) {
      return res.json({ widgets: [] });
    }
    res.json(dashboard);
  } catch (err) {
    res.status(500).json({ error: "Server error" });
  }
});

/* 
   SAVE dashboard layout
 */

router.post("/", async (req, res) => {
  try {
    const { widgets } = req.body;

    let dashboard = await Dashboard.findOne();

    if (!dashboard) {
      dashboard = new Dashboard({ widgets });
    } else {
      dashboard.widgets = widgets;
    }

    await dashboard.save();
    res.json({ success: true });
  } catch (err) {
    res.status(500).json({ error: "Server error" });
  }
});

export default router;
