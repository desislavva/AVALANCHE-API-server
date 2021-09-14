const express = require("express");

const NetworkController = require("../controller/network");

const router = express.Router();

//GET address info by hash
router.get('/network', NetworkController.getNetWorkActivity);

module.exports = router;