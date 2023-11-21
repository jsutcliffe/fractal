const { context } = require('@dryfeld/adapter-tests');

const fractal = require('../../fractal.config.js');

describe('context', () => {
    beforeEach(async () => {
        await fractal.load();
    });

    context(fractal);
});
