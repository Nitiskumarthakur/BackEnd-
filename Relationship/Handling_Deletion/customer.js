const {Order, Customer} = require("../models/customer.js");

const addData = async ()=>{
    let newCust = new Customer({
        name:"raj",
    });
    let newOrder = new Order({
        item:"pc",
        price:42,
    });

    newCust.order.push(newOrder);
    await newCust.save();
    await newOrder.save();
};
// addData();

