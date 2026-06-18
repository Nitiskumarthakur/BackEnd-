//initialization the data in Database that name "Whatapp";

const mongoose = require("mongoose");
const Chat = require("./models/chat.js");

async function main(){
    await mongoose.connect('mongodb://127.0.0.1:27017/whatapp');
};
main().then(()=>console.log("successeful connection"))
.catch(()=>console.log("not connection !"));

const allchats = [
    {
        from:"ayush",
        to:"abhishek",
        msg:"Listen me,There will be a party today.",
        create_at:new Date()
    },
    {
        from:"anand",
        to:"kunal",
        msg:"can you given me 500 hundrand me.",
        create_at:new Date()
    },
    {
        from:"ayush",
        to:"lavkush",
        msg:"How much back Accounts to you have?",
        create_at:new Date()
    }
    ,{
        from:"kunal",
        to:"abhishek",
        msg:"When are going to motihari.",
        create_at:new Date()
    },
    {
        from:"lavkush",
        to:"nitish",
        msg:"how are you.",
        create_at:new Date()
    },
    {
        from:"nitish",
        to:"lavkush",
        msg:"I am fine and you",
        create_at:new Date()
    },
    {
        from:"lavkush",
        to:"nitish",
        msg:"fine, I have a Problem",
        create_at:new Date()
    },
    {
        from:"nitish",
        to:"rakesh",
        msg:"where are you, when are you going to patna.",
        create_at:new Date()
    },
    {
        from:"amu",
        to:"nitish",
        msg:"tell me, what happen.",
        create_at:new Date()
    },

]
Chat.insertMany(allchats);
// chat1.save().then((res)=>console.log(res)).catch((err)=>err);

