const ErrorResponse = require("../utils/errorresponse");
const asyncHandler = require("../middleware/async");
const User = require("../models/User");

// @desc   Register user
// @route  GET /api/v1/auth/register
// @access Public
exports.register = asyncHandler(async (req, res, next) => {
  const { name, email, password, role } = req.body;

  // Create Role
  const user = await User.create({
    name,
    email,
    password,
    role,
  });

  

  // Create Token
  const token = user.getSignedJwtToken();

  res.status(200).json({ success: true, token: token });
});
