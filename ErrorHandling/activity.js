const express = require("express");
const app = express();
const ExpressError = require('./ExpressError');

app.listen(4040, ()=>console.log("server start!"));

app.get("/admin", (req, res)=>{
    throw new ExpressError(403, "This page to the admin frobian!");
});

app.use((err, req, res, next)=>{
    let {status = 500, message= "not Allow"} =  err;
    res.status(status).send(message);
});