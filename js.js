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
/////////////////
var people = [
    ["Tom", 25, false],
    ["Bill", 38, true],
    ["Alice", 21, false]
];

console.log(people[0]); // ["Tom", 25, false]
console.log(people[1]); // ["Bill", 38, true]
///////////////
var people = [
    ["Tom", 25, false],
    ["Bill", 38, true],
    ["Alice", 21, false]
];
people[0][1] = 56; // მივანიჭოთ ცალკეული მნიშვნელობა
console.log(people[0][1]); // 56

people[1] = ["Bob", 29, false]; // მივანიჭოთ მასივი
console.log(people[1][0]); // Bob
////////////////////switch
// var income = 300;
// switch(income){ 
//     case 100 :
//         console.log("შემოსავალი 100-ის ტოლია");
//         break;
//     case 200 :
//         console.log("შემოსავალი 200-ის ტოლია");
//         break;
//     case 300 :
//         console.log("შემოსავალი 300-ის ტოლია");
//         break;
/////////////for
var people = ["Tom", "Alice", "Bob", "Sam"];
for (var index in people) {
    document.write(people[index] + "</br>");
}
////////////////
var people = ["Tom", "Alice", "Bob", "Sam"];
var index = 0;
while (index < people.length) {
    document.write(people[index] + "</br>");
    index++;
}
/////////////////////////////////
function display(x, func) {
    var message = func(x);
    document.write(message);
}

function welcomeMessage(time) {
    if (time < 12)
        return "დილა მშვიდობისა!";
    else
        return "დღე მშვიდობისა!";
}
display(13, welcomeMessage);
//////////////////////////
function display() {
    console.log("დილა მშვიდობისა");
    display = function () {
        console.log("დღე მშვიდობისა");
    }
}

// ცვლადისთვის ფუნქციაზე მიმართვის მინიჭება ფუნქციის ხელახალ განსაზღვრამდე
display(); // დილა მშვიდობისა
display(); // დღე მშვიდობისა
var displayMessage = display;
displayMessage(); // დღე მშვიდობისა
displayMessage(); // დღე მშვიდობისა

///////////////////////
console.log(foo); // undefined
var foo = "Tom";
var c = a * b;
var a = 7;
var b = 3;
console.log(c); // NaN
////////////////
var user = {};
user.name = "Tom";
user.age = 26;
user.display = function () {
    console.log(user.name);
    console.log(user.age);
};

// მეთოდის გამოძახება
user.display();
///////////////
var user = {
    name: "Tom",
    age: 26,
    display: function () {
        console.log(this.name);
        console.log(this.age);
    }
};
// მეთოდის გამოძახება
user.display();
////////////
var user = {
    "name": "Tom",
    "age": 26,
    "display": function () {
        console.log(user.name);
        console.log(user.age);
    }
};
// მეთოდის გამოძახება
user.display();
///////////
var user = {
    name: "Tom",
    age: 26,
    "full name": "Tom Johns",
    "display info": function () {
        console.log(user.name);
        console.log(user.age);
    }
};
console.log(user["full name"]);
user["display info"]();
///////////////
var user = {};
user.name = "Tom";
user.age = 26;
user.display = function () {
    console.log(user.name);
    console.log(user.age);
};

console.log(user.name); // Tom
delete user.name; // წავშალოთ თვისება
console.log(user.name); // undefined
///////////////////
var country = {
    name: "გერმანია",
    language: "გერმანული",
    capital: {
        name: "ბერლინი",
        population: 3375000,
        year: 1237
    }
};
console.log("დედაქალაქი: " + country.capital.name); // berlin
console.log("მოსახლეობა: " + country["capital"]["population"]); // 3375000
console.log("დაარსების წელი: " + country.capital["year"]); // 1237
//////////////

var country = {
    name: "შვეიცარია",
    languages: ["გერმანული", "ფრანგული", "იტალიური"],
    capital: {
        name: "ბერნი",
        population: 126598
    },
    cities: [{
            name: "ციურიხი",
            population: 378884
        },
        {
            name: "ჟენევა",
            population: 188634
        },
        {
            name: "ბაზელი",
            population: 164937
        }
    ]
};

// country.languages ყველა ელემენტის გამოტანა
document.write("<h3>შვეიცარიის ოფიციალური ენებია</h3>");
for (var i = 0; i < country.languages.length; i++)
    document.write(country.languages[i] + "<br/>");

// country.cities ყველა ელემენტის გამოტანა
document.write("<h3>შვეიცარიის ქალაქებია</h3>");
for (var i = 0; i < country.cities.length; i++)
    document.write(country.cities[i].name + "<br/>");
/////////////
var user = {};
user.name = "Tom";
user.age = 26;
user.display = function () {
    console.log(user.name);
    console.log(user.age);
};
var hasNameProp = "name" in user;
console.log(hasNameProp); // true - თვისება name უკვე არსებობს user ობიექტში
var hasWeightProp = "weight" in user;
console.log(hasWeightProp); // false - user ობიექტში არაა თვისება ან მეთოდი weight
////////////////
var hasNameProp = user.hasOwnProperty('name');
console.log(hasNameProp); // true
var hasDisplayProp = user.hasOwnProperty('display');
console.log(hasDisplayProp); // true
var hasWeightProp = user.hasOwnProperty('weight');
console.log(hasWeightProp); // false
///////////////
function createUser(pName, pAge) {
    return {
        name: pName,
        age: pAge,
        displayInfo: function () {
            document.write("სახელი: " + this.name + " ასაკი: " + this.age + "<br/>");
        }
    };
};
var tom = createUser("Tom", 26);
tom.displayInfo();
var alice = createUser("Alice", 24);
alice.displayInfo();
///////////////
function createUser(pName, pAge) {
    return {
        name: pName,
        age: pAge,
        displayInfo: function () {
            document.write("სახელი: " + this.name + ", ასაკი: " + this.age + "<br/>");
        },
        driveCar: function (car) {
            document.write(this.name + " ატარებს მანქანას მარკით " + car.name + "<br/>");
        }
    };
};

function createCar(mName, mYear) {
    return {
        name: mName,
        year: mYear
    };
};
var tom = createUser("ტომი", 26);
tom.displayInfo();
var bently = createCar("ბენტლი", 2004);
tom.driveCar(bently);
////////////
function User(pName, pAge) {
    this.name = pName;
    this.age = pAge;
    this.displayInfo = function(){
        document.write("სახელი: " + this.name + "; ასაკი: " + this.age + "<br/>");
    };
}
/////////////
function User(pName, pAge) {
    this.name = pName;
    this.age = pAge;
    this.displayInfo = function(){
        document.write("სახელი: " + this.name + "; ასაკი: " + this.age + "<br/>");
    };
};
 
User.prototype.hello = function(){
    document.write(this.name + " ამბობს: 'გამარჯობა!'<br/>");
};
User.prototype.maxAge = 110;
 
var tom = new User("ტომი", 26);
tom.hello();
var john = new User("ჯონი", 28);
john.hello();
console.log(tom.maxAge); // 110
console.log(john.maxAge); // 110
