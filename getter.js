class men{
    constructor(f,l,a,g){
        this.firstName = f;
        this.lastName = l;
        this.age = a;
        this.mail = g;
    }

    get details(){
        return `Firstname = ${this.firstName} Lastname = ${this.lastName} Age = ${this.age}  Mail = ${this.mail}`
    }

    set changelastname(value){
        this.lastName = value;
    }
}

let det1 = new men('saravana', 'vel', 22 , 'saravana@gmail.com');

console.log(det1.details);

det1.changelastname ='Killi';
console.log(`After changed lastname ${det1.details}`);