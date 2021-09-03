const dotenv = require('dotenv');


const cChainMethods = require('../services/c-chain');

dotenv.config();

//GET address info by hash
exports.getAddressInfoByHash = async (req, res, next) => {
   
    const addressInfoFromCChain = await cChainMethods.getAddressInfoFromCChain(req.params.hash);
       
    res.send(addressInfoFromCChain);
};