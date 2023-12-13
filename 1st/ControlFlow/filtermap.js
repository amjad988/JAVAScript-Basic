//const coding=["JS","JAVA","Ruby"]

// const value=coding.forEach((item)=>{
//     console.log(item);
//     return item
// })

// console.log(value)

//OUTPUT > Undefiend  >>>because its not return

const mynums=[1,2,3,4,5,6,7,8,9]

const newnum=mynums.filter((num)=> {
    return num>3
})
console.log(newnum)


//*Note: if you use just () no need write "return" key word
//but if you use {} means open a scope must return it

 

//forEach
const newn=[]

mynums.forEach((num) => {
    if(num>3){
        newn.push(num)
    }
})


///New
//MAP

const number =[1,2,3,4,5,6,7,8,9]

const mynum=number.map((num)=>{return num+10})
// console.log(newn)


//Chaning

const mynum1=number
                .map((num)=>{return num+10})
                .map((num)=>num+1)
                .filter((num)=>num >=40)



//reduse


const total=number.reduce(function(acc,curval){
    console.log(`acc:${acc} and cur: ${curval}`);
    return acc + curval
},0)
console.log(total);






const shopingcart=[
    {
        itemName:"JS",
        price:222
    },
    {
        itemName:"Java",
        price:1250
    },
    {
        itemName:"python",
        price:3500
    },
]

const total2=shopingcart.reduce((acc,curr)=>acc+curr.price,0)
console.log(total2);