const express = require("express");

const BlockController = require("../controller/blocks");

const router = express.Router();

//GET block by hash from C-chain
router.get('/blocks/hash/:hash', BlockController.getBlockByHash);

//GET block by number from C-chain
router.get('/blocks/number/:blocknumber', BlockController.getBlockByNumber);

// GET
router.get("/test", (req, res) => res.json({ msg: "backend works" }));

module.exports = router;