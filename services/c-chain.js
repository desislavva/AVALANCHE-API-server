const axios = require("axios");

const dotenv = require('dotenv');

dotenv.config();

//GET block by hash from C-chain
exports.getBlockByHashFromCChain = async (hash) => {

    const response = await axios.post(process.env.C_CHAIN_BC_CLIENT_BLOCK_ENDPOINT, {
        jsonrpc: '2.0',
        id: 1,
        method: 'eth_getBlockByHash',
        params: [`${hash}`, true],
    }, {
        headers: {
          'Content-Type': 'application/json',
          'Access-Control-Allow-Origin': '*'
        },
    });
    
    return response.data;
};

//GET block by number from C-chain
exports.getBlockByNumberFromCChain = async (number) => {

    const hexNumber = "0x" + parseInt(number).toString(16);
    
    const response = await axios.post(process.env.C_CHAIN_BC_CLIENT_BLOCK_ENDPOINT, {
        jsonrpc: '2.0',
        id: 1,
        method: 'eth_getBlockByNumber',
        params: [`${hexNumber}`, true],
    }, {
        headers: {
          'Content-Type': 'application/json',
          'Access-Control-Allow-Origin': '*'
        },
    });
    
    return [response.data, response.data.result.hash];
};

//GET transaction by hash from C-chain
exports.getTransactionByHashFromCChain = async (hash) => {
    const response = await axios.post(process.env.C_CHAIN_BC_CLIENT_BLOCK_ENDPOINT, {
        jsonrpc: '2.0',
        id: 1,
        method: 'eth_getTransactionByHash',
        params: [`${hash}`],
    }, {
        headers: {
          'Content-Type': 'application/json',
          'Access-Control-Allow-Origin': '*'
        },
    });
    
    return response.data;
};


//GET address info by hash from C-chain



//GET X transaction from address after N-th transaction from C-chain


//GET X unaccepted transaction after N-th transaction from C-chain