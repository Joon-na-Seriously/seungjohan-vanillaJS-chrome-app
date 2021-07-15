
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