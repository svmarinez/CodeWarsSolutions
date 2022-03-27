/* Define a method/function that removes from a given array of integers all the values contained in a second array. */

Array.prototype.remove_ = function (integer_list, values_list) {
  //your code here
  return integer_list.filter((x) => !values_list.includes(x));
};
