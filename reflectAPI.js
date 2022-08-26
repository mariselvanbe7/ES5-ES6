class Person {
    constructor(name){
        this.name = name;
    }


}
let person = Reflect.construct(Person,['Masx']);
console.log(person);

