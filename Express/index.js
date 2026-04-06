let express = require('express');

const app = express();
// console.dir(app);

const port = 3030; // They are defined using the port number serverSide.

//When start server then call listen.
app.listen(port, ()=>console.log(`Server side is runing on the port Number ${port}`));


// Use Method donot need for Routers!

// app.use((req, res)=>{
//     console.log('New incoming request');
//     const name = "Nitish Thakur";
//     const html ="<h1>Fruits</h1> <ul><li>Mango</li><li>Lichi</li> <li>Orange</li></ul>"
//     res.send(html);
// })

// Get Method for Routers

app.get('/',(req,res)=>{
    res.send("you are conneted with root page");
});
// app.get('/home',(req,res)=>{
//     res.send("you are conneted with home page")
// });
// app.get('/contact',(req,res)=>{
//     res.send("<h1>Contact Page<h1>")
// });
 
 

//Using the Params;

// app.get("/:username",(req,res)=>{
//     console.log(req.params);
//     let {username}= req.params;
//     res.send(`<h1>Welcome to page ${username}<h1/>`);
// });

//Using the Query;
app.get("/serch",(req, res)=>{
    console.log(req.query);
    let {q} = req.query;
    if(!q){
        res.send("Note have query")
    }
    res.send(`your query is ${q}`);
})
