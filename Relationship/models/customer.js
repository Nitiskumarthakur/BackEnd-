// Approach 2 (one to Many);
const  mongoose = require("mongoose");
const { Schema } = mongoose;
async function main(){
    await  mongoose.connect('mongodb://127.0.0.1:27017/RelationDemo');
};
main().then(()=>console.log("database connected!"))
.catch((err)=>console.log("something error"));


const orderSchema = new mongoose.Schema({
    item:String,
    price:Number
});
const customerSchema = new mongoose.Schema({
    name:String,
    order:[
        {
            type: Schema.Types.ObjectId,
            ref:'Order',
        },
    ],
});
//deletion middleware!
customerSchema.post("findOneAndDelete", async(customer)=>{
    if(customer.order.length){
        let re = await Order.deleteMany({_id: {$in:customer.order}});
        console.log(re);
    }
});

const Order = mongoose.model("Order", orderSchema);
const Customer = mongoose.model("Customer", customerSchema);
//module.exports = {Order, Customer};


//Handling Deletion in Relationship.
const delData = async()=>{
    let data = await Customer.findByIdAndDelete('6a21c61211c24e5f9773a15a');
    console.log("del: ", data);
}
delData();


//----------------------------------------------------------------//
const findCust = async ()=>{ //find cutomer data with order.
    let result = await Customer.find({}).populate('order');
    console.log(result[0]);
};
// findCust();
const addCustomer = async ()=>{
    let cust1 = new Customer({
        name:"Nitin Kumar",
    });
    let order1 = await Order.findOne({item:"samosa"});
    let order2 = await Order.findOne({item:"chips"});
    cust1.order.push(order1);
    cust1.order.push(order2);

    let res = await cust1.save();
    console.log(res);
};
// addCustomer();
const addOrder = async ()=>{
    let res = await Order.insertMany([
        {item:"samosa", price:8},
        {item:"chips", price:25},
        {item:"fruty", price:35},
        {item:"Book", price:40},
    ]);
    console.log(res);
};
// addOrder();


