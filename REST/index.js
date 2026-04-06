const express = require('express');


const  methodOverride = require('method-override');

const app = express();

app.use(methodOverride('_method'))
//import { v4 as uuidv4 } from 'uuid';
const {v4:uuidv4} = require('uuid');

app.use(express.urlencoded({extended:true}));
app.use(express.json());
//For path.
const path = require('path');
app.use(express.static(path.join(__dirname, "public")));

app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "views"));


app.listen(4040, ()=>console.log("server are start Port Number 4040"));

app.get('/',(req,res)=>{
    res.send("Learning the REST");
});

let posts = [
    {
        id:uuidv4() ,
        username:"nitish",
        content:"Hi, I am nitish, I like codding",
    },
    {
        id:uuidv4() ,
        username:"thakur",
        content:"Hard work in important to achive to success",
    },
    {
        id:uuidv4() ,
        username:"kumar",
        content:"I got selected for my 1st intership",
    }
];

app.get('/posts', (req, res)=>{
    res.render("index.ejs", {posts})
});
//open from to write username and content.
app.get('/posts/new', (req, res)=>{
    res.render("new.ejs");
});
//Add Post to posts Array.
app.post('/posts', (req, res)=>{
    console.log(req.body);
    let {username, content} = req.body;
    let id = uuidv4();
    posts.push({id, username, content});
    res.redirect("/posts");
});
// see posts in details.
app.get('/posts/:id', (req, res)=>{
    let {id} = req.params;
    let post = posts.find((p)=> id === p.id);
    if(post){
        res.render("singlePost.ejs", {post});
    }else{
        res.send("Id don`t match");
    }    
});
//Update the content.
app.patch("/posts/:id", (req, res)=>{
    let {id} = req.params;
    let newContent = req.body.content;
    let post = posts.find((p)=> id === p.id);
    post.content = newContent;
    res.redirect("/posts");
});

app.get("/posts/:id/edit",(req, res)=>{
   let {id} = req.params;
   let post = posts.find((p)=> id === p.id);
   console.log(post);
   res.render("edit.ejs", {post});
})

//Delet the post 
app.delete("/posts/:id", (req, res)=>{
    let {id} = req.params;
    posts = posts.filter((p)=> id !== p.id);
    res.redirect("/posts");
});

