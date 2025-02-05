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
// test ("null value ", ()=>{
//     const value = null;
//     expect (value).toBeNull();
//     expect(value).toBeDefined();
//     expect(value).not.toBeUndefined();
//     expect(value).not.toBeTruthy();
// })

//Zero value testing 
// test ("Zero value ", ()=>{
//     const value = 0;
//     expect (value).not.toBeNull();
//     expect(value).toBeDefined();
//     expect(value).not.toBeUndefined();
//     expect(value).not.toBeTruthy();
// })


//number comparison testing 
// test("number comperasion testing ", ()=>{
//     const number = 3+3;
//     expect (number).toBeGreaterThan(5);
//     expect(number).toBeGreaterThanOrEqual(5);
//     expect(number).toBeLessThan(7);
//     expect(number).toBeLessThanOrEqual(7);
//     expect(number).toBe(6);
// })

//float value testing 
// test("float value test ", ()=>{
//     const value = 0.1+0.2;
//     expect(value).toBeCloseTo(0.3,5);
// })

//string comparison testing 
// test("string comperasion", ()=>{
//     const name = "Koushik";
//     expect(name).toMatch(/Ko/);
//     expect(name).not.toMatch(/A/)
// })


//Arrray testing 
// test("array testing ",()=>{
//     const array=["Koushik", "Rahul", "Suman", "Mohit", "Rohan"]
//     expect(array).toContain("Rahul")
// })

//exception matchers 
test("exception matches", ()=>{
    function openInvalidFiles(){
        throw new Error ("File not found");
    }

    expect(()=>openInvalidFiles()).toThrow();
    expect(()=>openInvalidFiles()).toThrow(Error);
    expect(()=>openInvalidFiles()).toThrow("File not found");
})