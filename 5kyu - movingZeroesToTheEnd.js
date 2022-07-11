/*
Kata Description
*/

function moveZeros(arr) {
    let otherVals =  arr.filter(val => val !== 0);
    let zeroes = arr.filter(val => val === 0);
    return otherVals.concat(zeroes)
}; 
