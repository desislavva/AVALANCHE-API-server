const express = require("express");

const AddressController = require("../controller/address");

const router = express.Router();

/**
 * @swagger
 * definitions:
 *  address: 
 *   type: array
 *   description: Balance and transaction count
 *   example: ["6921799.227440772181847", 720330]
 *  
 */

/**
 * @swagger
 * tags:
 *  - name: Addresses
 *    description: Address details
 *  - name: Blocks
 *    description: Block details
 *  - name: Network
 *    description: Network details
 *  - name: Transactions
 *    description: Transactions details
 */

/** 
 * @swagger
 * /address/hash/{hash}:
 *  get:
 *   summary: get block by number
 *   tags:
 *    - Addresses
 *   description: GET address info by hash
 *   parameters:
 *    - in: path
 *      name: hash
 *      schema:
 *       type: string
 *      required: true
 *      description: hash of address
 *      example: 'X-avax1l3gec03n5qrp6cwhnt4syx6wnn8pee6r87elu2'
 *   responses:
 *    200:
 *     description: Address details 
 *     responseBody:
 *      content:
 *       schema: 
 *        type: array
 *        description: Balance and transaction count
 *        example: ["6921799.227440772181847", 720330]
 *    500:
 *     description: failure fetching address details
 */

//GET address info by hash
router.get('/hash/:hash', AddressController.getAddressInfoByHash);

module.exports = router;