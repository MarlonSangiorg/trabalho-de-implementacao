Matrix = require('./matrix');

var matrix = new Matrix(4, 5, [9,8,7,6,5,4,3,2,1]);
//var matrixB = new Matrix(2, 3, [9,8,7,6]);

//console.log(matrix)
console.log(matrix);
console.log("Metodo get: ", matrix.get(0, 0));
console.log("Metodo set: ", matrix.set(3, 4, 100));
console.log(matrix);
//console.log("MatrixB: ", matrixB.matrix)

