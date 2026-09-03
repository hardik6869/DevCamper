const express = require("express");

const {
  getBootcamps,
  getBootcamp,
  createBootcamp,
  updateBootcamp,
  deleteBootcamp,
  bootcampPhotoUpload,
} = require("../controllers/bootcamps");

const Bootcamp = require("../models/Bootcamp");
const advancedResult = require("../middleware/advancedResult");

const { protect } = require("../middleware/auth");

// Include otheer resource routers
const courseRouter = require("./courses");

const router = express.Router();

// re-route into other resource routers
router.use("/:bootcampId/courses", courseRouter);

router.route("/:id/photo").put(protect, bootcampPhotoUpload);

router
  .route("/")
  .get(advancedResult(Bootcamp, "courses"), getBootcamps)
  .post(protect, createBootcamp);
router
  .route("/:id")
  .get(getBootcamp)
  .put(protect, updateBootcamp)
  .delete(protect, deleteBootcamp);

module.exports = router;
