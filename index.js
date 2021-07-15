
//alert('Im Seungjo. Im student.');
//console.log('Im Seungjo.Im student');

//variable, calculate
//let a = 221;
const a = 221; // It can't be changed when a is a constant
let b = a - 5;
a = 4; //replaced from 221 to 4
console.log(b, a);


//string
const what = seungjo;
//const what = 39393939; -> This number is text not a number

console.log(what);

//boolean
const how = false;

//array
const monday = "elLunes";
const tue = "elmartes";
const wed = "elmierales";
const thur = "eljueves";
const fri = "elviernes";
const sat = "elsabado";
const sun = "eldomingo";

console.log(monday, tue, wed, thur, fri, sat, sun);

const daysOfWeek = ["lunes", "martes", "mierales",
    "jueves", "viernes", "sabado", sun, true];

console.log(daysOfWeek);
console.log(daysOfWeek[0]);

//object
const seungjoInfo = {
    name:"Seungjo",
    age:25,
    gender:"Male",
    isHandsome:true,
    favMovies: ["Along the gods", "WorldWarZ", "Oldboy"],
    favFood:[
        {
            name:"Kimchi",
            fatty:false
        },
        {
            name:"Cheese burger",
            fatty:true
        }
    ]
};

console.log(seungjoInfo.gender);

seungjoInfo.gender = "Female";

console.log(seungjoInfo.gender);


//function
console.log(seungjoInfo.favFood); //log -> function
console.log(seungjoInfo, console);

/*
function sayHello(name, age){
    console.log('Hello!', name, "you have", age);
}
*/
function sayHello(name, age){
    //console.log("Hello" + name + "you are" + age + "years old");
    console.log(`Hello ${name} you are ${age} years old`);
}

//sexy function code with ``
sayHello();
sayHello("Seungjo",  25);
console.log("Hi!");

function sayHello(name, age){
    return `Hello ${name} you are ${age} years old`;
}

const greetSeungjo = sayHello("Seungjo", 15);

console.log(greetSeungjo);

//calculate
const calculator = {
    plus: function(a, b){
        return a + b;
    }
}

const plus = calculator.plus(5, 5)
console.log(plus);


//JS DOM function controlling HTML
const title = document.getElementById("title");

title.innerHTML = "Hi! from JS";
console.error("FUCK");
//console.log(title);

console.dir(title);

title.style.color = "red";
document.title = "I own you now";

const title2 = document.querySelector("#title");


//event
function handleResize(event){
    console.log(event);
    //console.log("I have been resized");
}

function handleClick() {
    title.style.color = "blue";
}

//window.addEventListener("resize",handleResize(event));
title.addEventListener("click", handleClick);


