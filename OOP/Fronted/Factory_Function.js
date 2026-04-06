function personMaker (name, age){
    let Person={
        name:name,
        age:age,
        talk(){
            console.log(`Hey, I am ${this.name}`)
        }
    }
    return Person;
}