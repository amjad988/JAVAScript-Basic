///for fastest redering

(function  chai() 
{
    console.log(`DB connected`);
})();

//IIFE used protect your function from outside pollution
((name)=>{
    console.log(`DB Connected ${name}`);
})("Malik");

//must apply ";" at the end