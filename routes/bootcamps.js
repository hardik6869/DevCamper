const express = require("express");

const {
  getBootcamps,
  getBootcamp,
  createBootcamp,
  updateBootcamp,
  deleteBootcamp,
} = require("../controllers/bootcamps");

// Include otheer resource routers
const { getCourses } = require("../controllers/courses");

const router = express.Router();

// re-route into other resource routers
router.route("/:bootcampId/courses").get(getCourses);

router.route("/").get(getBootcamps).post(createBootcamp);
router
  .route("/:id")
  .get(getBootcamp)
  .put(updateBootcamp)
  .delete(deleteBootcamp);

module.exports = router;
