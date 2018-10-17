const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const port = 4568;
const fs = require('fs');
const _ = require('underscore');



app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static('client'));
app.set('views', './views');
app.set('view engine', 'pug');

var generateCSV = (JSONdata) => {
	var result = '';
	var keys = [];

	for(var key in JSONdata) {

		if (key !== 'children') {
			result += key + ',';
			keys.push(key);

		} else {
			result += '\n';
		}

	}


	var generateCSV = (curPerson) => {

	//result += `${curPerson.firstName},${curPerson.lastName},${curPerson.county},${curPerson.city},${curPerson.role},${curPerson.sales}\n`;

	var rowData = [];

	for (var key in curPerson) {
		if(key !== 'children') {
			rowData.push(curPerson[key]);
		} else {
			rowData.push('\n');
			result += rowData.join();
		}
	}

		if(curPerson.children) {
			curPerson.children.forEach((child,idx) => {
				generateCSV(child);
			});
		}
	};

	generateCSV(JSONdata);
	return result;
};

app.post('/', (req,res) => {
	console.log('\n\n');
	console.log('INSIDE SERVER!');
	console.log(req);


	var JSONdata = JSON.parse(req.body.data);
	var CSVreport = generateCSV(JSONdata);

	console.log('result after generateCSV: \n ', CSVreport);

	// res.sendFile(__dirname + '/client/index.html');
	// res.render('index',{CSVreport});

	res.json(CSVreport);
});


app.get('/', (req,res) => {
	res.render('index');
});


app.listen(port, () => console.log(`App listening on port ${port}!`));



