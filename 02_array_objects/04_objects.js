// this is a singleton object

const tinder=new Object();
tinder.name="param",
tinder.age=18,
tinder.isLoggedIn=false
console.log(tinder);

const regularUser={
    email:"s@gmail.com",
    fullname:{
        userfullname:"param radadiya",
         lastname:"patel"
    }
}
console.log(regularUser.fullname.userfullname)

const obj1={
    1:"a",
    2:"b"
}
const obj2={
    3:"a",
    4:"b"
}
const obj3= Object.assign({},obj1,obj2)
// same as above
const obj4={...obj1,...obj2}
console.log(obj4)

const arry=[
{
    name:"param",
    age:18
},
{
    name:"param",
    age:18
},
{
    name:"param",
    age:18
},
{
    name:"param",
    age:18
}

]
console.log(arry[1].name)
console.log(Object.keys(tinder))
console.log(Object.values(tinder))
console.log(tinder.hasOwnProperty('isLoggedIn'));

// distructuring

const course={
    coursename:"js in hindi",
    price:"999",
    courseInstructor:"hitesh"
}
// course.courseInstructor
// koy pan object in andar ni value ni new name thi accses kari saki
const{courseInstructor:instructor}=course
console.log(instructor);

