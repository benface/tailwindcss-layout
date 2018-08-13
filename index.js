const _ = require('lodash');

module.exports = ({
  variants = {},
  offset = {},
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
          ..._.map(offset, (value, name) => ({
            [`.t-${e(name)}`]: { top: value },
            [`.r-${e(name)}`]: { right: value },
            [`.b-${e(name)}`]: { bottom: value },
            [`.l-${e(name)}`]: { left: value },
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
            [`.aspect-ratio-${e(name)}`]: { paddingBottom: `${1 / value * 100}%` },
          })),
        ),
      },
      variants,
    );
  };
