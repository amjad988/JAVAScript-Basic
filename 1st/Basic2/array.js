//Array

const myArr =[2,2,2,3,5,1,7]
const name=['amjad','kashif']
// console.log(myArr[2])


//Methods

myArr.push(8)
name.push("Humza")
// console.log(name[2])

myArr.pop(2)

myArr.unshift(1)

const newarr=myArr.join()

// console.log(myArr)
// console.log(newarr)

//***join convert array into string

//slice,splice
//Imported


const myarr=[1,2,3,4,5,6]
// console.log("A",myarr)

const my2=myarr.slice(1,3)
// console.log(my2);
// console.log("B",myarr)

const my3=myarr.splice(1,3)
// console.log(my3);
// console.log("C",myarr)

// [ 2, 3, 4 ]
// C [ 1, 5, 6 ]
//Note
//slice cant change the orignal arr but splice remove the selected portion


  

const marvel_heros=["IronMan" ,"Wonda"]
const dc_heros=["superman","flash"]

// const sp=dc_heros.join()
// marvel_heros.push(sp)
// console.log(marvel_heros)

// const all_hero=[...marvel_heros,...dc_heros]
// console.log(all_hero);

const an_arr=[1,2,3,[2,3],[3,8]]
const rea_arr=an_arr.flat(Infinity)

//check
console.log(Array.isArray("Malik"));
//convert
// console.log(Array.from("Malik"))

// console.log(typeof(an_arr))

// console.log(Array.from({name:"Amjad"}))//return []

const a=100
const b=200

console.log(Array.of(a,b));

//Patactice 

function  isBig(n) {

    return n>25
    
}

const arr=[12,23,43,142,34,121,21,84,19]
console.log(arr.filter(isBig));

const arr2=['amjsdg','sdfsf','sdf','dfgaa']
console.log(arr2.filter(()=>arr2.length>3));


//
const number =[-3,4,2,-4,-2,0,6,7,11,9]
function  prime(n) {
    for (let  i = 2;  i<n;  i++) {
        if(n%i===0){
            return false
        }
    }
    return n>1
    
}

console.log(number.filter(prime));