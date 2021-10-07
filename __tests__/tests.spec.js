const cChainMethods = require('../services/c-chain');
const jestOpenAPI = require('jest-openapi').default;
const { default: axios } = require('axios');
const path = require('path')

jestOpenAPI(path.join(__dirname, '../openapi/openapi.yml'));

describe('GET /network', () => {
    it('should satisfy OpenAPI spec', async () => {
        const res = await axios.get('http://localhost:4444/network')

        expect(res.status).toEqual(200);
        expect(res).toSatisfyApiSpec();
       
    });
});

describe('GET /address/hash/{hash}', () => {
    it('should satisfy OpenAPI spec', async () => {
        const hash = 'X-fuji1xpmx0ljrpvqexrvrj26fnggvr0ax9wm32gaxmx'
        const res = await axios.get(`http://localhost:4444/address/hash/${hash}`)

        expect(res.status).toEqual(200);
        expect(res).toSatisfyApiSpec();
       
    });
});

describe('C-chain', () => {
    it('test getblockbyhash without starting client', async () => {
        //const controller = new blocksController();
        //const response = await controller.getBlockByHash();
        const result = await cChainMethods.getBlockByHashFromCChain(0x112312312312);
        expect(result[0]).toBe(0);
    });
});