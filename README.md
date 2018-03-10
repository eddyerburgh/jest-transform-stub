# jest-transform-stub

Jest doesn't handle non JavsaScript assets by default.

You can use this module to avoid errors when importing non JavaScript assets.

## Usage

```shell
npm install --save-dev jest-transform-stub
```

In your Jest config, add 'jest-transform-stub' to handle any non JavaScript assets you want to stub:

```json
transform: {
  "^.+\\.js$": "babel-jest",
  ".+\\.(css|styl|less|sass|scss|png|jpg|ttf|woff|woff2)$": "jest-transform-stub"
},
```
