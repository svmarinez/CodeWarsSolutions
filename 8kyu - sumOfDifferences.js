/*
Kata Description

Your task is to sum the differences between consecutive pairs in the array in descending order.

Example
[2, 1, 10]  -->  9
In descending order: [10, 2, 1]

Sum: (10 - 2) + (2 - 1) = 8 + 1 = 9

If the array is empty or the array has only one element the result should be 0 (Nothing in Haskell ).
*/

function sumOfDifferences(arr) {
  let reversedArr = arr.sort((a, b) => b - a);
  let differences = []
  for(let i = 0; i < reversedArr.length - 1; i++){
    differences.push(reversedArr[i] - reversedArr[i + 1])
  }
  
  return differences.reduce((acc, curr) => acc + curr, 0)
}
