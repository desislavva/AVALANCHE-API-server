const express = require("express");

const BlockController = require("../controller/blocks");

const router = express.Router();

//GET block by hash
router.get('/hash/:hash', BlockController.getBlockByHash);

//GET block by number
router.get('/number/:blocknumber', BlockController.getBlockByNumber);


module.exports = router;