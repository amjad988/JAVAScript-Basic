//singleton


//object literals

const mysm=Symbol("key1")

const jsuser={
    name:"amjad",
    [mysm]:"key1",
    age:21,
    lacation:"rawalpindi",
    email:"aa@gmail.com"
}

// console.log(jsuser.email);
// console.log(jsuser["email"])
// console.log(jsuser[mysm])
// console.log(typeof jsuser[mysm])
// console.log(typeof mysm)

//****/ Object.freeze(jsuser)
 
jsuser.greeting=function(){
    console.log("HI MAlik")
}

console.log(jsuser.greeting());



//********  Part2         *********/

//singleTon

const tinder1 =new Object()

const tinder=new Object()

tinder.id=123
tinder.name="Amjad"
tinder.isLogin=false

const regular={
    email:"akjdsh@gmail.com",
    fullname:{
        fname:"Amajd",
        lname:"Hussain"
    }
}

const obj={1:"a",2:"d"}
const obj1={3:"a",4:"d"}

const obj3=Object.assign({},obj,obj1)
const obj4={...obj,...obj1}
console.log(obj4);


//Values from database


const users=[
    {
        id:23,
        email:"hdjfef"
    },
    {

    }
]

users[1].email


//imported
//convert into array


// console.log(Object.keys(tinder))
// console.log(Object.values(tinder))
// console.log(Object.entries(tinder))

//for checking value or key in object

console.log(tinder.hasOwnProperty('id'))


//<     part#3    >//

const course={
    coursename:"JS",
    price:"999",
    instructor:"malik"
}

//course.instructor
//alternative of up code
const {instructor}=course
console.log(instructor);

const{instructor:ins}=course
console.log(ins)

//JSON

// {
//     "name":"amjad",
//     "coursename":"jshindi"
// }