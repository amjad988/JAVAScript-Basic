function multi(num){
    return num * 5
}

multi.power=2

console.log(multi(5));
console.log(multi.power);
console.log(multi.prototype);

//

function createuser(username,price){
    this.username=username
    this.price=price
}

createuser.prototype.increment=function(){
    this.score++
}
createuser.prototype.print=function(){
    console.log(`Price is ${this.price}`);
}
const chai=new createuser("chai",25)
chai.print()