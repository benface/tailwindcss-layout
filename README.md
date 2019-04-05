# Layout Plugin for Tailwind CSS

## Installation

```bash
npm install tailwindcss-layout
```

## Usage

```js
// In your Tailwind CSS config
{
  theme: {
    order: {
      'first': -99999,
      'last': 99999,
    },
    aspectRatio: {
      '2/1': 2 / 1,
      '16/9': 16 / 9,
    },
  },
  variants: {
    order: ['responsive'],
    aspectRatio: ['responsive'],
  },
  plugins: [
    require('tailwindcss-layout')(),
  ],
}
```

Note: When `order` is missing from `theme`, it defaults to the above values. Similarly, when `order` is missing from `variants`, it defaults to `['responsive']`. `aspectRatio`, however, has no theme or variants defaults.

This plugin generates the following utilities:

```css
/* configurable with the "order" option */
.order-first {
  order: -99999;
}
.order-last {
  order: 99999;
}

/* configurable with the "aspectRatio" option */
.aspect-ratio-2\/1 {
  padding-bottom: 50%;
}
.aspect-ratio-16\/9 {
  padding-bottom: 56.25%;
}
```
