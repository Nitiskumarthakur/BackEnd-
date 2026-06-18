const express = require("express");
const mongoose = require('mongoose');
const app = express();
const path = require("path");
const fakeData = require("./init.js");

const ExpressError = require("./ExpressError");


async function main() {
    await mongoose.connect('mongodb://127.0.0.1:27017/fakeData');
}
main().then(() => console.log("Data base connect!"))
    .catch(() => console.log("not connection to database"));

app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "/views"));
app.use(express.urlencoded({ extended: true }));



app.get("/", (req, res, next) => {
    throw new ExpressError(403, "this page not Found");
    res.send("Welcome to our page!");
});

function asyncWrap(fn) {
    return function (req, res, next) {
        fn(req, res, next).catch((err) => next(err));
    }
}

app.get("/fakedata", async (req, res) => {
    let fakedata = await fakeData.find({});
    res.render("index.ejs", { fakedata });
});
//for post
app.get("/fakedata/post", (req, res) => {
    res.render("post.ejs")
});
// app.post("/fakedata", async (req, res, next) => {
//     try {
//         let { title, message } = req.body;
//         let newdata = new fakeData({
//             title,
//             message,
//         });
//         await newdata.save();
//         res.redirect("/fakedata");
//     } catch (err) {
//         next(err);
//     }
// });

// using of asyncWrap
app.post("/fakedata", asyncWrap(async (req, res, next) => {
    let { title, message } = req.body;
    let newdata = new fakeData({
        title,
        message,
    });
    await newdata.save();
    res.redirect("/fakedata");
}));

app.get("/fakedata/show/:id", asyncWrap(async (req, res, next) => {
   
    let { id } = req.params;
    console.log(id);
    let data = await fakeData.findById(id);
    if (!data) {
        next(new ExpressError(404, "fake_data not found")); 
    };
    res.render("show.ejs", { data });
}));

const handleValidation = (err)=>{
    console.log(err.message);
    return err;
}

app.use((err, req, res, next)=>{
    console.log(err.name);
    if(err.name === "ValidationError"){
        err = handleValidation(err);
    }
    next(err);
})

//Middleware for Error handling.
app.use((err, req, res, next) => {
    let { status = 500, message = "Something Error!" } = err;
    res.status(status).send(message);
});
app.listen(4040, () => console.log("sarver start 4040"));
