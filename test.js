const _ = require('lodash');
const cssMatcher = require('jest-matcher-css');
const postcss = require('postcss');
const tailwindcss = require('tailwindcss');
const defaultConfig = require('tailwindcss/defaultConfig');
const layoutPlugin = require('./index.js');

const generatePluginCss = (config) => {
  return postcss(
    tailwindcss(
      _.merge({
        theme: {
          screens: {
            'sm': '640px',
          },
        },
        corePlugins: (function() {
          let disabledCorePlugins = {};
          Object.keys(defaultConfig.variants).forEach(corePlugin => {
            disabledCorePlugins[corePlugin] = false;
          });
          return disabledCorePlugins;
        })(),
        plugins: [
          layoutPlugin(),
        ],
      }, config)
    )
  )
  .process('@tailwind utilities;', {
    from: undefined,
  })
  .then(result => {
    return result.css;
  });
};

expect.extend({
  toMatchCss: cssMatcher,
});

test('the plugin generates some responsive order utilities by default', () => {
  return generatePluginCss().then(css => {
    expect(css).toMatchCss(`
      .order-first {
        order: -99999;
      }
      .order-last {
        order: 99999;
      }
      @media (min-width: 640px) {
        .sm\\:order-first {
          order: -99999;
        }
        .sm\\:order-last {
          order: 99999;
        }
      }
    `);
  });
});

test('the plugin uses the order and aspectRatio theme keys in the tailwind config', () => {
  return generatePluginCss({
    theme: {
      order: {
        '1': 1,
      },
      aspectRatio: {
        '2/1': 2 / 1,
        '16/9': 16 / 9,
      },
    },
  }).then(css => {
    expect(css).toMatchCss(`
      .order-1 {
        order: 1;
      }
      .aspect-ratio-2\\/1 {
        padding-bottom: 50%;
      }
      .aspect-ratio-16\\/9 {
        padding-bottom: 56.25%;
      }
      @media (min-width: 640px) {
        .sm\\:order-1 {
          order: 1;
        }
      }
    `);
  });
});

test('the plugin uses the variants set in the tailwind config', () => {
  return generatePluginCss({
    theme: {
      order: {
        'first': -99999,
      },
      aspectRatio: {
        '2/1': 2 / 1,
      },
    },
    variants: {
      order: ['hover', 'active'],
      aspectRatio: ['hover'],
    },
  }).then(css => {
    expect(css).toMatchCss(`
      .order-first {
        order: -99999;
      }
      .hover\\:order-first:hover {
        order: -99999;
      }
      .active\\:order-first:active {
        order: -99999;
      }
      .aspect-ratio-2\\/1 {
        padding-bottom: 50%;
      }
      .hover\\:aspect-ratio-2\\/1:hover {
        padding-bottom: 50%;
      }
    `);
  });
});
