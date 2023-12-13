class User {
    constructor (email,password){
        this.email=email
        this.password=password
    }


get email(){
    return this._email.toUpperCase()
}
set email(v){
    this._email=v
}

get password(){
    return this._password.toUpperCase()
}

set password(value){
    this._password=value
}

}

const malik=new User("Khan","2313")
console.log(malik.email);
console.log(malik.password);

///Myprotice

class Name{
    first="Amjad"
    last="Hussain"

    get first(){
        return this._first
    }

    set first(value){
        this.first=value
    }


    
    get last(){
        return this.last
    }

    set last(value){
        this.last=value
    }


    get fullname(){
        return this.first + ' ' + this.last
    }

}

const Names=new Name();
Names.first="Malik"
Names.last="Khan"
console.log(Names.fullname);


let arr=['d',23,5345,23,'ds']

const myappo=arr.map(function(ind){
     return ind
})
console.log(myappo);