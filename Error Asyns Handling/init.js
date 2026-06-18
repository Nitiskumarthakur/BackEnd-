const mongoose = require('mongoose');


// async function main(){
//     await mongoose.connect('mongodb://127.0.0.1:27017/fakeData');
// }
// main().then(()=>console.log("Database connect"))
// .catch(()=>console.log("something error in Database"));

const fakeDataSchema = mongoose.Schema({
    title:{
        type:String,
        required:true
    },
    message:{
        type:String,
        required:true
    }
});

const fakeData = mongoose.model("fakeData", fakeDataSchema);


//Create FakeData.

// const AllfakeData = [
//     {
//         title:"Bihar",
//         message:"Bihar is not for beginner"
//     },
//      {
//         title:"Up",
//         message:"Up is smallest State in India"
//     },
//      {
//         title:"Tamil Nadu",
//         message:"Tamil people are fire"
//     },
//      {
//         title:"rajashthan",
//         message:"this state are forest"
//     },
//     {
//         title:"sikkim",
//         message:"there have maltiple distict"
//     },
//      {
//         title:"himachar",
//         message:"himalchar are not mountain Area",
//     },
// ];
// fakeData.insertMany(AllfakeData);

module.exports  = fakeData;