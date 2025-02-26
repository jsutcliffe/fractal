'use strict';

/*
 * Require the path module
 */
const path = require('path');
const mandelbrot = require('@dryfeld/fractal-mandelbrot');

/*
 * Require the Fractal module
 */
const fractal = (module.exports = require('@dryfeld/fractal').create());

/*
 * Give your project a title.
 */
fractal.set('project.title', 'Fractal Nunjucks example');

/*
 * Tell Fractal where to look for components.
 */
fractal.components.set('path', path.join(__dirname, 'components'));
fractal.components.set('ext', '.njk');
fractal.components.engine(require('@dryfeld/fractal-nunjucks'));

/*
 * Tell Fractal where to look for documentation pages.
 */
fractal.docs.set('path', path.join(__dirname, 'docs'));
fractal.docs.engine(require('@dryfeld/fractal-nunjucks'));

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
