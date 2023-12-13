// for (let  i = 0;  i < array.length;  i++) {
//     const element = array[ i];
// }

for (let i = 0; i <10; i++) {
    const element = i;
    if(element==5){
        console.log("printing 5");
    }
    // console.log(element)
}

for (let  i = 0;  i <=10;  i++) {
            console.log(`outer : ${i}`);
     for (let  j = 0;  j <10;  j++) {
        console.log(i + '*' + j + "=" + i*j);
     }
    
}


//break and continue


// for (let index = 1; index <20; index++) {
//     if(index===5){
//         console.log(`detected 5`)
//         break
//     }
//     console.log(`values:${index}`);
    
// }



for (let index = 1; index <20; index++) {
    if(index===5){
        console.log(`detected 5`)
        continue
    }
    console.log(`values:${index}`);
    
}


//while and do while
let i=0
while (i<9) {
    console.log(`value of i:${i}`);
    i+3;
}


let score=1
do {
    console.log(`Score is ${score}`);
    score++
} while (score<=10);