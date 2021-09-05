const axios = require("axios");
const dotenv = require('dotenv');

dotenv.config();

//GET block by hash from P-chain


//GET block by number from P-chain


//GET X blocks after N-th from P-chain


//GET transaction by hash from P-chain


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

//GET X transaction from address after N-th transaction from P-chain


//GET X unaccepted transaction after N-th transaction from P-chain