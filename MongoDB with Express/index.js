const express = require("express");
const path = require("path");
const app = express();
const mongoose = require("mongoose");
const Chat = require("./models/chat.js");

app.use(express.urlencoded({extended:true}));
app.set("view engin", "ejs");
app.set("views", path.join(__dirname, "/views"));
app.use(express.static(path.join(__dirname, "public")));
app.use(express.json());

app.listen(9090, ()=>console.log("server start on the port Number 9090"));
app.get("/", (req, res)=>{
    res.send("Get Method are working!");
});

//MongooseDB.
async function main(){
    await mongoose.connect('mongodb://127.0.0.1:27017/whatapp');
};
main().then(()=>console.log("successeful connection"))
.catch(()=>console.log("not connection !"));

 



