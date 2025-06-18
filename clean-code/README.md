# Calculadora hecha en JavaScript con Principios de Clean Code

Este proyecto es una calculadora simple construida con JavaScript modular, enfocada en aplicar los principios de **Clean Code** para lograr un código claro, fácil de mantener, probar y escalar.

---

## Estructura del Proyecto

```

clean-code/
|── index-bad.js # Punto de entrada: ejecuta la calculadora sin clean code
├── index.js # Punto de entrada: ejecuta la calculadora
├── calculator.js # Clase que coordina las operaciones
└── utils/
└── mathOperations.js # Operaciones matemáticas básicas

```

---

## Cómo Ejecutar

Asegúrate de tener Node.js instalado, luego ejecuta:

```bash
node clean-code/index.js
```

---

## Principios de Clean Code Aplicados

A continuación se detallan los principios aplicados, qué significan y cómo se reflejan en el código:

---

### 1. Nombres Significativos

> “El nombre de una función o variable debe decir lo que hace.”

**Aplicado en**:

- `mathOperations.js`: funciones como `add`, `subtract`, `multiply`, `divide`.
- `calculator.js`: método `execute`, propiedad `result`.
- `index.js`: instancia `calculator`.

```js
export function divide(a, b) {
  if (b === 0) throw new Error("Division by zero");
  return a / b;
}
```

**🟢 Beneficio**: El código se explica por sí mismo, sin necesidad de comentarios adicionales.

---

### 2. Funciones Pequeñas y con Única Responsabilidad

> “Una función debe hacer solo una cosa, y hacerla bien.”

**Aplicado en**:

- Cada operación matemática está contenida en su propia función.
- `execute` en `calculator.js` solo coordina qué operación ejecutar.

```js
export function multiply(a, b) {
  return a * b;
}
```

**🟢 Beneficio**: Facilita la prueba y el mantenimiento.

---

### 3. Separación de Responsabilidades

> “Cada módulo debe tener una única responsabilidad clara.”

**Aplicado en**:

- `mathOperations.js`: lógica matemática pura.
- `Calculator.js`: orquestación de operaciones.
- `index.js`: ejecución y presentación.

```js
const calculator = new Calculator();
console.log("Add:", calculator.execute("add", 3, 2));
```

**🟢 Beneficio**: Bajo acoplamiento, alta cohesión.

---

### 4. Manejo Explícito de Errores

> “Nunca ignores casos de error obvios.”

**Aplicado en**:

- `mathOperations.js` maneja la división por cero.

```js
if (b === 0) throw new Error("Division by zero");
```

**🟢 Beneficio**: Previene errores silenciosos y garantiza comportamiento seguro.

---

### 5. Código Autoexplicativo

> “El código bien escrito no necesita comentarios.”

**Aplicado en**:

- El proyecto no incluye comentarios innecesarios.
- Los nombres y estructuras hacen que el código sea legible por sí solo.

**🟢 Beneficio**: Menor mantenimiento, más claridad.

---

### 6. Modularidad

> “Divide el sistema en módulos reutilizables y testeables.”

**Aplicado en**:

- Cada archivo cumple una responsabilidad específica.
- `utils/` contiene funciones reutilizables.

**🟢 Beneficio**: Escalabilidad y reutilización.

---

### 7. Estilo Consistente

> “Estilo uniforme = código más fácil de leer.”

**Aplicado en**:

- Nombres en `camelCase`.
- Formato y espaciado uniforme.
- Uso consistente de `import/export`.

---

## Código Fuente - Mal Hecho

- Todo el código está en un solo archivo (index.js), lo que lo hace difícil de escalar y mantener.
- Variables como op, a, b, x, y, y calc no comunican claramente su propósito.
- No hay separación de lógica matemática, lógica de control ni presentación.
- Por ejemplo, b === 0 no se valida en divisiones, lo que podría producir Infinity.
- Cada operación matemática se implementa manualmente en un bloque condicional. No se reutiliza ninguna función.
- No se sigue ningún estándar de estilo de código ni convención.

### `clean-code/index-bad.js`

```javascript
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
```

---

## Código Fuente - Bien Hecho

### `clean-code/utils/mathOperations.js`

```javascript
export function add(a, b) {
  return a + b;
}

export function subtract(a, b) {
  return a - b;
}

export function multiply(a, b) {
  return a * b;
}

export function divide(a, b) {
  if (b === 0) throw new Error("Division by zero");
  return a / b;
}
```

---

### `clean-code/calculator.js`

```javascript
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
```

---

### `clean-code/index.js`

```javascript
import { Calculator } from "./Calculator.js";

const calculator = new Calculator();

console.log("Add: 3 + 2 =", calculator.execute("add", 3, 2));
console.log("Subtract: 5 - 3 =", calculator.execute("subtract", 5, 3));
console.log("Multiply: 4 * 2 =", calculator.execute("multiply", 4, 2));
console.log("Divide: 10 / 2 =", calculator.execute("divide", 10, 2));
```

---
