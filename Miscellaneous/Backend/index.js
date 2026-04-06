const express = require('express');
const app = express();

app.listen(4040, ()=>console.log("Server start on the port Number 4040 "))
//Used of middle ware for reading to the post data.
app.use(express.urlencoded({extended:true})); // used for object Data.
app.use(express.json()); // used for Json Data.

app.get('/register',(req, res)=>{
    let {username, password} = req.query;
    res.send(`Stated Get response. Welcome ${username}`);
});
app.post('/register',(req, res)=>{
    let {username, password } = req.body;
    res.send(`Stated Post response. Welcome ${username}`);
});