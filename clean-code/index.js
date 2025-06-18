import { Calculator } from "./calculator.js";

const calculator = new Calculator();

console.log("Add: 3 + 2 =", calculator.execute("add", 3, 2));
console.log("Subtract: 5 - 3 =", calculator.execute("subtract", 5, 3));
console.log("Multiply: 4 * 2 =", calculator.execute("multiply", 4, 2));
console.log("Divide: 10 / 2 =", calculator.execute("divide", 10, 2));
