/*var age = 78;
if(true){
    var age = 56;
}

console.log(age); */

/* const name = [1 , 3 , 4 , 6 , 7];
console.log(name);
name.push(0);

console.log(name); */

//arrow function
/*
var fn = (a,b) => {
    return (a+b);
}

console.log(fn(5,8));

var fn = a => a+8; 

console.log(fn(8));

setTimeout(() => (console.log('hello'),2000));


*/
/*
function isEqual(number, compare = 10/2){
    console.log (number);
    console.log(compare);

    return number == compare ;
}

console.log(isEqual(5))
*/
/*
let numbers = [1, 2, 3, 4, 5];

function sumUp(toAdd){
    let result =0;
    for(let i=0; i<toAdd.length; i++){
         result += toAdd[i];
    }
    return result;
}
console.log(sumUp(numbers));
*/
/*
function sumUp(...toAdd){
    console.log(toAdd);
    let result =0;
    for(let i=0; i<toAdd.length; i++){
         result += toAdd[i];
    }
    return result;
}
console.log(sumUp(120,70,10));

*/

 //Template literal  :
/*
 let numb = [1,2,3,4,5,6,7,8,9,0,8,8];

 let [a,...b] = numb;

 console.log(b);
 
*/
/*
let obj = {
 name : 'msd',
 age : 41,

  great :function(){
    console.log('Hello there purinchitha!');
 }

};

let {numb, great: java  } = obj;

java();
console.log(numb);
 
*/

class Person {
    constructor(){
        this.name = 'mari';
    }

    greet (){
        console.log("Hello, good morning everyone I am git " + this.name);
    }
}

let person = new Person();
person.greet();