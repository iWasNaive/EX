const express = require("express");
const convertController = require("./../controllers/convert");

const apiLimiter = require("./../middlewares/apiLimiter");

const router = express.Router();

router.route("/").post(apiLimiter, convertController.convert);

module.exports = router;
