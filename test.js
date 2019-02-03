const asset = require('./asset.png')

test('stubs imports as string', () => {
  expect(typeof asset).toBe('string')
})
