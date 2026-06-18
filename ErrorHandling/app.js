const express = require("express");
const app = express();

const ExpressError = require('./ExpressError');

app.listen(4040, ()=>console.log("server start"));


//custome Error handling of middleware!
const check = (req, res, next)=>{
    let {token} = req.query;
    if(token === "abc"){
        res.send('congratulations');
        next();
    }
    throw new ExpressError (401, "Correct Enter using extends"); // that is defined the custom Error!
};
app.get("/app", check, (req, res)=>{
    res.send("Welcome to out page!");
});


app.get("/err", (req, res)=>{
    abc= abc;
});
app.use((err,req, res,next)=>{
    console.log("----------ERROR---------");
    let {status = 500, message="this page is the /err!" } = err;
    // //let {status, message} = err;
    // // console.log(status, message);
    res.status(status).send(message);
});


