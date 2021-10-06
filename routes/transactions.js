const express = require("express");

const TransactionController = require("../controller/transactions");

const router = express.Router();

/** 
 * @swagger
 * /transactions/hash/{hash}:
 *  get:
 *   summary: get transaction by hash
 *   tags:
 *    - Transactions
 *   description: get transaction providing hash
 *   parameters:
 *    - in: path
 *      name: hash
 *      schema:
 *       type: string
 *      required: true
 *      description: hash of transaction
 *      example: '0x118e1747566adeaab6afede9de76ebeb5b10bb56ec510a099fb5a82221e9d0e7'
 *   responses:
 *    200:
 *     description: Block with number
 *    500:
 *     description: failure fetching the block
 */

// GET transaction by hash 
router.get('/hash/:hash', TransactionController.getTransactionByHash);

/** 
 * @swagger
 * /transactions/{address}/{n}/{x}:
 *  get:
 *   summary: get transaction by hash
 *   tags:
 *    - Transactions
 *   description: get transactions of address
 *   parameters:
 *    - in: path
 *      name: address
 *      schema:
 *       type: string
 *      required: true
 *      description: hash of transaction
 *      example: 'X-avax1l3gec03n5qrp6cwhnt4syx6wnn8pee6r87elu2'
 *    - in: path
 *      name: n
 *      schema:
 *       type: integer
 *      required: true
 *      description: To provide a number first make sure that the address has transactions
 *      example: 5
 *    - in: path
 *      name: x
 *      schema:
 *       type: integer
 *      required: true
 *      description: X transactions after N-th
 *      example: 10
 *   responses:
 *    200:
 *     description: Transactions of address
 *    500:
 *     description: failure fetching transactions
 */

// GET transactions
router.get('/:address/:n/:x', TransactionController.getXTransactionsAfterNthFromAddress);

/** 
 * @swagger
 * /transactions/{n}/{x}:
 *  get:
 *   summary: get block by number
 *   tags:
 *    - Transactions
 *   description: get single block providing number
 *   parameters:
 *    - in: path
 *      name: n
 *      schema:
 *       type: integer
 *      required: true
 *      description: number of pending transactions
 *      example: 1
 *    - in: path
 *      name: x
 *      schema:
 *       type: integer
 *      required: true
 *      description: X pending transactions after N-th
 *      example: 2
 *   responses:
 *    200:
 *     description: Pending transactions
 *    500:
 *     description: failure fetching transactions
 */

// GET pending transactions
router.get('/:n/:x', TransactionController.getXPendingTransactionsAfterNth);

/** 
 * @swagger
 * /transactions/recentxchain:
 *  get:
 *   summary: get recent transactions from X-chain
 *   tags:
 *    - Transactions
 *   description: recent transactions from X-chain
 *   responses:
 *    200:
 *     description: Recent transactions
 *    500:
 *     description: failure fetching transactions
 */

//GET Recent transactions from X-chain
router.get('/recentxchain', TransactionController.getRecentTransactionsFromXChain);

/** 
 * @swagger
 * /transactions/recentpchain:
 *  get:
 *   summary: get recent transactions from P-chain
 *   tags:
 *    - Transactions
 *   description: recent transactions from P-chain
 *   responses:
 *    200:
 *     description: Recent transactions
 *    500:
 *     description: failure fetching transactions
 */

//GET Recent transactions from P-chain
router.get('/recentpchain', TransactionController.getRecentTransactionsFromPChain);

module.exports = router;