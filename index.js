
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
/*
function handleClick() {
    title.style.color = "blue";
}
*/
//window.addEventListener("resize",handleResize(event));
title.addEventListener("click", handleClick);


//if-else
if(10 > 5) { // === 두 변수가 같은지 확인
    //if ("seungjo" === "seungmoke")
    console.log("hi");
    // else if {}
} else {
    console.log("ho");
}

if (20 > 5 && "seungjo" === "seungjo") { // and
//if (20 > 5 || "seungjo" === "seungjo") { // or
    console.log("yes");
} else {
    console.log("no");
}


const age = prompt("What's ur name?") //ask sth to user
//console.log(age);

if(age > 18) {
    console.log("You can drink");
} else {
    console.log("You can't");
}


const BASE_COLOR = "red";
const OTHER_COLOR = "#7f8c8d";

function handleClick() {
    const currentColor = title.style.color;

    if(currentColor === BASE_COLOR) {
        title.style.color = OTHER_COLOR;
    } else {
        title.style.color = BASE_COLOR;
    }
}

function init(){
    title.style.color = BASE_COLOR;
    title.addEventListener("mouseenter", handleClick);
}
init();


//example about event
function handleOffline() {
    console.log("Bye Bye");
}

function handleOnline() {
    console.log("Welcome back");
}

window.addEventListener("offline", handleOffline);
window.addEventListener("online", handleOnline);


//DOM if-else function
const title = document.querySelector("title");

const CLICKED_CLASS = "clicked";

function handleClicked() {
    //const currentClass = title.className;
    const hasClass = title.classList.contains((CLICKED_CLASS));

    //if(currentClass !== CLICKED_CLASS){
    if (!hasClass) {
        //title.className = CLICKED_CLASS;
        title.classList.add(CLICKED_CLASS);
    } else {
        //title.className = "";
        title.classList.remove(CLICKED_CLASS);
    }
}
//위의 함수와 동일한 event
function handleClicked2(){
    title.classList.toggle(CLICKED_CLASS);
}



function init() {
    title.addEventListener("click", handleClick);
}
init();