module.exports = function towelSort (arr) {
    
    arr.map(function(item, i) {
  if (i%2 !== 0) item.sort((a,b) => b-a)
})
    
return arr.flat();
    
}
