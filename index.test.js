const multiply = require('./index')

//TEST SUITE


//methode 1 
// test ('2 and 5 multiply is equal to 10',  () => {
//     expect (multiply(2,5)).toBe(10);
// });

//methode 2
describe ("Multiply test", ()=>{
    it ("2 and 5 multiply would be 10", ()=>{
        expect(multiply(2,5)).toBe(10);
    });

    it("2 and 5 multiply is not equal to 5", ()=>{
        expect(multiply(2,5)).not.toBe(5);
    })
})