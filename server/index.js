const express = require('express');
const app = express();
const adminRoute = require('./routes/admin');
const userRoute = require('./routes/usuario');
const {port} = require('./config');

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.use('/', adminRoute);
app.use('/', userRoute);

app.listen(port, ()=> {
    console.log(`Servidor rodando na porta ${port}`);
})