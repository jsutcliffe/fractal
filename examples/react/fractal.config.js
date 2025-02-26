'use strict';

/*
 * Require the path module
 */
const path = require('path');

/*
 * Require the Fractal module
 */
const fractal = (module.exports = require('@dryfeld/fractal').create());
const mandelbrot = require('@dryfeld/fractal-mandelbrot');
const createReactAdapter = require('@dryfeld/fractal-react');
const reactAdapter = createReactAdapter({
    wrapperElements: [
        {
            component: '@wrapper-provider',
            props: {
                getValue: (value) => `wrapped ${value}`,
            },
        },
    ],
});

/*
 * Give your project a title.
 */
fractal.set('project.title', 'Fractal React example');

/*
 * Tell Fractal where to look for components.
 */
fractal.components.set('path', path.join(__dirname, 'components'));
fractal.components.set('ext', '.jsx');
fractal.components.engine(reactAdapter);
fractal.components.set('default.context.foo', 'bar');

/*
 * Tell the Fractal web preview plugin where to look for static assets.
 */
fractal.web.set('static.path', path.join(__dirname, 'public'));

/*
 * Tell the Fractal where to output the build files.
 */
fractal.web.set('builder.dest', path.join(__dirname, 'dist'));

/*
 * Customize Mandelbrot
 */
const customTheme = mandelbrot({
    // See https://fractal.build/guide/web/default-theme.html#configuration
});

fractal.web.theme(customTheme);
