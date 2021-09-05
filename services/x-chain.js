const axios = require("axios");
const dotenv = require('dotenv');

dotenv.config();

//GET transaction info by hash/id - Ortelius API
// exports.getTransactionByIdFromXChain = async (txId) => {
//     const response = await axios.get(`${process.env.ORTELIUS_PUBLIC_API + `transactions/${txId}`}`);

//     console.log(response.data);
//     return response.data;
// };

//GET address info by hash
exports.getAddressInfoByHashFromXChain = async (address) => {

    const responseForBalance = await axios.post(process.env.X_CHAIN_BC_CLIENT_BLOCK_ENDPOINT, {
        jsonrpc: '2.0',
        id: 1,
        method: 'avm.getAllBalances',
        params: {
                address: `${address}`
        }
    }, {
        headers: {
          'Content-Type': 'application/json',
          'Access-Control-Allow-Origin': '*'
        },
    });

    if (responseForBalance.data.error) {
        return responseForBalance.data.error.message;
    }


    let responseForAssets;

    for(let i = 0; i < responseForBalance.data.result.balances.length; i++) {
        responseForAssets = await axios.post(process.env.X_CHAIN_BC_CLIENT_BLOCK_ENDPOINT, {
            jsonrpc: '2.0',
            id: 1,
            method: 'avm.getAssetDescription',
            params: {
                'assetID' :`${responseForBalance.data.result.balances[i].asset}`
            }
        }, {
            headers: {
              'Content-Type': 'application/json',
              'Access-Control-Allow-Origin': '*'
            },
        });
    }
    
    return [responseForBalance.data.result.balances, responseForAssets.data.result];
};

//GET X transaction from address after N-th transaction
exports.getXTransactionsAfterNthFromAddressFromXChain = async (address, n, x) => {

    const response = await axios.post(process.env.X_CHAIN_BC_CLIENT_BLOCK_ENDPOINT, {
        jsonrpc: '2.0',
        id: 1,
        method: 'avm.getAddressTxs',
        params: {
                address: `${address}`,
                assetID: 'AVAX'
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

    return (response.data.result.txIDs).slice(n - x, n);
}

//GET X unaccepted transaction after N-th transaction
