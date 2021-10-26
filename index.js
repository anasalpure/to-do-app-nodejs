const express = require('express')
// const bodyParser = require('body-parser');
const ApiRoutes = require('./routes/apiRoutes');
require('dotenv').config();
 

const app = express()
app.use(express.urlencoded({extended: true}));
app.use(express.json()) ;

const port = process.env.PORT || 3000;

app.use('/api/v1/',ApiRoutes);

app.listen(port, () => {
    console.log(`App started! ${port}`)
})