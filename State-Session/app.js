const express = require('express');
const app = express();
const path = require("path");
const session = require("express-session");
const flash = require("connect-flash");


app.set("view engine", "ejs");
app.set("views",path.join(__dirname, "views"));

app.use(
    session({
        secret:"mysupersecretstring",
        resave:false,
        saveUninitialized: true,
    })
);
app.use(flash());

app.get("/register", (req, res)=>{
    let {name ="anonymous"} = req.query;
    req.session.name = name;
    if(name === "anonymous"){
        req.flash("error", "user not Login!");
    }else{
        req.flash("success", "conratulation! user Register successfuly");
    }
    
    res.redirect("/hello");
});
app.get("/hello", (req, res)=>{
    res.locals.errorMsg = req.flash("error");
    res.locals.successMsg = req.flash("success");
    res.render("page.ejs", {name: req.session.name, msg:req.flash("success")})
})

// app.get("/reqcount", (req, res)=>{
//     if(req.session.count){
//         req.session.count++;
//     }else{
//         req.session.count = 1;
//     }
//     res.send(`your session count ${req.session.count} times`);
// })
// app.get("/",(req, res)=>{
//     res.send("Welcome to Root Page!");
// });
// app.get("/test",(req,res)=>{
//     res.send("test page!");
// });
app.listen(2020, ()=>console.log("server Start"));