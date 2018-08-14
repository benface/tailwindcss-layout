const plugin = require('./index.js');

let generatedUtilities = {};

plugin({
  offset: {
    'full': '100%',
  },
  flexGrow: {
    '2': '2',
    '3': '3',
  },
  flexShrink: {
    '2': '2',
    '3': '3',
  },
  order: {
    '1': '1',
  },
  aspectRatio: {
    '1/2': 1 / 2,
    '16/9': 16 / 9,
  },
})({
  e: value => value,
  addUtilities: (utilities) => {
    generatedUtilities = utilities;
  },
});

console.log('generatedUtilities', generatedUtilities);
