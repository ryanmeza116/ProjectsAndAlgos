const ItemsController = require('../controller/items.controller'); 

module.exports = (app) => {
    app.post('/api/item', ItemsController.createItem);
    app.get('/api/items', ItemsController.getAllItems );
    app.get('/api/item/:id', ItemsController.getOneItem);
    app.put('/api/item/:id', ItemsController.updateItem);
    app.delete('/api/item/:id', ItemsController.deleteItem);
}