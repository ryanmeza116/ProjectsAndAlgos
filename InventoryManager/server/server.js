const express = require('express');
const cors = require('cors')
require('./config/mongoose.config');

const app = express();
const PORT = 8000; 

app.use(express.json());
app.use(express.urlencoded({extended:true}));

app.use (
    cors({
        origin: 'http://localhost:3000'
    }),
);
// frontend orgin -- allows frontend to communicate with backend
require('./routes/items.routes')(app);
app.listen(PORT, () => {
    console.log(`Server is up and running on ${PORT}`);
});