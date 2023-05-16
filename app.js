var add = function (n1, n2, printResult) {
    if (printResult) {
        console.log(n1 + n2);
    }
    else {
        return n1 + n2;
    }
};
var num1 = 5;
var num2 = 10;
var printResult = false;
add(num1, num2, printResult);
