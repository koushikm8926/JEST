const multiply = require('./index')

//TEST SUITE

//methode 1 
// test ('2 and 5 multiply is equal to 10',  () => {
//     expect (multiply(2,5)).toBe(10);
// });

//methode 2
// describe ("Multiply test", ()=>{
//     it ("2 and 5 multiply would be 10", ()=>{
//         expect(multiply(2,5)).toBe(10);
//     });

//     it("2 and 5 multiply is not equal to 5", ()=>{
//         expect(multiply(2,5)).not.toBe(5);
//     })
// })


// test ('object equality',()=>{
//     const data = {alpha :"koushik"};
//     data["beta"]="mondal";
//     expect (data).toEqual({alpha:"koushik", beta:"mondal"});
// })

//null value testing 
test ("null value ", ()=>{
    const value = null;
    expect (value).toBeNull();
    expect(value).toBeDefined();
    expect(value).not.toBeUndefined();
    expect(value).not.toBeTruthy();
})
