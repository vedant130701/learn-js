// mathOperations.js

// Function to add two numbers
export function add(a, b) {
    return a + b;
  }
  
// Function to multiply two numbers
export function multiply(a, b) {
return a * b;
}
// but if we do export default on any one, then only one can be exported, both cant be.
// we can also do export {add, multiply}