function setusername(username){
    //complex DB
    this.username=username
      
}

function  createApp(username,email,password) {
    setusername.call(this,username)
    this.email=email
    this.password=password
}

const chai = new createApp("amjad","chai.com","123")
console.log(chai);