const SVGSpritemapPlugin = require('../..');

module.exports = {
    plugins: [
        new SVGSpritemapPlugin('src/**/*.svg', {
            stylesheets: { filename: 'spritemap.css' },
            sprite: {
              prefix: ''
            }
        })
    ]
};
