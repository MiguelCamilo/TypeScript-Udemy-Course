const add = (n1: number, n2: number, printResult: boolean) => {
    if (printResult) {
        console.log(n1 + n2)
    }
    return n1 + n2;
}

// TypeScript use type inference to infer the type of the variable
const num1 = 5
const num2 = 10
const printResult = true

add(num1, num2, printResult);