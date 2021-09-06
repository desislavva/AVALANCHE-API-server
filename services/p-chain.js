const axios = require("axios");
const dotenv = require('dotenv');

dotenv.config();

//GET block by hash from P-chain


//GET block by number from P-chain


//GET X blocks after N-th from P-chain


//GET transaction by hash from P-chain - Ortelius API
exports.getTransactionByIdFromPChain = async (txId) => {
    let response;

    try {
        response = await axios.get(`${process.env.ORTELIUS_API_ENDPOINT + `transactions/${txId}`}`);
    } catch (error) {
        return 1;
    }
    
    return response.data;
};

//GET address balance by hash from P-chain
exports.getAddressInfoFromPChain = async (address) => {
    const response = await axios.post(process.env.P_CHAIN_BC_CLIENT_BLOCK_ENDPOINT, {
        jsonrpc: '2.0',
        id: 1,
        method: 'platform.getBalance',
        params: {
                address: `${address}`
        }
    }, {
        headers: {
          'Content-Type': 'application/json',
          'Access-Control-Allow-Origin': '*'
        },
    });

    if (response.data.error) {
        return response.data.error.message;
    }

    console.log(response.data);

    return response.data.result;
};

//GET X transactions from address after N-th transaction from P-chain
exports.getXTransactionsAfterNthFromAddressFromPChain = async (address, n, x) => {
    let response;

    try {
        response = await axios.get(`${process.env.ORTELIUS_API_ENDPOINT}` + `transactions?address=${address}`);
    } catch (error) {
        return 1;
    }

    return (response.data.transactions).slice(n - x, n);
};

//GET X unaccepted transactions after N-th transaction from P-chain