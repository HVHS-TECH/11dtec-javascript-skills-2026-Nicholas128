/******************
Name of task: JavaScript and HTML
******************/

 
 

//Variables
var name = " Nicholas"
var currentYear = 2025;
var age = 15;
var number15 = 15;
var number10 = 10; 
var answer;
var answer2;
var isStudent = true;
var pocketMoney = "400" 
var number200 = 200;
var answer3;


/******************
 Main code
*******************/
const OUTPUT = document.getElementByID("SpaceForJavaScriptOutput");

OUTPUT.innerHTML = "<p>Hello World</p>"

console.log(  "Running T5-JVS HTML.js");
console.log( "hello world");
console.log( "hi"+ name)
console.log( "as of "+ currentYear) 
console.log("you are "+ age + " years old")
answer = currentYear - number15;
console.log( "you were born in "+ answer)
answer2 = age + number10;
console.log( "in 10 years you will be " + answer2)
console.log("you have $"+ pocketMoney)
answer3 = pocketMoney - number200;
console.log( "You spend half of your money, now you have $" + answer3)



/*******************
Functions
*******************/