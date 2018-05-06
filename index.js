const _ = require('lodash');

module.exports = ({
  variants = {},
  pin = {},
  flexGrow = {},
  flexShrink = {},
  order = {},
  aspectRatio = {},
} = {}) =>
  ({ e, addUtilities }) => {
    addUtilities(
      {
        ...Object.assign(
          {},
          ..._.map(pin, (value, name) => ({
            [`.pin-t-${e(name)}`]: { top: value },
            [`.pin-r-${e(name)}`]: { right: value },
            [`.pin-b-${e(name)}`]: { bottom: value },
            [`.pin-l-${e(name)}`]: { left: value },
          })),
          ..._.map(flexGrow, (value, name) => ({
            [`.flex-grow-${e(name)}`]: { flexGrow: value },
          })),
          ..._.map(flexShrink, (value, name) => ({
            [`.flex-shrink-${e(name)}`]: { flexShrink: value },
          })),
          ..._.map(order, (value, name) => ({
            [`.order-${e(name)}`]: { order: value },
          })),
          ..._.map(aspectRatio, (value, name) => ({
            [`.aspect-ratio-${e(name)}`]: {
              '&::before': {
                'content': '""',
                'display': 'block',
                'padding-bottom': `${(1 / value) * 100}%`,
              },
            },
          })),
        ),
      },
      variants,
    );
  };
