const cChainMethods = require('../services/c-chain');

describe('C-chain', () => {
    it('test getblockbyhash without starting client', async () => {
        //const controller = new blocksController();
        //const response = await controller.getBlockByHash();
        const result = await cChainMethods.getBlockByHashFromCChain(0x112312312312);
        expect(result[0]).toBe(0);
    });
});