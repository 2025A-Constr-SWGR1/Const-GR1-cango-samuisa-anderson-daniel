import { add, subtract, multiply, divide } from "./utils/mathOperations.js";

export class Calculator {
  constructor() {
    this.result = 0;
  }

  execute(operation, a, b) {
    switch (operation) {
      case "add":
        this.result = add(a, b);
        break;
      case "subtract":
        this.result = subtract(a, b);
        break;
      case "multiply":
        this.result = multiply(a, b);
        break;
      case "divide":
        this.result = divide(a, b);
        break;
      default:
        throw new Error(`Invalid operation: ${operation}`);
    }
    return this.result;
  }
}
