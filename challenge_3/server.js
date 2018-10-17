const bodyParser = require('body-parser');
const express = require('express');
const app = express();

const port = 8080;

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static('public'));


app.post('/checkout', (req,res) =>{

	console.log('INSIDE /CHECKOUT');
	console.log('req.body:',req.body);
	res.end();

		
});

app.listen(port, (req,res) =>  console.log(`Example app listening on port ${port}!`));