// array

const  myarry=[1,2,3,4,5];
console.log( myarry);
console.log(typeof myarry);
console.log(myarry[1]);

const a=new Array(2,3,4,5,6,7);
console.log(myarry.length);

const myheroes=["superman","spiderman","ironman"];

// array methods
// last ma add and delete karva
a.push(6);
a.pop();

// starting ma add and delet karva mate
// strtin ma add karva mate
a.unshift(0);
a.unshift(5);
// starting ma remove karva mate
a.shift();

console.log(a.includes(3));
console.log(a.indexOf(3));
// strig ma concert thay jase means data types chanj thay jase
const newarry=a.join();
console.log(a);
console.log(newarry);

const myn1=myarry.slice(2,5);
console.log(myn1);
console.log("B" ,myarry);

const myn2=myarry.splice(1,3);
console.log(myn2);

