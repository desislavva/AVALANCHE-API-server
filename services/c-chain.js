const axios = require("axios");
const dotenv = require('dotenv');
const web3 = require('web3-utils');

dotenv.config();

//GET block info by hash from C-chain
exports.getBlockByHashFromCChain = async (hash) => {

    const response = await axios.post(process.env.C_CHAIN_BC_CLIENT_BLOCK_ENDPOINT, {
        jsonrpc: '2.0',
        id: 1,
        method: 'eth_getBlockByHash',
        params: [`${hash}`, true]
    }, {
        headers: {
          'Content-Type': 'application/json',
          'Access-Control-Allow-Origin': '*'
        },
    });
    
    return response.data;
};

//GET block info by number from C-chain
exports.getBlockByNumberFromCChain = async (number) => {

    const hexNumber = "0x" + parseInt(number).toString(16);
    
    const response = await axios.post(process.env.C_CHAIN_BC_CLIENT_BLOCK_ENDPOINT, {
        jsonrpc: '2.0',
        id: 1,
        method: 'eth_getBlockByNumber',
        params: [`${hexNumber}`, true]
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
        params: [`${hash}`]
    }, {
        headers: {
          'Content-Type': 'application/json',
          'Access-Control-Allow-Origin': '*'
        },
    })
    
    if (response.data.result == null || response.data.error) {
        return 1;
    }

    return response.data;
};


//GET address info by hash from C-chain
exports.getAddressInfoFromCChain = async (cChainAddress) => {
    const responseForBalance = await axios.post(process.env.C_CHAIN_BC_CLIENT_BLOCK_ENDPOINT, {
        jsonrpc: '2.0',
        id: 1,
        method: 'eth_getBalance',
        params: [`${cChainAddress}`, 'latest']
    }, {
        headers: {
          'Content-Type': 'application/json',
          'Access-Control-Allow-Origin': '*'
        },
    });
    
    if (responseForBalance.data.error) {
        return responseForBalance.data.error.message;
    }

    const responseForTransactionCount = await axios.post(process.env.C_CHAIN_BC_CLIENT_BLOCK_ENDPOINT, {
        jsonrpc: '2.0',
        id: 1,
        method: 'eth_getTransactionCount',
        params: [`${cChainAddress}`, 'latest']
    }, {
        headers: {
          'Content-Type': 'application/json',
          'Access-Control-Allow-Origin': '*'
        },
    });

    return [web3.fromWei(`${responseForBalance.data.result}`, 'ether'), parseInt(responseForTransactionCount.data.result)];
};


//GET X transactions from address after N-th transaction from C-chain - Ortelius API


//GET X unaccepted transactions after N-th transaction from C-chain
exports.getXPendingTransactionsAfterNthFromCChain = async (n, x) => {
    const response = await axios.post(process.env.C_CHAIN_BC_CLIENT_BLOCK_ENDPOINT, {
        jsonrpc: '2.0',
        id: 1,
        method: 'eth_getBlockByNumber',
        params: ["pending", true]
    }, {
        headers: {
          'Content-Type': 'application/json',
          'Access-Control-Allow-Origin': '*'
        },
    });
    
    if ((response.data.result.transactions).slice(n - x, n).length === 0) {
        return JSON.parse('{"result": "not enough transactions"}')
    }
    
    return (response.data.result.transactions).slice(n - x, n);
}