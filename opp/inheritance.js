class user{
    constructor( username){
        this.username=username
    }

    logme(){
        console.log(`username is ${this.uername}`);
    }
}

class Teacher extends user{
    constructor(username,email,password){
        super(username)
        email=this.email
        password=this.password
    }
    addCourse(){
        console.log(`Course added By ${this.username}`);
    }
}

const chai=new Teacher("Amhad22","jhanb@jsh","123")
chai.addCourse()
console.log(chai instanceof user )
