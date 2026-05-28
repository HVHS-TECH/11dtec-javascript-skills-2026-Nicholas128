/******************
Name of task: for_loops
******************/




//Variables
var name = "Nicholas"
var currentYear = 2026;
var age = 15;
var number16 = 16;
var number10 = 10;
var answer;
var answer2;
var isStudent = true;
var pocketMoney = 400;
var number200 = 200;
var answer3;
var number4 = 4;
var number3 = 3;
var number250 = 2.50;


const OUTPUT = document.getElementById("spaceForJavaScriptOutput");
function getNameInput() {
    const NAME_FIELD = document.getElementById("nameField");
    var userName = NAME_FIELD.value;
    OUTPUT.innerHTML += "<p>Your name is " + userName + "</p>";
}

function getAgeInput() {
    const AGE_FIELD = document.getElementById("ageField");
    var userAge = AGE_FIELD.value;

    OUTPUT.innerHTML += "<p>Your age is " + userAge + "</p>";
}

function getPocketMoneyInput() {
    const POCKETMONEY_FIELD = document.getElementById("pocketMoneyField");
    const userPocketMoney = Number(POCKETMONEY_FIELD.value);

    OUTPUT.innerHTML += "<p>Your amount is $" + userPocketMoney + "</p>";

    const chocolatePrice = 4;

    if (userPocketMoney >= chocolatePrice) {
        OUTPUT.innerHTML += "<p>You can afford a Chocolate Bar</p>";


        var change = calculateChange(userPocketMoney, chocolatePrice);

        OUTPUT.innerHTML += "<p>You will get $" + change + " change</p>";

    } else {
        OUTPUT.innerHTML += "<p>You can't afford a Chocolate Bar</p>";
    }


}










/******************
 Main code
*******************/ 


console.log("Running T15-for_loop");
console.log("hello world");
console.log("hi" + name)
console.log("as of " + currentYear)
console.log("you are " + age + " years old")
answer = currentYear - number16;
console.log("you were born in " + answer)
answer2 = age + number10;
console.log("in 10 years you will be " + answer2)
console.log("you have $" + pocketMoney)
answer3 = pocketMoney - number200;
console.log("You spend half of your money, now you have $" + answer3)

 



/*******************
Functions
*******************/
function start() {


    OUTPUT.innerHTML = "<p>Hello world</p>";
    OUTPUT.innerHTML += "<p>Hello " + name + "</p>";
    OUTPUT.innerHTML += "<p>As of " + currentYear + "</p>";
    OUTPUT.innerHTML += "<p>You are " + age + " years old</p>";

    answer = currentYear - number16;
    OUTPUT.innerHTML += "<p>You were born in " + answer + "</p>";

    answer2 = age + number10;
    OUTPUT.innerHTML += "<p>In 10 years you will be " + answer2 + "</p>";

    OUTPUT.innerHTML += "<p>You have $" + pocketMoney + "</p>";

    answer3 = pocketMoney - number200;
    OUTPUT.innerHTML += "<p>You spend half of your money, now you have $" + answer3 + "</p>";



    welcome()
    getNameInput();
    getAgeInput();
    getPocketMoneyInput();
    calculateChange();
    writeLine()
    displayProducts(number4, number3, number250)

}

function writeLine() {
    OUTPUT.innerHTML += "<p>Less code matters</p>";

}
function welcome() {
    OUTPUT.innerHTML += "<p>Welcome to the shop</p>"
}



function displayProducts(_number4, _number3, _number250) {
    OUTPUT.innerHTML += "<p>Chocolate Bar: $" + _number4 + "</p>"
    OUTPUT.innerHTML += "<p>Chips: $" + _number3 + "</p>"
    OUTPUT.innerHTML += "<p>Drink: $" + _number250 + "</p>"
}


function calculateChange(_money, _price) {
    var price = calculateChange(4);
    var money = calculateChange(userPocketMoney);
    var change = calculateChange(_money, _price)
    OUTPUT.innerHTML += "<p>Your change is $" + money + "</p>"
}


function calculateChange(_money, _price) {

    var change = _money - _price;

    return change;
    var change = calculateChange(userPocketMoney, 4);

    OUTPUT.innerHTML += "<p>You will get $" + change + " change</p>";

}

function scale() {
    const CHOOSE_FIELD = document.getElementById("chooseField");
    var classArray = ["0", "1", "2", "3"];

    var choice = CHOOSE_FIELD.value;
if (choice == 0) {
        OUTPUT.innerHTML = "You loath chocolate";
    }
    else if (choice == 1) {
        OUTPUT.innerHTML = "Chocolate is meh";
    }
    else if (choice == 2) {
        OUTPUT.innerHTML = "Chocolate is pretty good";
    }
    else if (choice == 3) {
        OUTPUT.innerHTML = "Chocolate is the best thing EVER!!!";
    }

}

function number() {
const NUMBER_FIELD = document.getElementById("numberField");  
console.log("Starting loop");
for (count = 0; count < 99; count++) {
    console.log("current count; " + count);
}
console.log("loop stopped");
}

100 bottles of milk on the wall
100 bottles of milk on the wall
take one done pass it around
99 bottles of milk on the wall

