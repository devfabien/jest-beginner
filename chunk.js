const chunkArray= (arr,len)=>{
    const chunkedArr=[];
    arr.forEach(value => {
        const last=chunkedArr[chunkedArr.length-1];
        if(!last || last.length === len){
            chunkedArr.push([value])
        }else{
            last.push(value)
        }
    });
    return chunkedArr;
}
module.exports = chunkArray