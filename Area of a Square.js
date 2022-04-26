Complete the function that calculates the area of the red square, when the length of the circular arc A is given as the input. Return the result rounded to two decimals.

function squareArea(A){
  return Number(Math.pow(2 * A / 3.14159, 2).toFixed(2))
}
