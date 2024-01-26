//Data Type conversion
let s = null;
let Cs = Number(s);
console.log("Cs value is = " + Cs); //0

let s1 = "123ad";
let Cs1 = Number(s1);
console.log("Cs1 value is = " + Cs1); //NaN
console.log("type of Cs1 = " + typeof Cs1); //Number
console.log("type of s1 = " + typeof s1); //String

let s2 = undefined;
let Cs2 = Number(s2);
console.log("Cs2 value is = " + Cs2); //NaN

let s3 = true;
let s4 = false;
let Cs3 = Number(s3);
console.log("Cs3 value is = " + Cs3); //1
let Cs4 = Number(s4);
console.log("Cs4 value is = " + Cs4); //0

console.log("type of NaN = " + typeof NaN); //number

let s5 = "";
let s6 = " ";
let s7 = "1a3"; //anything but not an empty
let Cs5 = Boolean(s5);
let Cs6 = Boolean(s6);
let Cs7 = Boolean(s7);
console.log("Cs5 value is = " + Cs5);
console.log("type of Cs5 = " + typeof Cs5);
console.log("Cs6 value is = " + Cs6);
console.log("type of Cs6 = " + typeof Cs6);
console.log("Cs7 value is = " + Cs7);
console.log("type of Cs7 = " + typeof Cs7);

// =====================operation=================================

console.log(1 + "2"); //12
console.log("1" + 2); //12
console.log(1 + "2" + 3); //123
console.log(1 + 2 + "3"); //33
console.log("1" + 2 + "3"); //123
console.log(((3 + 4) * 5) % 3); //2

console.log(+true); //1
console.log(+false); //0
console.log(+""); //0

//========================comparision=================================
console.log(undefined == 0);
console.log(undefined > 0);
console.log(undefined < 0);
