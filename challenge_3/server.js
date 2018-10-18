const bodyParser = require('body-parser');
const express = require('express');
const app = express();
const port = 8080;
const Sequelize = require('sequelize');
const db = new Sequelize('challenge_3', 'root', null,{
	dialect:'mysql'
});


const Users = db.define('users', {
  name :Sequelize.STRING,
  email :Sequelize.STRING,
  password :Sequelize.STRING,
  line1 :Sequelize.STRING,
  line2 :Sequelize.STRING,
  city :Sequelize.STRING,
  state :Sequelize.STRING,
  ZIP :Sequelize.STRING,
  CCnumber :Sequelize.INTEGER,
  phoneNumber: Sequelize.INTEGER,
  expiredDate :Sequelize.STRING,
  CVV :Sequelize.INTEGER,
  billingZIP :Sequelize.STRING
});

Users.sync();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static('public'));

app.post('/checkout', (req,res) =>{
	Users.create().then((user) => {
		console.log(user.dataValues.id);
		res.json(user.dataValues.id);
	});
});

app.post('/form1', (req,res) => {
	const {userId,name,email,password} = req.body.states;
		Users.findById(userId)
		.then( (user) => {
			user.update({
				name: name,
				email: email,
				password: password
			}).then (() => {
				res.end();
			});
		});
});


app.post('/form2', (req,res) => {

	console.log('IN /FORM2');

	console.log(req.body);
	const {userId,line1,line2,city,state,zip,phoneNum} = req.body.states;

		Users.findById(userId)
		.then( (user) => {
			user.update({
				line1,
				line2,
				city,
				state,
				ZIP:zip,
				phoneNumber:phoneNum
			}).then (() => {
				res.end();
			});
		});

});


app.post('/form3', (req,res) => {

	console.log('IN /FORM3');

	console.log(req.body);
	const {userId,cardNum,expiredDate,CVV,billingZipCode} = req.body.states;

		Users.findById(userId)
		.then( (user) => {
			user.update({
			CCnumber: cardNum,
			expiredDate,
			CVV,
			billingZIP: billingZipCode
			}).then (() => {
				res.end();
			});
		});


});



app.listen(port, (req,res) =>  console.log(`Example app listening on port ${port}!`));