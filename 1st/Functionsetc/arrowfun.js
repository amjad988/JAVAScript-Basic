const user={
    username:"Amjad",
    price:999,

    welcomemsg:function(){
        console.log(`${this.username} , welcome to site`);
        console.log(this);
    }
    
}

// user.welcomemsg()
// user.username="malik"
// user.welcomemsg()

//**>output display whole user object

console.log(this);
//output >{}

function ck() {
    let myDATA="Malik"
    console.log(this.username);
}

ck()
//output  =>  undefined

const chai = () =>{
    let myDATA="Malik"
    console.log(this.username);
}

chai()
//output =>  undefined


//Arrow Fun EX
const addnum=(n,n2)=>(n=n2)
const objectex=()=>({mydata:"Amjad"})


