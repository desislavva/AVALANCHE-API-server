
const axios = require("axios");

//get block by hash from C-chain
exports.getBlockByHash = async (req, res, next) => {
    await axios.post('http://192.168.0.87:9650/ext/bc/C/rpc', {
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
        console.log(response.data);
        res.send(response.data);
    }, (error) => {
        console.log(error);
    });

    
};

