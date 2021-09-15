const express = require("express");

const TransactionController = require("../controller/transactions");

const router = express.Router();

// GET transaction by hash 
router.get('/hash/:hash', TransactionController.getTransactionByHash);

// GET transactions
router.get('/:address/:n/:x', TransactionController.getXTransactionsAfterNthFromAddress);

// GET pending transactions
router.get('/:n/:x', TransactionController.getXPendingTransactionsAfterNth);

//GET Recent transactions from X-chain
router.get('/recentxchain', TransactionController.getRecentTransactionsFromXChain);

//GET Recent transactions from P-chain
router.get('/recentpchain', TransactionController.getRecentTransactionsFromPChain);

module.exports = router;