const a: number = 1.6;

function lg(value: number): number {
    return Math.log10(value);
}

function cbrt(value: number): number {
    return Math.pow(value, 1 / 3);
}

function calculateY(x: number): number {
    const exponent: number = x * x - 1;
    const term1: number = Math.pow(a, exponent);
    const term2: number = lg(exponent);
    const term3: number = cbrt(exponent);
    return term1 - term2 + term3;
}

const xValues: number[] = [1.28, 1.36, 2.47, 3.68, 4.56];

console.log("Результаты вычислений:");
console.log("x\t\ty");
console.log("-------------------");

for (const x of xValues) {
    const y: number = calculateY(x);
    console.log(`${x}\t${y.toFixed(6)}`);
}
