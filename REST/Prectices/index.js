const express = require('express');
const app = express();

const  methodOverride = require('method-override');
app.use(methodOverride('_method'))
//import { v4 as uuidv4 } from 'uuid';
const {v4:uuidv4} = require('uuid');


app.use(express.urlencoded({extended:true}));
app.use(express.json());

const path = require('path');
app.use(express.static(path.join(__dirname, "public")));
app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "views"));

app.listen(2020,()=>console.log("server in runing on the port Number 2020"));

let data =[
    {   
        id:uuidv4(),
        name:"nitish",
        phoneNumber:6205909514,
        village:"murali",
        district:"eastchamapran",
        pinCode:845417,
        state:"Bihar",
    },
    {   
        id:uuidv4(),
        name:"thakur",
        phoneNumber:6205902020,
        village:"Bhada",
        district:"Westchamapran",
        pinCode:845411,
        state:"Bihar",
    },
    {   
        id:uuidv4(),
        name:"kumar",
        phoneNumber:6205904545,
        village:"sangrampur",
        district:"eastchamapran",
        pinCode:845421,
        state:"Bihar",
    }
]

app.get('/', (req, res)=>{
    res.send("Good flow to learing the backend!")
});

app.get('/data',(req, res)=>{
    res.render("formData", {data});
});

//add data.
app.get('/form', (req, res)=>{
    res.render("form.ejs");
});
app.post('/data', (req, res)=>{
    console.log(req.body);
    let id = uuidv4();
    let {name, phoneNumber, village, district, pinCode, state} = req.body;
    data.push({id, name, phoneNumber,village, district, pinCode, state});
    res.redirect('/data');
});


//updata data.
app.get('/data/:id/edit',(req, res)=>{
    let {id} = req.params;
    let E_data = data.find((d)=> id === d.id);
    console.log(E_data);
    res.render("edit.ejs",{E_data});
});
app.patch('/data/:id/', (req, res)=>{
    let {id} = req.params;
    let {name, phoneNumber, village, district, pinCode, state} = req.body;
    //let newName = req.body.name;
    let d = data.find((d)=> id === d.id);
    d.name = name;
    d.phoneNumber = phoneNumber;
    d.village = village;
    d.district = district;
    d.pinCode = pinCode;
    d.state = state;
    res.redirect('/data');
});
//Delet 
app.delete('/data/:id', (req, res)=>{
    let {id} = req.params;
    data = data.filter((d)=> id !== d.id);
    res.redirect('/data');
})


















