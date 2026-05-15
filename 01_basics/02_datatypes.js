"use strict";  // treat all js code as newer version

// alert(3 + 3) we are using node js not broweser so it can not use

let name="param"  // string
let age=22  // number
let isLoggedin=false  // boolean

// number => 2 to the power 53
// bigint => mre than 2 to the power 53
// string => any test data
// boolean => true or false
// null => empty value
// undefined => value is not assigned
// symbol => unique value

console.log(typeof name);
console.log(typeof age);
console.log(typeof null);
console.log(typeof undefined);

// two types of datatypes based on memory
// primitive => stack
// non-primitive => heap
// 7 types of primitive daratypes => string, number, boolean, null, undefined, symbol, bigint

// reference (non-primitive) datatypes
// Array, Object, Function
const myArray = [1, 2, 3];
const myObject = { name: "param", age: 22 };
const myFunction = function() {
    console.log("Hello, World!");
};
