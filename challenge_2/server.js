const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const port = 4568;
const fs = require('fs');





app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static('client'));

app.post('/create', (req,res) => {

	console.log('IM IN /CREATE');

});

app.listen(port, () => console.log(`App listening on port ${port}!`));



