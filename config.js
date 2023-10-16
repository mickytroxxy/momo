const {transform} = require('@divriots/style-dictionary-to-figma');
const StyleDictionary = require('style-dictionary');

StyleDictionary.registerTransform({
  name: 'size/remove-px-unit',
  type: 'value',
  matcher: function (token) {
    return token.value.toString().includes('px');
  },
  transformer: function (token) {
    return token.value.replace('px', '');
  },
});

module.exports = (() => {
  return {
    source: ['./style-dictionary/**/*.json'],
    format: {
      figmaTokensPlugin: ({dictionary}) => {
        const transformedTokens = transform(dictionary.tokens);
        return JSON.stringify(transformedTokens, null, 2);
      },
    },
    platforms: {
      // 'react-native': {
      //   transformGroup: 'react-native',
      //   buildPath: './src/style-dictionary-dist/',
      //   files: [
      //     {
      //       destination: 'momoStyle.js',
      //       format: 'javascript/es6',
      //     },
      //   ],
      // },

      'react-native-js': {
        transforms: [
          'name/cti/camel',
          'size/object',
          'color/css',
          'size/remove-px-unit',
        ],
        buildPath: './src/style-dictionary-dist/',
        files: [
          {
            destination: 'tokens.js',
            format: 'javascript/es6',
          },
        ],
      },

      // 'react-nas': {
      //   transformGroup: 'react-native', // No change

      //   buildPath: './src/style-dictionary-dist/', // No change

      //   files: [
      //     {
      //       destination: 'momoStyles.js', // No change
      //       format: 'javascript/es6', // No change
      //     },
      //   ],

      //   transforms: [
      //     // Omit 'px' from values
      //     'attribute/cti',
      //     'name/cti',
      //     // Flatten nested objects
      //     'attribute/cti',
      //   ],
      // },
    },
    // transforms: {
    //   'attribute/cti': function (prop) {
    //     // Omit 'px' from values
    //     if (prop.value.endsWith('px')) {
    //       prop.value = parseFloat(prop.value); // Convert '10px' to 10
    //     }
    //     return prop;
    //   },
    //   'name/cti': function (name) {
    //     // Add your custom logic for naming here
    //     return name;
    //   },
    // },
  };
})();
