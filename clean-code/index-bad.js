function calc(op, a, b) {
  if (op === "+") {
    return a + b;
  } else if (op === "-") {
    return a - b;
  } else if (op === "*") {
    return a * b;
  } else if (op === "/") {
    return a / b;
  } else {
    return 0;
  }
}

let x = 10;
let y = 2;

console.log("Suma:", calc("+", x, y));
console.log("Resta:", calc("-", x, y));
console.log("Multiplicación:", calc("*", x, y));
console.log("División:", calc("/", x, y));
