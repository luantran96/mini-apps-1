var { BrowserRouter, Route, Link } = window.ReactRouterDOM;

class App extends React.Component {

	constructor(props) {
		super(props);
		this.moveToForm1 = this.moveToForm1.bind(this);

		this.state = {};
	};

	moveToForm1 () {

		// axios.post('/checkout', {
		//     firstName: 'Fred',
		//     lastName: 'Flintstone'
		// })
		// .then ( (response) => {
		// 	console.log('response: ',response);
		// });


	ReactDOM.render(<Form1 states = {this.state}/>, document.getElementById('app'));


	};


	render() {
		return (
		
			<div id='Container'>
				<div>
				<h1>Multistep checkout </h1>
				</div>
					<button onClick = {this.moveToForm1}>
					 Checkout
					</button>

			</div>
		

		)
	};
}



class Form1 extends React.Component {

	constructor(props) {
		super(props);

		this.state = this.props.states;

		this.state.name = 'Luan';
		this.state.email = 'abc@mail.com';
		this.state.password = 'Luan';



		this.moveToForm2 = this.moveToForm2.bind(this);
	};


	moveToForm2 () {
		ReactDOM.render(<Form2 states = {this.state} />, document.getElementById('app'));
	};


	render() {

		return (
			<div>
			<div>
			<textarea placeholder='Name'>
			</textarea>
			</div>
			<div>
			<textarea placeholder='Email'>
			</textarea>
			</div>
			<div>
			<textarea placeholder='Password'>
			</textarea>
			</div>
				<button onClick = {this.moveToForm2}>
				 Next
				</button>
			</div>
		)
	};
}



class Form2 extends React.Component {

	constructor(props) {
		super(props);

		this.state = this.props.states;

		console.log('states in Form2 props: ',this.state);

		this.state.address = {};
		this.state.address.line1 = '123';
		this.state.address.line2 = 'red St';
		this.state.address.city = 'Daly City';
		this.state.address.state = 'CA';
		this.state.address.zip = '95014';
		this.state.phoneNum = '12345';


		this.moveToForm1 = this.moveToForm1.bind(this);
		this.moveToForm3 = this.moveToForm3.bind(this);

	}

	moveToForm1 () {
		ReactDOM.render(<Form1 states = {this.state}/>, document.getElementById('app'));
	};

	moveToForm3 () {
		ReactDOM.render(<Form3 states = {this.state}/>, document.getElementById('app'));
	};

	render() {

		return (

			<div>
				<div>
					<textarea placeholder='Line 1'>
					</textarea>
				</div>
				<div>
					<textarea placeholder='Line 2'>
					</textarea>
				</div>
				<div>
					<textarea placeholder='City'>
					</textarea>
				</div>
				<div>
					<textarea placeholder='State'>
					</textarea>
				</div>

				<div>
					<textarea placeholder='ZIP'>
					</textarea>
				</div>

				<div>
					<textarea placeholder='Phone Number'>
					</textarea>
				</div>

				<button onClick = {this.moveToForm1}>
				 Back
				</button>
				<button onClick = {this.moveToForm3}>
				 Next
				</button>
			</div>

		)
	}
}


class Form3 extends React.Component {

	constructor (props) {
		super(props);
		this.state = this.props.states;

		this.state.cardNum = '12345';
		this.state.expiredDate = '10/25/2015';
		this.state.CVV = '432';
		this.state.billingZipCode = '94015';

		console.log('states in Form3:', this.state);

		this.moveToForm2 = this.moveToForm2.bind(this);
	};


	moveToForm2 () {
		ReactDOM.render(<Form2 states = {this.state} />, document.getElementById('app'));
	};

	render() {

		return (

			<div>
				<div>
					<textarea placeholder='card number'>
					</textarea>
				</div>
				<div>
					<textarea placeholder='expired date'>
					</textarea>
				</div>
				<div>
					<textarea placeholder='CVV'>
					</textarea>
				</div>
				<div>
					<textarea placeholder='billing Zip Code'>
					</textarea>
				</div>

				<button onClick = {this.moveToForm2}>
				 Back
				</button>

			</div>


		)
	}
}



ReactDOM.render(<App />, document.getElementById('app'));
