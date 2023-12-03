const chunkArray = require("./chunk");

test("chunkArray function exists", () => {
    expect(chunkArray).toBeDefined();
});

test("Chunk an array of ten values with a length of two",()=>{
    const array=[1,2,3,4,5,6,7,8,9,10];
    const length=2;
    const chunkedArr=chunkArray(array,length)
    expect(chunkedArr).toEqual([[1,2],[3,4],[5,6],[7,8],[9,10]]);
})