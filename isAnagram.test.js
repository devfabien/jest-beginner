const isAnagram =require("./isAnagram")

test("isAnagram function exists",()=>{
    expect(typeof isAnagram).toEqual("function");
})

test("Cinema is an anagram of iceman",()=>{
    expect(isAnagram("Cinema","ice Man")).toBeTruthy();
})