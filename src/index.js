"use strict";
let a = "idris";
console.log(a);
//eksplisit
let x = 90;
var y = "plugin";
console.log(x, y);
//implisit
let k = 20;
let o = "web";
console.log(k, o);
//tipe data any
let kelas;
kelas = true;
console.log(kelas);
//union
let mouse;
mouse = 20;
console.log(mouse);
let userID;
userID = 69;
console.log(userID);
//void
function oke(name) {
    console.log(`Hello, ${name}!`);
}
oke("Atha");
//square bracket
let list;
list = [1, 2, 3, 4];
//generic array
let list1;
list1 = [1, 2, 3, 4];
console.log(list, list1);
//tuple
let person;
person = ["Marzuki", 20, 30];
console.log(person);
//object
let person1;
person1 = {
    name: "atha",
    age: 28,
    addres: "brebes"
};
console.log(person1);
//for loop
for (let i = 0; i < 5; i++) {
    console.log(`Loop ke ${i + 1}`);
}
//while loop
let counter = 0;
while (counter <= 5) {
    counter++;
    console.log(counter);
}
//if else
let nilai = 90;
if (nilai > 75) {
    console.log("lulus");
}
else {
    console.log("tidak lulus");
}
//switch case
let day = 3;
let dayName;
switch (day) {
    case 1:
        dayName = "Senin";
        break;
    case 2:
        dayName = "Selasa";
        break;
    case 3:
        dayName = "Rabu";
        break;
    case 4:
        dayName = "Kamis";
        break;
    case 5:
        dayName = "Jum'at";
        break;
    default:
        dayName = "hari lainnya";
}
console.log(`Hari ini adalah ${dayName}`);
