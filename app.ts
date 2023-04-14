// using "typecasting" that tells typescript this is a HTMLInput
let button = document.querySelector("button")! as HTMLInputElement;
let input1 = document.getElementById("num1")! as HTMLInputElement;
let input2 = document.getElementById("num2")! as HTMLInputElement;;


// 
function add(num1: number , num2: number) {
    return num1 + num2;
}

button.addEventListener("click", function () {
    // by adding a plus it tells typescript this will be a num
    console.log(add( +input1.value, +input2.value ));
});
