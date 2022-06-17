const mongoose = require('mongoose');

const ItemSchema = new mongoose.Schema(
    {
        itemName : {
            type : String , 
            required : [
                true, 
                "Item name is required"
            ],
            minlength : [3, "Item name must be at least 3 characters long"],
        },
        itemDescription : {
            type : String , 
            required : [
                true, 
                "Please include a description for the item you are adding"
            ],
            minlength : [5, "Please include a description that is at least longer than 5 characters long"],
        },
        itemQuantity : {
            type : Number , 
            required : [
                true, 
                "Please enter how many of the following item have been received"
            ],
        },
        itemBrand : {
            type : String , 
            enum : ['FTP', "MST", "Dahler", "Kies", "Other"],
            required : [true, "Please select a brand"]
            
        },
        itemReceiver : {
            type : String , 
            enum : ["Ryan Meza", "Blaise Martinez", "Gary Seagrave", "Bryan Kiefer", "Josh Gonzales", "Lisa Schaffer"],
            required : [true, "Please select who received this product"]
        },
    },
    {
        timestamps : true,
    },
);

const Item = mongoose.model('Item', ItemSchema);

module.exports = Item;