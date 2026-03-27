function print(){
    console.log("ok starting");
}

print();

(function (){
   console.log("Node.js server is starting");
}());

const add =(a,b)=> a+b;

console.log(add(2,3));

let arr = [1,2,3,4,5,6,7];

function final(arr){
    arr.find((el)=>{
        if(el == 5){
            console.log("ok 5")
        }else{
            console.log("not 5")
        }
    })
}
// final(arr);                                                                        