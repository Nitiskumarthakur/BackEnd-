const express = require("express");
const path = require("path");
const app = express();
const mongoose = require("mongoose");
const Chat = require("./models/chat.js");
const methodOverride = require('method-override');

const sum = require("./public/app.js");
//const prompt = require("prompt-sync")();

app.use(express.urlencoded({extended:true}));
app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "/views"));
app.use(express.static(path.join(__dirname, "public")));
app.use(express.json());
app.use(methodOverride("_method"));


//MongooseDB.
async function main(){
    await mongoose.connect('mongodb://127.0.0.1:27017/whatapp');
};
main().then(()=>console.log("successeful connection"))
.catch(()=>console.log("not connection !"));

//---------------------//
app.listen(4040, ()=>console.log("server start on the port Number 4040"));

app.get("/", async(req, res)=>{
    let count = await Chat.countDocuments();
    res.render("home.ejs", {count});
})
app.get("/chats", async (req, res)=>{
    let chats = await Chat.find(); // to access the chats in Database.
    res.render("chats.ejs", {chats});
}); 

//Add new Message in Database.
app.get("/chats/new", (req, res)=>{
    res.render("chats_new.ejs")
});
app.post("/chats", async(req, res)=>{
    let {from, to, msg} = req.body;
    let newChats = new Chat(
        {from, to, msg,create_at:new Date()}
    );
    await Chat.insertOne(newChats); // To insert the Message to in  Database.
    // console.log(newChats);
    res.redirect("/chats");
});

//update Chats 
app.get("/chats/:id/edit", async(req, res)=>{
    let {id} = req.params;
    let editChat = await Chat.findById(id);
    // console.log(editChat);
    res.render("edit.ejs",{editChat});
});
app.patch("/chats/:id",async (req, res)=>{
    let {id} = req.params;
    let {newMsg} = req.body;
    let updateChat = await Chat.findByIdAndUpdate(id,{msg:newMsg, updated_at:new Date()});
    // console.log(updateChat);
    res.redirect("/chats");
});

//Delete
app.delete("/chats/:id", async (req, res)=>{
    let {id} = req.params;
    let deleteChat = await Chat.findByIdAndDelete(id);
    //let name = prompt("Enter your name: ");
    sum(1,5);
    // console.log(deleteChat);
    res.redirect("/chats");
})