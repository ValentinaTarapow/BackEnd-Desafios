const express = require('express')

const app = express()

const router = require('./Desafio05.js');

app.use(express.json());
app.use(express.urlencoded({extended: true}))

app.set('view engine', 'ejs');
app.set('views', __dirname + '/views');


app.get('/', (req, res) => {
	res.render('main', { title: 'Formulario' });
});


app.use('/productos', router);


const PORT = 8080

const server = app.listen(PORT, () => console.log(`Servidor corriendo en el puerto ${PORT}`))
server.on("error", (e) => console.log(e.message))