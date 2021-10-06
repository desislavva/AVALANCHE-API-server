const express = require("express");

const NetworkController = require("../controller/network");

const router = express.Router();

/** 
 * @swagger
 * /network:
 *  get:
 *   summary: get network info
 *   tags:
 *    - Network
 *   description: Network
 *   responses:
 *    200:
 *     description: Network info
 *    500:
 *     description: failure fetching network
 */

//GET address info by hash
router.get('/network', NetworkController.getNetWorkActivity);

module.exports = router;