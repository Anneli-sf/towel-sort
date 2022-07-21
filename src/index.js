module.exports = function towelSort (arr) {
    
    let res = [];
    if (arr === undefined) 
        return res;
    else 
       arr.map(function(item, i) {
        if (i % 2 !== 0) item.sort((a,b) => b-a);
    });

    return res = arr.flat();
    
}
