const _ = require('lodash');

module.exports = function() {
  return ({ config, e, addUtilities }) => {
    const defaultOrderTheme = {
      'first': -99999,
      'last': 99999,
    };
    const defaultOrderVariants = ['responsive'];
    const defaultAspectRatioTheme = {};
    const defaultAspectRatioVariants = ['responsive'];

    const orderUtilities = _.fromPairs(
      _.map(config('theme.order', defaultOrderTheme), (value, modifier) => {
        return [
          `.${e(`order-${modifier}`)}`,
          {
            order: value,
          },
        ];
      })
    );

    const aspectRatioUtilities = _.fromPairs(
      _.map(config('theme.aspectRatio', defaultAspectRatioTheme), (value, modifier) => {
        return [
          `.${e(`aspect-ratio-${modifier}`)}`,
          {
            paddingBottom: `${1 / value * 100}%`,
          },
        ];
      })
    );

    addUtilities(orderUtilities, config('variants.order', defaultOrderVariants));
    addUtilities(aspectRatioUtilities, config('variants.aspectRatio', defaultAspectRatioVariants));
  };
};
