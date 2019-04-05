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
    order: { // defaults to these values
      'first': -99999,
      'last': 99999,
    },
    aspectRatio: { // defaults to {}
      '2/1': 2 / 1,
      '16/9': 16 / 9,
    },
  },
  variants: {
    order: ['responsive'], // defaults to ['responsive']
    aspectRatio: ['responsive'], // defaults to ['responsive']
  },
  plugins: [
    require('tailwindcss-layout')(),
  ],
}
```

This plugin generates the following utilities:

```css
/* configurable with the "order" theme key */
.order-first {
  order: -99999;
}
.order-last {
  order: 99999;
}

/* configurable with the "aspectRatio" theme key */
.aspect-ratio-2\/1 {
  padding-bottom: 50%;
}
.aspect-ratio-16\/9 {
  padding-bottom: 56.25%;
}
```
