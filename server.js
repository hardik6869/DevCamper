const express = require("express");
const dotenv = require("dotenv");

// Route Files
const bootcamps = require("./routes/bootcamps");

// Load ENV File
dotenv.config({ path: "./config/config.env" });

// Initialize Express
const app = express();

// Mount Routers
app.use('/api/v1/bootcamps', bootcamps);

const PORT = process.env.PORT || 5000;


app.listen(PORT, console.log(`Server running on ${PORT}`));
