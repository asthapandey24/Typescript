var num1Element = document.getElementById('num1');
var num2Element = document.getElementById('num2');
var buttonElement = document.querySelector('button');
function add(num1, num2) {
    if (typeof num1 === 'number' && typeof num2 === 'number') {
        return num1 + num2;
    }
    else if (typeof num1 === 'string' && typeof num2 === 'string') {
        return num1 + '' + num2;
    }
    else {
        return +num1 + +num2;
    }
}
//console.log(add(1,6))
//console.log(add('1','6'))
buttonElement.addEventListener('click', function () {
    var num1 = num1Element.value; // this value returns string 
    var num2 = num2Element.value;
    var result = add(+num1, +num2); // we are forced to write cleaner code as when we specifiy + then this takes as number otherwise its taking that as string
    var stringResult = add(num1, num2);
    console.log(stringResult);
    console.log(result);
});
