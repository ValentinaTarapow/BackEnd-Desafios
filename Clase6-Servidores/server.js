const express = require('express');
const cContainer = require('./files.js');
const app = express();
const PORT = 8080;


app.get('/',(req,res) => {
    res.send('<h1 style="color=blue"> Welcome to my Express Server </h1>')
})

app.get('/products',(req,res) => {
    const productsFile = new cContainer('./products.json');
	const products = productsFile.getAll();

	res.send(products);
})

app.get('/randomProduct',(req,res) => {
    const productsFile = new cContainer('products.json');
    const products = productsFile.getAll();
    const randomId = Math.floor(Math.random() * products.length)
	res.send(products[randomId]);
})

const server = app.listen(PORT, () => {
    console.log(`Server listening on port:  ${PORT}`)
})

server.on("error", error => console.log(error));