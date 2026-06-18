//Aproach 2 (one to Squillions) more than Many!.
const  mongoose = require("mongoose");
const { Schema } = mongoose;
async function main(){
    await  mongoose.connect('mongodb://127.0.0.1:27017/RelationDemo');
};
main().then(()=>console.log("database connected!"))
.catch((err)=>console.log("something error"));


const postuserschema = new Schema({
    name:String,
    email:String         
});
const postSchema = new Schema({
    constant:String,
    like:Number,
    user:{
        type:Schema.Types.ObjectId,
        ref:"PostUser"
    },
});

const PostUser = mongoose.model("PostUser", postuserschema);
const Post = mongoose.model("Post", postSchema);

const addData = async ()=>{
    let user1 = new PostUser({
        name:"kumar Thakur",
        email:"thakurkumar909@gmial.com",
    });

    let post1 = new Post({
        constant:"BY BY :)",
        like:11,
    });

    post1.user = user1;

    await user1.save();
    await post1.save();
}
// addData();
const getData = async()=>{
    let data = await Post.findOne({}).populate("user", "name");
    console.log(data);
};
getData();