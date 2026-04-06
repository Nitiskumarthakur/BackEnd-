const  express = require('express');
const  app = express();
const path = require("path");

//for path
//app.set("views", path.join(__dirname, "/views"))


app.listen(3000, ()=>console.log("Server are start on the port Number 3000"))

// app.use((req, res)=>{
//     res.send("Welcome to Home page!");
// })

//Using the EJS.
app.set("view engine", "ejs");

app.get('/',(req, res)=>{
    res.render("home.ejs"); // home.ejs and home, write same work karta hai.    
});

app.get('/about', (req,res)=>{
    res.render('About');
})
app.get('/rolldice', (req, res)=>{
    let rolldiceValue = Math.floor(Math.random()*6)+1;
    res.render('rolldice.ejs', {rolldiceValue});
})
app.get('/instagram/:username',(req,res)=>{
    let flowers = ['nitsh', 'sonu', 'monu', 'thakur', 'om']
    let {username} = req.params;
    res.render('instagram.ejs', {username , flowers});
})