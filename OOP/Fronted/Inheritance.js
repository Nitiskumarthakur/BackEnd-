class Person{
    constructor(name, age){
        this.name = name;
        this.age = age;
    }
    talk(){
        console.log(`Hi, I am ${this.name}`);
    }
}
class Student extends Person{
    constructor(name, age, roll){
        super(name, age);
        this.roll = roll;
    }
     
}
class Teacher extends Person{
    constructor(name,age, subject){
        super(name, age);
        this.subject = subject;
    }
}



