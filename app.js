const express = require('express');
const app = express();
const api = require('./routes/api_routes')
const port = 3000;

app.use(express.static('./public'));

app.use(express.urlencoded({extended:false}));

app.use('/api', api);

app.use(express.Router)

app.listen(port, () => {
    console.log('Servidor Online');
})