const dotenv = require('dotenv');

const cChainMethods = require('../services/c-chain');

dotenv.config();

//get block by hash 
exports.getBlockByHash = async (req, res, next) => {
   
    const blockFromCChain = await cChainMethods.getBlockByHashFromCChain(req.params.hash);
       
    res.send(blockFromCChain);
};


//get block by number 
exports.getBlockByNumber = async (req, res, next) => {
    
    const cChainNumber = await cChainMethods.getBlockByNumberFromCChain(req.params.blocknumber);

    res.send(cChainNumber[0]);
};


//GET X blocks after N-th
exports.getXBlocksFromNthFromCChain = async (req, res, next) => {
    const cChainArray = [];
    let k = 0;

    const blockNumber = req.params.blocknumber;
    const count = req.params.count;

    for (let i = blockNumber; i > blockNumber - count; --i)
    {
        let hashValue = await cChainMethods.getBlockByNumberFromCChain(i);
        cChainArray[k] = hashValue[1];
        k++;
    }

    res.send(cChainArray);
};


