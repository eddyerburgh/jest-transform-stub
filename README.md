# jest-transform-stub

Jest doesn't handle non JavaScript assets by default.

You can use this module to avoid errors when importing non JavaScript assets.

## Usage

```shell
npm install --save-dev jest-transform-stub
```

In your Jest config, map non JavaScript assets to jest-transform-stub:

```js
{
  "moduleNameMapper": {
    ".+\\.(css|styl|less|sass|scss|png|jpg|ttf|woff|woff2)$": "jest-transform-stub"
  }
}
```
