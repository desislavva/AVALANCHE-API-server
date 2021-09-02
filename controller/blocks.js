const dotenv = require('dotenv');

const cChainMethods = require('../services/c-chain');

dotenv.config();

//get block by hash
exports.getBlockByHash = async (req, res, next) => {
   
    const blockFromCChain = await cChainMethods.getBlockByHashFromCChain(req.params.hash);
       
    res.send(blockFromCChain);
};


//get block by number from C-chain
exports.getBlockByNumber = async (req, res, next) => {
    
    const cChainNumber = await cChainMethods.getBlockByNumberFromCChain(req.params.blocknumber);

    res.send(cChainNumber);
     
};


