let number1 = document.querySelector("#num1");

let number2 = document.querySelector("#num2");

let result = document.querySelector("#result");

let add = document.querySelector("#add");
let sub = document.querySelector("#sub");
let mult = document.querySelector("#mult");
let div = document.querySelector("#div");


add.onclick = function(){
    if (number1.value == "" || number2.value == "") {
        alert("Заполните поле")
        return;
        
    }
    else{
    let equals =parseFloat(number1.value) + parseFloat(number2.value);
    result.value = equals;
    number1.value="";
    number2.value="";
    }
}
sub.onclick = function(){
    if (number1.value == "" || number2.value == "") {
        alert("Заполните поле")
        return;
        
    }
    else{
    let equals =parseFloat(number1.value) - parseFloat(number2.value);
    result.value = equals;
    number1.value="";
    number2.value="";
    }
}
mult.onclick = function(){
    if (number1.value == "" || number2.value == "") {
        alert("Заполните поле")
        return;
        
    }
    else{
    let equals =parseFloat(number1.value) * parseFloat(number2.value);
    result.value = equals;
    number1.value="";
    number2.value="";
    }
}
div.onclick = function(){
    if (number1.value == "" || number2.value == "") {
        alert("Заполните поле")
        return;
        
    }
    else{
    let equals =parseFloat(number1.value) / parseFloat(number2.value);
    result.value = equals;
    number1.value="";
    number2.value="";
    }
}