
// Constactor don`t return function And Always writen by Capital Letter.

function Person(name, age){
    this.name = name;
    this.age = age;
}

Person.prototype.talk = function(){
    console.log(`Hi, My name is ${this.name}`);
}

let p1 = new Person("Nitish", 21);
let p2 = new Person("Kumar", 22);