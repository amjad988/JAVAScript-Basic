const arr=[1,24,43,35,76,27,53,22,4]

const myarr=arr.filter(function(num){
         return num<33
})

console.log(myarr);

const books = [
    { title: 'Book 1', author: 'Author 1', year: 1998 },
    { title: 'Book 2', author: 'Author 2', year: 2005 },
    { title: 'Book 3', author: 'Author 3', year: 1995 },
    { title: 'Book 4', author: 'Author 4', year: 2010 },
  ];
  const recentBooks = books.filter((book) => book.year > 2000);
  console.log(recentBooks);
  
  const arr2=books.map(function(data){
    return data.title
  })

  console.log(arr2);

  books.push({title:'MyBook',author:'Aqib',year:2023});
//   books.splice(1,1)
  const again=books.forEach(function(val){
    console.log(val);
  })

  console.log(again);


  const A=[1,2,3,4,5,6]

  const B=A.splice(3,2,9,10)

  console.log(A);

const C=A.slice(2,4)

console.log(C);


const numbers = [4, 2,10, 8, 1, 6];

 
numbers.sort((a, b) => a - b);
console.log(numbers);  

const fruts=['Banana','Apple','Cherry']

fruts.sort((a,b)=>a.toLowerCase().localeCompare(b.toLowerCase()))

console.log(fruts);

const fruits = ['Banana', 'apple', 'Orange', 'Mango'];

const data2= fruits.slice().sort((a,b)=>a.toLowerCase().localeCompare(b.toLowerCase()))
console.log(data2);
console.log(fruits);

console.log(typeof data2);



//////Object

const obj={
    name:"Hussain",
    username:"hs1214",
    password:213,
}


