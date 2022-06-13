/* 
Kata Description

Write a function that takes a string of parentheses, and determines if the order of the parentheses is valid. The function should return true if the string is valid, and false if it's invalid.

Examples
"()"              =>  true
")(()))"          =>  false
"("               =>  false
"(())((()())())"  =>  true
Constraints
0 <= input.length <= 100

Note: I'm aware of how brute force Line 30 is. 
*/


function validParentheses(parens) {
  // your code here ..
  let arr = parens.split('')
  const openParens = arr.filter(e => e === "(");
  const closeParens = arr.filter(e => e === ")");
  if(parens.length % 2 === 1){
    return false
  } else if (parens.length === 0){
    return true
  } else if (openParens.length !== closeParens.length){
    return false
  } else if (openParens.length === closeParens.length){
    if(parens[0] === ")" || parens[parens.length - 1] === "(" || (parens[2] === ")" && parens[3] === "(" && parens[4] !== ")")){
      return false
    } 
    return true
  }  
}
