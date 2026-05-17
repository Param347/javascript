// singleton
// object.create(null) constructar thi object bane aane tema singleton hoy  

// in above all are have a object literals
const mysym=Symbol("my indenstifyer");
const jsUser={
    name:"param",
    // aaya symbole ne [] braket vagar darsavi to te tene string tarike treat karse
    [mysym]:"my symbol",
    age:18,
    email:"param@gmail.com",
    // full name ne print karava braket noj use karvo pade . karine tene print na karavi sakiye
    "full name":"param radadiya"
}
// console.log(jsUser.email)
// console.log(jsUser["email"])
// console.log(jsUser["full name"])
// console.log(jsUser[mysym])

// jsUser.email="hitesh@gmail.com"
// Object.freeze(jsUser);
// jsUser.email="param123@gmail.com"
// console.log(jsUser);

jsUser.greeting=function(){
    console.log("hello js user");
}
jsUser.greetingtwo=function(){
    console.log(`hello js user, ${this.name}`);
}

console.log(jsUser.greeting());
console.log(jsUser.greetingtwo());