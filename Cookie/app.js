const express = require('express');
const cookieParser = require("cookie-parser");
const app = express();

app.use(cookieParser("secretCode"));

app.get("/singedcookie", (req, res)=>{
    res.cookie("MadeIn", "India", {signed:true});
    res.send("Done");
});
app.get("/verify", (req,res)=>{
    console.log(req.signedCookies);
})

app.get("/", (req, res)=>{
    // res.cookie("Name", "Nitish");
    // res.cookie("FullName", "NitishThakur");
    res.send("Hi, I am a Root page.");
});
app.get("/cookie", (req, res)=>{
    let{Name, FullName} = req.cookies;
    res.send(`Hi ${Name}. Your FullName is ${FullName}`);
});
app.listen(2020, ()=>console.log("server start!"));