const express = require("express");

const AddressController = require("../controller/address");

const router = express.Router();

//GET address info by hash
router.get('/hash/:hash', AddressController.getAddressInfoByHash);

module.exports = router;