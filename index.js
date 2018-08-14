const _ = require('lodash');

module.exports = ({
  variants = {},
  offset = {},
  flexGrow = {},
  flexShrink = {},
  order = {},
  aspectRatio = {},
} = {}) => ({ e, addUtilities }) => {
  addUtilities(
    {
      ...Object.assign(
        {},
        ..._.map(offset, (value, name) => ({
          [`.${e(`t-${name}`)}`]: { top: value },
          [`.${e(`r-${name}`)}`]: { right: value },
          [`.${e(`b-${name}`)}`]: { bottom: value },
          [`.${e(`l-${name}`)}`]: { left: value },
        })),
        ..._.map(flexGrow, (value, name) => ({
          [`.${e(`flex-grow-${name}`)}`]: { flexGrow: value },
        })),
        ..._.map(flexShrink, (value, name) => ({
          [`.${e(`flex-shrink-${name}`)}`]: { flexShrink: value },
        })),
        ..._.map(order, (value, name) => ({
          [`.${e(`order-${name}`)}`]: { order: value },
        })),
        ..._.map(aspectRatio, (value, name) => ({
          [`.${e(`aspect-ratio-${name}`)}`]: { paddingBottom: `${1 / value * 100}%` },
        })),
      ),
    },
    variants,
  );
};
