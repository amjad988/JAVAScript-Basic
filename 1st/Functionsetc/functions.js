function saymyname(){
    console.log("ww");
    console.log("ds")
}
saymyname()

function add(a,b){
    console.log(a+b);
}

add(2,4)
//return

function add1(a,b){
    return console.log(a+b);
}
//note we a default value as amjad
function loginuser(username="amjad" ) {
    if(username===undefined){
        console.log("please enter username")
        return
    }
    return `${username} just logged in`
}

loginuser("malik")


///        Part2   ////////
///    restoperator
function cartprice(...num1) {
    return num1
}
console.log(cartprice(22,44,134)); 
//output [22,44,134]

const user = {
    username:"Ali",
    price:"345"
}

function handleobject(anyobject) {
    console.log(`The ${anyobject.username} and the price ${anyobject.price}`);
}
handleobject(user)

//handle Array

const myArray=[200,344,231]

function returnvalue(getArray){
    return getArray[2]
}
console.log(returnvalue(myArray));