const express = require('express');
const {render} = require('ejs');
const path = require('path');
const livereload = require('livereload');
const connectLivereload = require("connect-livereload");

const livereloadServer = livereload.createServer({exts: '[html,css,js,png,gif,jpg,php,php5,py,rb,erb,coffee,ejs]'});
const app = express();

livereloadServer.watch([path.join(__dirname, 'public'), path.join(__dirname, 'views')]);



app.use(connectLivereload());
app.use(express.static(path.join(__dirname, 'public')));

app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, '/views'));

app.get('/', (req, res) => {
    res.render('index')
})

app.listen('3000', () => {
    console.log(`App is listening on port:3000`);
})