const { render } = require('@dryfeld/adapter-tests');

const fractal = require('../../fractal.config.js');

describe('render', () => {
    beforeEach(async () => {
        await fractal.load();
    });

    render(fractal);
});
