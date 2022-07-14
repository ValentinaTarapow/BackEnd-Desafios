const express = require('express')
const { engine: handlebars } = require('express-handlebars');

const app = express()

const router = require('./Desafio05.js');

app.use(express.json());
app.use(express.urlencoded({extended: true}))

app.engine(
	'hbs',
	handlebars({
        extname: 'hbs',
        defaultLayout: 'index.hbs',
		layoutsDir: __dirname + '/views/layouts',
		partialsDir: __dirname + '/views/partials',
	})
);

app.set('view engine', 'hbs');
app.set('views', __dirname + '/views');


app.get('/', (req, res) => {
	res.render('main', { title: 'Formulario' });
});


app.use('/productos', router);


const PORT = 8080

const server = app.listen(PORT, () => console.log(`Servidor corriendo en el puerto ${PORT}`))
server.on("error", (e) => console.log(e.message))