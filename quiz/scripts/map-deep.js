// Original matrix (list of lists)
const originalMatrix = [
    [3, 2, 1],
    [4, 5, 6],
    [7, 9, 8]
  ];
  
  // const newMatrix = originalMatrix.map((row) => {
  //   return row.sort();
  // }); // does shallow copy. Each row is a reference to the original matrix.

  // const newMatrix = originalMatrix.map((row) => {
  //   return Array.from(row).sort();
  // }); // does shallow copy on each element. Since each element is primitive so does not matter.

  const newMatrix = originalMatrix.map((row) => {
    return [...row].sort();
  }); // does shallow copy on each element. Since each element is primitive so does not matter. This is spread operator.
  
  // Modifying the original matrix (changing the last element of the first row)
  originalMatrix[0][2] = 99;
  
  // Displaying the original and new matrices
  console.log('Original Matrix (modified):', originalMatrix);
  console.log('New Matrix (unaffected):', newMatrix);
  