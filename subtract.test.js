const { test, expect } = require('@jest/globals')
const subtract = require('./subtract')

test('Properly subtracts the values', () => {
    expect(subtract(1,2)).toBe(-1)
})