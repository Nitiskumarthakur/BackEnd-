const express = require("express");

const app = express();

app.listen(4000, ()=>console.log("Server are the Port Number 4040"));

// TO Create the Utility the Middleware!
// app.use((req, res, next)=>{
//     req.time = new Date(Date.now()).toString();
//     console.log(req.hostname, req.method, req.path, req.time);

// });
app.get('/random.text', (req, res) => {
  res.send('random.text');
});

app.get("/", (req, res,)=>{
    console.log("I am root!");
    res.send("Hi, how Like fell here!");
});

app.get("/random", (req, res)=>{
    res.send("I am random Root");
});


