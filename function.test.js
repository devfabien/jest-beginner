const functions = require('./functions')

test("Adds 2 + 2 to equal 4",() => {
    expect(functions.add(2, 2)).toBe(4);
});

test("Adds 2 + 2 to equal not to be 5",() => {
    expect(functions.add(2, 2)).not.toBe(5);
});

test("Should be null",() => {
    expect(functions.isNull()).toBeNull();
});

test("Should be falsy",() => {
    expect(functions.checkValue(null)).toBeFalsy();
});

test("User should be fabien ishimwe object",() => {
    expect(functions.createUser()).toEqual({firstName: "fabien" , lastName:"Ishimwe"});
});

test("Regex = there is no I in team",()=>{
    expect("teaim").not.toMatch(/I/i);
})

test("Admin should be in userNames",() => {
    const userNames=["jack","faby","john","admin"];
    expect(userNames).toContain('admin');
});

// working with async data
test("Fetched user should be Leanne Graham",() => {
    expect.assertions(1);
    return functions.fetchUser()
    .then(data =>{
        expect(data.name).toEqual("Leanne Graham");
    })
});

// Async await
test("Async Fetched user should be Leanne Graham",async () => {
    expect.assertions(1);
    const data= await functions.fetchUser()
        expect(data.name).toEqual("Leanne Graham");
});