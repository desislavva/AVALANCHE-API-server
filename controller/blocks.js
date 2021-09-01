var request = require("request");

const axios = require("axios");

const headers = {
    "content-type": "text/plain"
};

// exports.getBlockByHash = (req, res, next) => {
//     var dataString = `{"jsonrpc":"2.0","method":"eth_getBlockByHash","params":["${req.params.hash}", true]}, "id":1`;
//     var options = {
//         url: "http://192.168.0.87:9650/ext/bc/C/rpc",
//         method: "POST",
//         headers: headers,
//         body: dataString
//     };

//     callback = (error, response, body) => {
//         console.log(JSON.parse(body));
//         if (!error && response.statusCode == 200) {
//           const data = JSON.parse(body);
//           console.log("data: ", data);
//           res.send(data);
//         }
//     };

//     request(options, callback);
// };

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
        // const data = JSON.parse(response);
        res.send(response.data);
    }, (error) => {
        console.log(error);
    });

    
};

