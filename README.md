# Layout Tailwind CSS Plugin

## Installation

```bash
npm install tailwindcss-layout
```

## Usage

```js
// In your Tailwind CSS config
{
  plugins: [
    require('tailwindcss-layout')({
      variants: ['responsive'],
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
        '1/2': 1/2,
        '16/9': 16/9,
      },
    }),
  ],
}
```

This plugin generates the following utilities:

```css
/* configurable with the "offset" option */
.t-[name] {
  top: [value];
}
.r-[name] {
  right: [value];
}
.b-[name] {
  bottom: [value];
}
.l-[name] {
  left: [value];
}

/* configurable with the "flexGrow" option */
.flex-grow-[name] {
  flex-grow: [value];
}

/* configurable with the "flexShrink" option */
.flex-shrink-[name] {
  flex-shrink: [value];
}

/* configurable with the "order" option */
.order-[name] {
  order: [value];
}

/* configurable with the "aspectRatio" option */
.aspect-ratio-16\/9 {
  padding-bottom: 56.25%;
}
```