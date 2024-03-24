// Function to add a number and a string representing a number

function addNumberAndString(number: number, numberString: string): number {
 // Function to add a number and a string representing a number
  return number + Number(numberString);
}

// Function to add a number and a string representing a number
console.log(addNumberAndString(10, "6"));


// Function to multiply two numbers and round the result to two decimal places
function multiplyDecimal(num1: number, num2: number): number {
  return Math.round(num1 * num2 * 100) / 100;
}
console.log(multiplyDecimal(0.6, 0.2));

// Function to divide two numbers and return the quotient and remainder
function divideAndRemainder(
  dividend: number,
  divisor: number
): { quotient: number; remainder: number } {
  let quotient = Math.floor(dividend / divisor);
  let remainder = dividend % divisor;
  return { quotient, remainder };
}
console.log(divideAndRemainder(6, 3));
