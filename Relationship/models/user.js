//Approach 1(one to Few);
const  mongoose = require("mongoose");

async function main(){
    await  mongoose.connect('mongodb://127.0.0.1:27017/RelationDemo');
};
main().then(()=>console.log("database connected!"))
.catch((err)=>console.log("something error"));

let userSchema = new mongoose.Schema({
    username:String,
    adderesess:[
        {   
            _id:false,
            location:String,
            city:String,
        }
    ]
});

const User = mongoose.model("User", userSchema);

const userData = async ()=>{
    const user1= new User({
        username:"vicky",
        adderesess:[
            {
                location:"Murali",
                city:"Areraj",
            }
        ]
    });

    user1.adderesess.push({location:"Jagapaker", city:"Areraj"});

    let result  = await user1.save();
    console.log(result);
};
userData();