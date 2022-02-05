module.exports = function towelSort (matrix) {
    
        let arr=[];
      for (i=0; i< matrix.length; i++) {
        for (j=0; j< matrix[i].length; j++) {
          arr.push(matrix[i][j]);
        }
      }
    
      return arr;
 
}
