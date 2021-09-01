
const axios = require("axios");
const dotenv = require('dotenv');

dotenv.config();

//get block by hash from C-chain
exports.getBlockByHash = async (req, res, next) => {
    await axios.post(process.env.C_CHAIN_BC_CLIENT_BLOCK_ENDPOINT, {
        jsonrpc: '2.0',
        id: 1,
        method: 'eth_getBlockByHash',
        params: [`${req.params.hash}`, true],
    }, {
        headers: {
          'Content-Type': 'application/json',
          'Access-Control-Allow-Origin': '*'
        },
    })
    .then((response) => {
        res.send(response.data);
    }, (error) => {
        console.log(error);
    }); 
};


//get block by number from C-chain
exports.getBlockByNumber = async (req, res, next) => {
    const number = "0x" + parseInt(req.params.blocknumber).toString(16);

    await axios.post(process.env.C_CHAIN_BC_CLIENT_BLOCK_ENDPOINT, {
        jsonrpc: '2.0',
        id: 1,
        method: 'eth_getBlockByNumber',
        params: [`${number}`, true],
    }, {
        headers: {
          'Content-Type': 'application/json',
          'Access-Control-Allow-Origin': '*'
        },
    })
    .then((response) => {
        res.send(response.data);
    }, (error) => {
        console.log(error);
    });
};


