const express = require('express');
//const data = require('./data.json');

const app = express();
app.listen(3030, ()=>console.log('server start on the port Number 3030'));

//static file for adding css and js file.
app.use(express.static("public")); 

app.get('/insta/:username',(req, res)=>{
    let instaData = require('./data.json');
    let {username} = req.params;
    let data = instaData[username];
    console.log(data);
    res.render('instaData.ejs', {data});
})