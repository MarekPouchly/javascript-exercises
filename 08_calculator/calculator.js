const add = function(numOne, numTwo) {
	let result = numOne + numTwo;
  return result;
};

const subtract = function(numOne, numTwo) {
	let result = numOne - numTwo;
  return result;
};

const sum = function(array) {
	let result = 0;
  for (let i = 0; i < array.length; i++) {
    result += array[i]
  }
  return result;
};

const multiply = function(array) {
  let result = 1;
  for (let i = 0; i < array.length; i++) {
    result *= array[i]
  }
  return result;
};

const power = function(numOne, numTwo) {
  let result = numOne ** numTwo
	return result
};

const factorial = function(num) {
	if (num === 0) { 
    return 1; 
  } else { 
    return num * factorial( num - 1 ); 
  }
};

// Do not edit below this line
module.exports = {
  add,
  subtract,
  sum,
  multiply,
  power,
  factorial
};
