var isAlive;
console.log(isAlive); // კონსოლში გამოიტანს undefined-ს
//////////////////////////////
var isAlive;
console.log(isAlive); // undefined
isAlive = null;
console.log(isAlive); // null
isAlive = undefined;  // ისევ მივანიჭოთ ტიპი undefined
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
