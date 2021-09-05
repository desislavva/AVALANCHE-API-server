const dotenv = require('dotenv');

const cChainMethods = require('../services/c-chain');
const xChainMethods = require('../services/x-chain');

const X_CHAIN = 'X';
const P_CHAIN = 'P';
const C_CHAIN = '0x';

dotenv.config();

//GET address info by hash
exports.getAddressInfoByHash = async (req, res, next) => {
    let addressInfoFromXChain;
    let addressInfoFromCChain;

    if ((req.params.hash).charAt(0) == X_CHAIN) {
        addressInfoFromXChain = await xChainMethods.getAddressInfoByHashFromXChain(req.params.hash);
        res.send(addressInfoFromXChain);
    } else if ((req.params.hash).charAt(0) == P_CHAIN) {

    } else if ((req.params.hash).slice(0, 2) == C_CHAIN){
        addressInfoFromCChain = await cChainMethods.getAddressInfoFromCChain(req.params.hash);
        res.send(addressInfoFromCChain);
    }
};