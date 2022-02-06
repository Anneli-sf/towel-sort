module.exports = function towelSort (matrix) {
    
  let arr=[];
  
  if (matrix === undefined) { 
      return arr;
} else 
  for (i=0; i< matrix.length; i++) {
      for (j=0; j< matrix[i].length; j++) {
        let row = i;
        if (row % 2 === 0) 
         row = j;
         else row = (matrix[i].length-1-j); 
          arr.push(matrix[i][row]);
    }
  }
  return arr;
}
