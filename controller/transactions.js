const dotenv = require('dotenv');

const cChainMethods = require('../services/c-chain');
const xChainMethods = require('../services/x-chain');
const pChainMethods = require('../services/p-chain');

dotenv.config();

exports.getTransactionByHash = async (req, res, next) => {
    let xChainTransaction;
    let cChainTransaction;
    let pChainTransaction;

    xChainTransaction = await xChainMethods.getTransactionByIdFromXChain(req.params.hash);
    cChainTransaction = await cChainMethods.getTransactionByHashFromCChain(req.params.hash);
    pChainTransaction = await pChainMethods.getTransactionByIdFromPChain(req.params.hash);

    if (xChainTransaction == 1 || cChainTransaction == 1 || pChainTransaction == 1) {
        res.send(JSON.parse('{"result": "wrong input"}'));
    } else if (xChainTransaction != 1) {
        res.send(xChainTransaction);
    } else if (cChainTransaction != 1) {
        res.send(cChainTransaction);
    } else if (pChainTransaction != 1) {
        res.send(pChainTransaction);
    }

};

exports.getXTransactionsAfterNthFromAddress = async (req, res, next) => {
    let xChainTransactions;

    xChainTransactions = await xChainMethods.getXTransactionsAfterNthFromAddressFromXChain(req.params.address, req.params.n, req.params.x);

    res.send(xChainTransactions);
};
