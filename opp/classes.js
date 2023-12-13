class User {
    constructor(username, email, password){
        this.username = username;
        this.email = email;
        this.password = password
    }

    encryptPassword(){
        return `${this.password}abc`
    }
    changeUsername(){
        return `${this.username.toUpperCase()}`
    }

}

const res=new User("malik1214","khan@gmail.com","123")

console.log(res.encryptPassword());
console.log(res.changeUsername());




/////My practice
class malik{
    constructor(name,cnic,address){
            this.name=name
            this.cnic=cnic
            this.address=address
    }

    verifyID(){
        if (typeof this.cnic === 'string' && !isNaN(Number(this.cnic)))
        {
            return this.cnic
        }else 
        {
           console.log("Invalid Cinic");
        }
    }
}

const data=new malik("Amjad","82347293422","6th,road")
console.log(data.verifyID());