const a: number = 1.6;

function lg(value: number): number {
    return Math.log10(value);
}

function sqrt(value: number): number {
    return Math.sqrt(value);
}

function y(x: number): number {
    const x2minus1: number = x * x - 1;
    
    if (x2minus1 <= 0) {
        throw new Error(`x = ${x}: x^2 - 1 = ${x2minus1} <= 0, логарифм не определён`);
    }
    
    const term1: number = Math.pow(a, x2minus1);
    const term2: number = lg(x2minus1);
    const term3: number = sqrt(x2minus1);
    
    return term1 - term2 + term3;
}

console.log("=".repeat(50));
console.log("Задача А: Табуляция функции с шагом Δx");
console.log("=".repeat(50));

const xn: number = 1.2;
const xk: number = 3.7;
const deltaX: number = 0.5;

console.log("x\t\t y(x)");
console.log("-".repeat(30));

for (let x: number = xn; x <= xk + 0.0001; x += deltaX) {
    try {
        const result: number = y(x);
        console.log(`${x.toFixed(2)}\t\t ${result.toFixed(6)}`);
    } catch (error) {
        console.log(`${x.toFixed(2)}\t\t Ошибка: ${error.message}`);
    }
}

console.log("\n" + "=".repeat(50));
console.log("Задача Б: Вычисление для заданных значений xi");
console.log("=".repeat(50));

const xValues: number[] = [1.28, 1.36, 2.47, 3.68, 4.56];

console.log("x\t\t y(x)");
console.log("-".repeat(30));

for (const x of xValues) {
    try {
        const result: number = y(x);
        console.log(`${x.toFixed(2)}\t\t ${result.toFixed(6)}`);
    } catch (error) {
        console.log(`${x.toFixed(2)}\t\t Ошибка: ${error.message}`);
    }
}
