const express = require("express");

const router = express.Router();


const BlockController = require("../controller/blocks");

//GET block by hash
router.get('/blocks/:hash', BlockController.getBlockByHash);

// GET
router.get("/test", (req, res) => res.json({ msg: "backend works" }));



module.exports = router;
