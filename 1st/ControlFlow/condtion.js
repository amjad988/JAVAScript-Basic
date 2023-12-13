//if
// const isUser =true

// if ( isUser) {
    
    
// }

const balance =1000
if(balance>900) console.log("test");

const logginUser=true
const debit=true

if(logginUser&&debit){
    // console.log("Allowed");
}

//switch
// switch (key) {
//     case value:
        
//         break;

//     default:
//         break;
// }

//consider as false 

// false,0,-0,BigInt 0n,null,undefined,NaN

//truthy values 
//"0",'false',"",[],{},,


/*          Imp     */
//check array length
const userEmail=[]
if (userEmail.length===0){
    // console.log("Array is Empty");
}


//for objects

const emptyobj={}

if(Object.keys(emptyobj).length===0){
    // console.log("Empty");
}

//Nullish coslescing OP  *****

let vsl1;
vsl1=4??10
console.log(vsl1)
//output>5

val1=null??10
console.log(val1)
//output>10

val2=undefined??10
console.log(val2)
//output>10

//Note> "??" used to check null in database or getting response


//*        TerniaryOperator

condition ? true:false

const price=100
price >=50 ? console.log("T"):console.log("F");
