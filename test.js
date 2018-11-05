const _ = require('lodash');
const cssMatcher = require('jest-matcher-css');
const postcss = require('postcss');
const tailwindcss = require('tailwindcss');
const defaultConfig = require('tailwindcss/defaultConfig')();
const layoutPlugin = require('./index.js');

const disabledModules = {};
Object.keys(defaultConfig.modules).forEach(module => {
  disabledModules[module] = false;
});

const generatePluginCss = (options = {}) => {
  return postcss(tailwindcss({
    modules: disabledModules,
    plugins: [layoutPlugin(options)],
  })).process('@tailwind utilities;', {
    from: undefined,
  }).then(result => {
    return result.css;
  });
};

expect.extend({
  toMatchCss: cssMatcher,
});

test('options are not required', () => {
  return generatePluginCss().then(css => {
    expect(css).toMatchCss(``);
  });
});

test('all the options are working as they should', () => {
  return generatePluginCss({
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
  }).then(css => {
    expect(css).toMatchCss(`
      .t-full {
        top: 100%;
      }
      .r-full {
        right: 100%;
      }
      .b-full {
        bottom: 100%;
      }
      .l-full {
        left: 100%;
      }
      .flex-grow-2 {
        flex-grow: 2;
      }
      .flex-grow-3 {
        flex-grow: 3;
      }
      .flex-shrink-2 {
        flex-shrink: 2;
      }
      .flex-shrink-3 {
        flex-shrink: 3;
      }
      .order-1 {
        order: 1;
      }
      .aspect-ratio-1\\/2 {
        padding-bottom: 200%;
      }
      .aspect-ratio-16\\/9 {
        padding-bottom: 56.25%;
      }
    `);
  });
});

test('variants are supported', () => {
  return generatePluginCss({
    flexGrow: {
      '2': '2',
    },
    variants: ['hover', 'active'],
  }).then(css => {
    expect(css).toMatchCss(`
      .flex-grow-2 {
        flex-grow: 2;
      }
      .hover\\:flex-grow-2:hover {
        flex-grow: 2;
      }
      .active\\:flex-grow-2:active {
        flex-grow: 2;
      }
    `);
  });
});
