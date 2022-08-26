/*var alp = 'gfshgfds' ;
var alps = /[A-Za-z]/;

if(alp.match(alps)){
    console.log('yes');
}

else{
    console.log('false');
}*/

var str = `I scream,
you scream,
we all scream for ice cream`;
var regEx = /^\w+/gm;
var result = str.match(regEx);
console.log( result );
