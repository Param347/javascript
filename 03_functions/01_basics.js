function saymyname(){
    console.log("param");
}
// saymyname()

function addTwoNumber(number1,number2){
    console.log(number1+number2);
}
addTwoNumber(3,4)
addTwoNumber(3,null)
addTwoNumber(3,"4")
const result=addTwoNumber(3,4)
console.log("result: ", result)
function addTwoNumbers1(number1,number2){
        let result=number1+number2
        return result
}
const result1=addTwoNumbers1(3,5)
console.log("result: ", result1)  