const dotenv = require('dotenv');

const cChainMethods = require('../services/c-chain');
const xChainMethods = require('../services/x-chain');

dotenv.config();

exports.getTransactionByHash = async (req, res, next) => {
    let xChainTransaction;
    let cChainTransaction;

    //xChainTransaction = await xChainMethods.getTransactionByIdFromXChain(req.params.hash);

    cChainTransaction = await cChainMethods.getTransactionByHashFromCChain(req.params.hash);

    if (cChainTransaction == 0) {
        res.send(JSON.parse('{"result": "wrong input"}'));
    } else {
        res.send(cChainTransaction);
    }
    //res.send(xChainTransaction);
};

exports.getXTransactionsAfterNthFromAddress = async (req, res, next) => {
    let xChainTransactions;

    xChainTransactions = await xChainMethods.getXTransactionsAfterNthFromAddressFromXChain(req.params.address, req.params.n, req.params.x);

    res.send(xChainTransactions);
};
