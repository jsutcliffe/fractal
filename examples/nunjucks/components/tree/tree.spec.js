const { tree } = require('@dryfeld/adapter-tests');

const fractal = require('../../fractal.config.js');

describe('tree', () => {
    beforeEach(async () => {
        await fractal.load();
    });

    tree(fractal);
});
