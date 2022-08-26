class car{
    name;
    year;
 constructor(name,year){
    this.name = name;
    this.year = year;
 }

 displat(){
    return ` name = ${this.name}  year = ${this.year}`;
 }


}

const vech = new car('BMW', 2002);

console.log(`${vech.displat()}`);