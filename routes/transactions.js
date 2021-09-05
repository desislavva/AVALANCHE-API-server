const express = require("express");

const TransactionController = require("../controller/transactions");

const router = express.Router();

// GET transaction by hash 
router.get('/hash/:hash', TransactionController.getTransactionByHash);
router.get('/:address/:n/:x', TransactionController.getXTransactionsAfterNthFromAddress);

module.exports = router;