const express = require("express");
const router = express.Router();
const protect = require("../middleware/auth");
const { searchUsers, getUser, updateUser, userStat } = require("../controllers/user");

router.route("/").get(protect, searchUsers);

router.route("/users/:username").get(getUser);

router.route("/users/:id").patch(updateUser);

router.route("/stat").get(userStat);

module.exports = router;
