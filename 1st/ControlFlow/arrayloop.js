//for...of

const arr=[1,2,3,4,5]

for (const value of  arr) {
    //console.log(value);
}
//> value of Array

const greeting="Amjad Is great"

for (const  greet of  greeting) {
    // console.log(`Each char is ${greet}`);
}

//Maps **imported

const map=new Map()
map.set('in',"India")
map.set('pk',"Pakistan")
map.set("ban","Bangladash")

// console.log(map)


for (const  [key,value] of  map) {
    //console.log(key,":>",value);
}


for (const  [key] of  map) {
   // console.log(key);
}


//*NOTE > you cant use 'forof ' for object


//FORIN LOOP&&&&&

// object....***



const myObj={
    'game1':"nfc",
    'game2':"Pubg",
    'game3':"Call of Duty"
}

for (const key in myObj) {
   //  console.log(myObj[key]);
}

const pr=["js",'nodejs']
for (const key in  pr) {
    console.log(pr[key]);
}

//Note => you cant itrate MAP

