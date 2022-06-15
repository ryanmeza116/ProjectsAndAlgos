const Item = require('../model/items.model'); // add model route in require()
console.log('Accessing Controller');
module.exports = {

    createItem: (req,res) => {
        Item.create(req.body)
        .then((newItem) => {
        res.status(201).json(newItem);
        })
        .catch((err) => {
        res.status(400).json({ message: 'Something went wrong in create', error: err });
        });
    },
    

    getAllItems : (req,res) => {
        Item.find({})
            .then((pets) => {
            res.json(pets);
            })
            .catch((err) => {
            res.status(400).json({ message: 'Something went wrong in findAll', error: err });
            });
        },

    getOneItem : (req,res) => {
        Item.findOne({ _id: req.params.id })
            .then((item) => {
            res.json(item);
    })
        .catch((err) => {
        res.status(400).json({ message: 'Something went wrong in findById', error: err });
    });
},


    updateItem : (req,res) => {
    Item.findByIdAndUpdate(req.params.id, req.body, { new: true, runValidators: true })
    .then((item) => {
    res.json(item);
    })
    .catch((err) => {
    res.status(400).json({ message: 'Something went wrong in update', error: err });
    });
},

    deleteItem : (req,res) => {
    Item.deleteOne({ _id: req.params.id })
    .then((item) => {
    res.json(item);
    })
    .catch((err) => {
    res.status(400).json({ message: 'Something went wrong in delete', error: err });
    });
},
};