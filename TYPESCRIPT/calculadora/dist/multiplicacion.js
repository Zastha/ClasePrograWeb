"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const multiplicar = (a, b, imprimir) => {
    console.log(imprimir, a * b);
};
const operaciones = ['suma', 'resta', 'division', 'multiplicacion', '+', '-', '*', '/'];
const calculadora = (a, b, operacion) => {
    if (operacion == 'suma' || operacion == '+') {
        return a + b;
    }
    if (operacion == 'resta' || operacion == '-') {
        return a - b;
    }
    if (operacion == 'multiplicacion' || operacion == '*') {
        return a * b;
    }
    if ((operacion == 'division' || operacion == '/')) {
        if (b == 0) {
            throw new Error("No se puede dividir entre cero");
        }
        return a / b;
    }
    throw new Error("Operacion no Valida");
};
multiplicar(2, 4, "El resultado es: ");
console.log(calculadora(5, 6, "suma"));
console.log(calculadora(5, 6, "resta"));
console.log(calculadora(5, 6, "multiplicacion"));
console.log(calculadora(5, 6, "division"));
console.log(calculadora(5, 0, "division"));
//# sourceMappingURL=multiplicacion.js.map