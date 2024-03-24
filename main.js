function addNumberAndString(number, numberString) {
    return number + Number(numberString);
}
console.log(addNumberAndString(10, "6"));
function multiplyDecimal(num1, num2) {
    return Math.round((num1 * num2) * 100) / 100;
}
console.log(multiplyDecimal(0.6, 0.2));
function divideAndRemainder(dividend, divisor) {
    var quotient = Math.floor(dividend / divisor);
    var remainder = dividend % divisor;
    return { quotient: quotient, remainder: remainder };
}
console.log(divideAndRemainder(6, 3));
