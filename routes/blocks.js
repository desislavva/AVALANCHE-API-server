const express = require("express");

const BlockController = require("../controller/blocks");

const router = express.Router();


/** 
 * @swagger
 * /blocks/hash/{hash}:
 *  get:
 *   summary: get block by hash
 *   tags:
 *    - Blocks
 *   description: get single block providing hash
 *   parameters:
 *    - in: path
 *      name: hash
 *      schema:
 *       type: string
 *      required: true
 *      description: number of block
 *      example: '0x0bcd0c4e5635f21dd4352aa82692a5e29bcf2c5373da9427e5ab38bd4c7cfd33'
 *   responses:
 *    200:
 *     description: Block details
 *    500:
 *     description: failure fetching the block
 */

//GET block by hash
router.get('/hash/:hash', BlockController.getBlockByHash);

/** 
 * @swagger
 * /blocks/number/{blocknumber}:
 *  get:
 *   summary: get block by number
 *   tags:
 *    - Blocks
 *   description: get single block providing number
 *   parameters:
 *    - in: path
 *      name: blocknumber
 *      schema:
 *       type: integer
 *      required: true
 *      description: number of block
 *      example: 1940150
 *   responses:
 *    200:
 *     description: Block details
 *    500:
 *     description: failure fetching the block
 */

//GET block by number
router.get('/number/:blocknumber', BlockController.getBlockByNumber);

/** 
 * @swagger
 * /blocks/numbers/{blocknumber}/{count}:
 *  get:
 *   summary: get block by number
 *   tags:
 *    - Blocks
 *   description: get single block providing number
 *   parameters:
 *    - in: path
 *      name: blocknumber
 *      schema:
 *       type: integer
 *      required: true
 *      description: number of block
 *      example: 1940150
 *    - in: path
 *      name: count
 *      schema:
 *       type: integer
 *      required: true
 *      description: count of blocks
 *      example: 5
 *   responses:
 *    200:
 *     description: Blocks details
 *    500:
 *     description: failure fetching the blocks
 */

//GET X blocks after N-th
router.get('/numbers/:blocknumber/:count', BlockController.getXBlocksFromNthFromCChain);


module.exports = router;