function calculatedCartPrice(...num1){
    return num1
}

console.log(calculatedCartPrice(200,400,500,2000))

const user={
    username:"hitesh",
    price:199
}
function handleObject(anyobject){
console.log(`username is ${anyobject.username} and price is ${anyobject.price}`);
}
handleObject(user)