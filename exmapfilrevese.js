let numb =[2 ,6 ,7,8 ,67,54,34,63];

console.log(numb.filter(function(value){
    return value > 7;
}))


console.log(numb.map(function(value){
    return value + 8;
}));

console.log(numb.reverse());