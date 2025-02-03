const multiply = require('./index')

//TEST SUITE

test ('2 and 5 multiply is equal to 10',  () => {
    expect (multiply(2,5)).toBe(10);
});