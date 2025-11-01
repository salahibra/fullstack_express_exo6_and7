require('dotenv').config({path: './.env'});
const port = process.env.PORT || 3000;

const express = require('express');
const path = require('path')


const app = express();

app.use(express.static(path.join(__dirname, 'public')))
app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));

const expressLayouts = require('express-ejs-layouts');
app.use(expressLayouts);
app.set('layout', '../views/layouts/layout')


const homeRouter = require('./routes/homeRouter');
app.use('/', homeRouter);


const aboutRouter = require('./routes/aboutRouter');
app.use('/', aboutRouter);


app.listen(port, ()=>{
    console.log(`le serveur ecoute sur http:127.0.0.1:${port}`);
})