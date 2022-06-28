var isAlive;
console.log(isAlive); // კონსოლში გამოიტანს undefined-ს
//////////////////////////////
var isAlive;
console.log(isAlive); // undefined
isAlive = null;
console.log(isAlive); // null
isAlive = undefined; // ისევ მივანიჭოთ ტიპი undefined
console.log(isAlive); // undefined
//////////////////////
var name = "Tom";
console.log(typeof name); // string

var income = 45.8;
console.log(typeof income); // number

var isEnabled = true;
console.log(typeof isEnabled); // boolean

var undefVariable;
console.log(typeof undefVariable); // undefined
////////////////////////////
// პრეფიქსული ინკრემენტი
var x = 5;
var z = ++x;
console.log(x); // 6
console.log(z); // 6

// პოსტფიქსური ინკრემენტი
var a = 5;
var b = a++;
console.log(a); // 6
console.log(b); // 5
//////////////////
var number1 = "46";
var number2 = "4";
var result = parseInt(number1) + parseInt(number2);
console.log(result); // 50
////////////////////////////
var number1 = "46.07";
var number2 = "4.98";
var result = parseFloat(number1) + parseFloat(number2);
console.log(result); //51.05
/////////////////////
var num1 = "123hello";
var num2 = parseInt(num1);
console.log(num2); // 123
////////////////////////
var num1 = "javascript";
var num2 = "22";
var result = isNaN(num1);
console.log(result); // true - num1 არაა რიცხვი
    
result = isNaN(num2);
console.log(result); //  false - num2 - რიცხვია
