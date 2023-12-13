let a=10
const b=34

if ( true) {
    let a=10
    const b=34
    var c=23
}

//var make problems its not remove its values

////       PART2          ////

//imported NOTE : Cant use inner object in global but remember you can use global's obect in INNER 



function  one( ) {

    const username="Malik"

    function  two() {
        const website="youtube"
        console.log(username);
        
    }
    //console.log(website)
    two()
}

one()

//Now IF ELSE

if(true)
{
    const data="edsdc"
    if (data="edsdc") {
        const website="youtube"
        console.log(data+website)
    }
    //console.log(website)
}
//console.log(username)


///++++++++++++++++ intersting

addone(5) //you can use it
function  addone( value) {

    return value+1
    
}
addone(5)



addtwo(5)//Note : its through error because its act as  variable "initialize error"
const  addtwo= function( value) {

    return value+2
    
}
addtwo(5)