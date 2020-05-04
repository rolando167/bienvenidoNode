const express = require('express');
const app = express();
const path = require('path');

// settings
app.set('port', 3000);
app.set('views', path.join(__dirname,'views'));
app.engine('html', require('ejs').renderFile); // usar .html pero seran procesados por ejs
app.set('view engine', 'ejs');

// middlewares

// routes
app.use(require('./routes/index'));

// static files - mostrar archivos css, img, logos, etc assets
app.use(express.static(path.join(__dirname, 'public')));

// listening the server
app.listen(app.get('port'),(req, res)=>{
	console.log('Server running at http://localhost:/', app.get('port'));
});

