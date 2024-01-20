const express = require('express');
const router = express.Router();

router.get('/', (req, res)=>{
	res.render('index.html', { title:'Bienvenido SR. 😄' });
	// console.log(path.join(__dirname, 'views/index.html'));// para qu no afecte \ ó / 
});

router.get('/contact', (req, res)=>{
	res.render('contact.html', { title:'Bienvenido SR.' });
	// res.render('contact.html', { title:'Bienvenido SR.' }); // se le agrega .html 
});


module.exports = router;