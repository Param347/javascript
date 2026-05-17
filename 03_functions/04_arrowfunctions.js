const user={
    username:"param",
    price:999,

    welcomeMessage : function(){
        console.log(`${this.username},welcome to website`);
        console.log(this);
    }
}
// user.welcomeMessage()
// user.username="sam"
// user.welcomeMessage()

console.log(this);
/*
function chai(){
    let username="param"
    // i can not use this.username becuase this is use only in object
    console.log(this.username);
}
chai()

const chai=function(){
    let username="param"
    console.log(this.username);
}
*/
// arrow functions
const chai=() => {
    let username="param"
    console.log(this.username);
}

const add=(num1,num2)=>{
    return num1+num2
}
const addtwo =(num1,num2) =>(num1+num2)
console.log(add(3,4))
