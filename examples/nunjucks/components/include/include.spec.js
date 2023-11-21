const { include } = require('@dryfeld/adapter-tests');

const fractal = require('../../fractal.config.js');

describe('include', () => {
    beforeEach(async () => {
        await fractal.load();
    });

    include(fractal);
});
