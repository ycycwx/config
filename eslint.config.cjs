const {flatConfigs} = require('./eslint');

/**
 * @type {import('typescript-eslint').ConfigArray}
 */
module.exports = flatConfigs.config('node');
