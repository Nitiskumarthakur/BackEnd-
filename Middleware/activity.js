const express = require('express');
const app = express();

app.listen(4040,()=>console.log('server Start'))

// app.use('/', (req, res, next)=>{
//     let {token} = req.query;
//     if(token === "abc"){
//         next();
//     }else{
//         res.send("not login Please Enter the Token_id in URL.")
//     }
// });

// Build the self middleware!
const check = (req, res, next)=>{
    let {token} = req.query;
    if(token === "abc"){
        next();
    }else{
        res.send("not login Please Enter the Token_id in URL.")
    }
};
app.get("/", check, (req, res)=>{
    res.send("Sucessfull Login, congratulations!");
})