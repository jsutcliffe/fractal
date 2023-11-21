'use strict';

const markdown = require('@dryfeld/fractal-core').markdown;

module.exports = function () {
    return {
        name: 'markdown',
        filter: (str) => markdown(str),
    };
};
