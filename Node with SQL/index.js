const { faker } = require('@faker-js/faker'); // for fake data 
const mysql = require('mysql2');
const express = require('express');
const app = express();
const path = require("path");
const methodOverride = require('method-override');
// import { v4 as uuidv4 } from 'uuid';
const {v4:uuidv4} = require('uuid');


app.use(methodOverride("_method"));
app.use(express.urlencoded({extended:true}));
app.set("view engin", "ejs");
app.set("views", path.join(__dirname, "/views"));
app.use(express.static(path.join(__dirname, "public")));

// Database SQL work.
const connection =  mysql.createConnection({
  host: 'localhost',
  user: 'root',
  database: 'delta_app',
  password:"nitish"
});
// function  getRandomUser() {
//   return [
//     faker.string.uuid(),
//     faker.internet.username(),
//     faker.internet.email(),
//     faker.internet.password(),
//   ];
// };
// // insertion data in database
// let q = "INSERT INTO user (id, username, email, password) VALUES ?";
// let data = [];
// for(let i=0; i<=100;i++){
//     data.push(getRandomUser());
// }
// try{
//     connection.query(q, [data], (error, results)=>{
//         if(error) throw error;
//         console.log(results.length);
//     });
// }catch(error){
//     console.log("IS ERROR ",error);
// }

// connection.end();

//server
app.listen(4040,()=>console.log("server is start on the port number 4040"));
//Home route.
app.get('/', (req, res)=>{
    let q = `SELECT COUNT(*) FROM user`;
    try{
        connection.query(q, (err, results)=>{
            if(err) throw err;
            console.log(results[0]["COUNT(*)"]);
            let count = results[0]["COUNT(*)"];
            res.render("Home.ejs", {count});
        });
    }catch(err){
        console.log("Something is Wrong");
        res.send("Something is wrong !");
    }   
});
//  uses
app.get("/users", (req, res)=>{
    let q = `SELECT * FROM user`;
    try{
        connection.query(q, (err, results)=>{
            if(err) throw err;
            // console.log(results);
            res.render("showUser.ejs",{results});
        })
    }catch(err){
        console.log(err);
        res.render("Something is wrong in the Database System !");
    }
});
//edit data
app.get("/users/:id/edit", (req, res)=>{
    let {id}= req.params;
    let q = `SELECT * FROM user WHERE id='${id}'`;
    try{
        connection.query(q, (err, results)=>{
            if(err) throw err;
            console.log(results);
            // res.send(results);
            // res.send(results[0].username);
            res.render("edit.ejs", {results},);
        });
    }catch(err){
        console.log("something wrong in DB");
        res.send("Something the DB");
    }
});
app.patch("/users/:id", (req, res)=>{
    let {username, email, password}  = req.body;
    let {id} = req.params;
    let q = `SELECT * FROM user WHERE id='${id}'`;
    try{
        connection.query(q, (err, results)=>{
            if(err) throw err;
            console.log(username, email, password);
            
            if(results[0].password == password){
                let q2 = `UPDATE user SET username= ? WHERE username= ?`;
                try{
                    connection.query(q2,[username,results[0].username ], (err, results)=>{
                       if(err) throw err;
                        console.log(results);
                        res.redirect('/users');
                    });
                }catch(err){
                    console.log("line 113", err);
                }
                // console.log(results[0].username);   
            }else{
                res.send("password are wrong try again");
            }
        });
    }catch(err){
        res.send("something wrong in the database");
    }
});
//Delte
app.delete('/users/:id', (req, res)=>{
    let {id} = req.params;
    let q = `DELETE FROM user WHERE id='${id}'`;
    try{
        connection.query(q, (err, results)=>{
            if(err) throw err;
            console.log("delete the data");
            res.redirect('/users');
        });
    }catch(err){
        res.send("something wrong in the databases");
    }
});

//data upload karane ki liy.
app.get('/users/join', (req,res)=>{
    res.render('join.ejs');
})
app.post("/users", (req, res)=>{
    let {username, email, password} = req.body;
    console.log(username , email, password);
    let q = `INSERT INTO user (id,username, email, password) Values(?, ?, ?, ?)`;
    let user = [uuidv4(), username, email, password];
    try{
        connection.query(q,user, (err, results)=>{
            if(err) throw err;
            console.log("upload data")
        })
    }catch(err){
        console.log(err);
        res.send("something wrong in the databases");
    }
    res.redirect("/")
});
