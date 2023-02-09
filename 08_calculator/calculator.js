const add = function(a, b) {
  return a + b;
};

const subtract = function(a, b) {
	return a - b;
};

const sum = function(numbers) {
  let addSum = 0;

  numbers.forEach(number => {
    addSum += number;
  })

  return addSum;
};

const multiply = function(numbers) {
  let mult = 1;

  numbers.forEach(number =>{
    mult *= number;
  })

  return mult;
};

const power = function(a, b) {
	return Math.pow(a,b);
};

const factorial = function(a) {

  if (a === 0 || a === 1) {
    return 1
  } else {
    return a * factorial (a - 1);
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
