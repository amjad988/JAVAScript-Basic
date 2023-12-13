
const promise1=new Promise(function(resolse,reject){
    //Do any async check
    //DB calls
    setTimeout(function(){
        console.log("Async task compelte")
        resolse()
    },1000)

})
promise1.then(function(){
    console.log("Done");
})

//2nd


const promise2=new Promise(function(resolve,reject){
    setTimeout(function(){
        console.log("Async task compelte");
        resolve()
    },100)
}).then(function(){
    console.log("2nd Done");
})

//3rd

const promise3=new Promise(function(resolve,reject){
    setTimeout(function(){
        resolve({username:'Malik' ,email:'malikamjad@.com'})
    },1000)
})

promise3.then(function(user){
    console.log(user);
})

//4th
const promise4=new Promise(function(resolve,reject){
    setTimeout(function(){
        let error=true
        if(!error){
            resolve({username:"khan", password:"1234"})
        }else {
            reject("Found Error")
        }
    },1000)
})
promise4.then((user)=>{
    return user.username
}).then((username)=>{
    console.log(username);
}).catch((err)=>{
    console.log(err);
}).finally(()=>{
    console.log("ALL Done Finally");
})



//5th

const promise5=new Promise(function(resolve,reject){
    setTimeout(function(){
        let error=false
        if(!error){
            resolve({username:"Amjad", password:"abc"})
        }else {
            reject("Found Error #5")
        }
    },1000)
})

async function mypromice(){
    try {
        const reponse=await promise5
        console.log(reponse);
    } catch (err) {
        console.log(err);
    }
}

mypromice()

//fetch




// fetch('https://api.github.com/users/hiteshchoudhary')
// .then((response) => {
//     return response.json()
// })
// .then((data) => {
//     console.log(data);
// })
// .catch((error) => console.log(error))

 

async function getAllUsers(){
    try {
        const response = await fetch("https://api.github.com/users/hiteshchoudhary")

        const data = await response.json()
        console.log(data);
    } catch (error) {
        console.log("E: ", error);
    }
}

getAllUsers()


async function myfun(){
   try {
    const reponse= await fetch("https://api.github.com/users/hiteshchoudhary")
    const data =await reponse.json()
    console.log(data)
   } catch (error) {
    console.log("ERROR:",error)
   }
}
myfun()


