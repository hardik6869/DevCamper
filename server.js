const express = require("express");
const dotenv = require("dotenv");

// Load ENV File
dotenv.config({ path: "./config/config.env" });

const app = express();
const PORT = process.env.PORT || 5000;

app.get("/api/v1/bootcamp", (req, res) => {
  res.status(200).json({ success: true, message: "Display Bootcamps" });
});

app.get("/api/v1/bootcamp/:id", (req, res) => {
  res.status(200).json({ success: true, message: `Display Bootcamp ${req.params.id}` });
}); 

app.post("/api/v1/bootcamp", (req, res) => {
  res.status(201).json({ success: true, message: "Create Bootcamp" });
});

app.put("/api/v1/bootcamp/:id", (req, res) => {
  res.status(200).json({ success: true, message: `Update Bootcamp ${req.params.id}` });
});

app.delete("/api/v1/bootcamp/:id", (req, res) => {
  res.status(200).json({ success: true, message: `Delete Bootcamp ${req.params.id}` });
});

app.listen(PORT, console.log(`Server running on ${PORT}`));
