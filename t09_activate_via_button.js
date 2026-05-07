/******************
Name of task: activate via button
******************/

 
 

//Variables
var name = " Nicholas"
var currentYear = 2026;
var age = 15;
var number16 = 16;
var number10 = 10; 
var answer;
var answer2;
var isStudent = true;
var pocketMoney = "400" 
var number200 = 200;
var answer3;
var number4 = 4;
var number3 = 3;
var number250 = 2.50;

const OUTPUT = document.getElementById("spaceForJavaScriptOutput");

OUTPUT.innerHTML="<p>Hello world</p>"; 
OUTPUT.innerHTML+="<p>Hello" + name + "</p>";
OUTPUT.innerHTML+="<p>As of " +currentYear+  "</p>"
OUTPUT.innerHTML+="<p>You are " + age + " years old </p>";
answer = currentYear - number16;
OUTPUT.innerHTML+="<p>You were born in " + answer + "</p>";
answer2 = age + number10;
OUTPUT.innerHTML+="<p>In 10 years you will be " + answer2 + "</p>"
OUTPUT.innerHTML+="<p>You have $" + pocketMoney + "</p>"
answer3 = pocketMoney - number200;
OUTPUT.innerHTML+="<p>You spend half of your money, now you have $" + answer3 + "</p>";


/******************
 Main code
*******************/


console.log(  "Running T9-activate via button");
console.log( "hello world");
console.log( "hi"+ name)
console.log( "as of "+ currentYear) 
console.log("you are "+ age + " years old")
answer = currentYear - number16;
console.log( "you were born in "+ answer)
answer2 = age + number10;
console.log( "in 10 years you will be " + answer2)
console.log("you have $"+ pocketMoney)
answer3 = pocketMoney - number200;
console.log( "You spend half of your money, now you have $" + answer3)
writeLine()
wellcome()
displayProducts("3", "4",  "2.50")



/*******************
Functions
*******************/
function start() {
spaceForJavaScriptOutput.innerHTML
spaceForJavaScriptOutput.innerHTML
answer = currentYear - number16;

spaceForJavaScriptOutput.innerHTML
}

function writeLine(){
    OUTPUT.innerHTML += "<p>Less code matters</p>";
}

function wellcome(){
    OUTPUT.innerHTML += "<p>Wellcome to the shop</p>"
}

function displayProducts(_number4, _number3,_number250, ){
OUTPUT.innerHTML += "<p>Chocolate Bar: $" +_number4+ "</p>"
OUTPUT.innerHTML += "<p>Chips: $" +_number3+ "</p>"
OUTPUT.innerHTML += "<p>Drink: $" +_number250+ "</p>"
}

