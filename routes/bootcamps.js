const express = require("express");
const router = express.Router();

// @desc    Get all bootcamps
router.get("/", (req, res) => {
  res.status(200).json({ success: true, message: "Display Bootcamps" });
});

router.get("/:id", (req, res) => {
  res
    .status(200)
    .json({ success: true, message: `Display Bootcamp ${req.params.id}` });
});

router.post("/", (req, res) => {
  res.status(201).json({ success: true, message: "Create Bootcamp" });
});

router.put("/:id", (req, res) => {
  res
    .status(200)
    .json({ success: true, message: `Update Bootcamp ${req.params.id}` });
});

router.delete("/:id", (req, res) => {
  res
    .status(200)
    .json({ success: true, message: `Delete Bootcamp ${req.params.id}` });
});

module.exports = router;
