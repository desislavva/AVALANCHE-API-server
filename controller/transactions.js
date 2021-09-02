const dotenv = require('dotenv');

const cChainMethods = require('../services/c-chain');

dotenv.config();

exports.getTransactionByHash = async (req, res, next) => {

      
    const cChainTransaction = await cChainMethods.getTransactionByHashFromCChain(req.params.hash);

    res.send(cChainTransaction);
     
};
