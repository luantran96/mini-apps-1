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

		this.state = {};

		this.state.name = '';
		this.state.email = '';
		this.state.password = '';


		this.handleChange = this.handleChange.bind(this);
		this.moveToForm2 = this.moveToForm2.bind(this);
	};


	moveToForm2 () {

		// this.setState({
		// 	name: document.getElementById('name').value(),
		// 	email: document.getElementById('email').value(),
		// 	password: document.getElementById('password').value()
		// });

		ReactDOM.render(<Form2 states = {this.state} handleChange= {this.handleChange} />, document.getElementById('app'));
	};


	 handleChange(target) {
	 	let id = target.id;
	 	let val = target.value;

	 	console.log('target.id:', id);
	 	console.log('target.value:', val);

		    this.setState({
		    [id] : val
			});
	 }

	render() {

		return (

			<div>
			<div>
			<input type='text' id='name' placeholder='Name' onChange = {(e) => this.handleChange(e.target)} >
			</input>
			</div>
			<div>
			<input type='text' id='email' placeholder='Email' onChange = {(e) => this.handleChange(e.target)}>
			</input>
			</div>
			<div>
			<input type='password' id='password' placeholder='Password' onChange = {(e) => this.handleChange(e.target)}>
			</input>
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

		this.state.line1 = '';
		this.state.line2 = '';
		this.state.city = '';
		this.state.state = '';
		this.state.zip = '';
		this.state.phoneNum = '';


		this.moveToForm1 = this.moveToForm1.bind(this);
		this.moveToForm3 = this.moveToForm3.bind(this);
		this.handleChange = this.handleChange.bind(this);

	}

	 handleChange(target) {
	 	let id = target.id;
	 	let val = target.value;

	 	console.log('target.id:', id);
	 	console.log('target.value:', val);

		    this.setState({
		    [id] : val
			});
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
					<input type='text' id='line1' placeholder='Line 1' onChange = {(e) => this.handleChange(e.target)}>
					</input>
				</div>
				<div>
					<input type='text' id='line2' placeholder='Line 2' onChange = {(e) => this.handleChange(e.target)}>
					</input>
				</div>
				<div>
					<input type='text' id='city' placeholder='City' onChange = {(e) => this.handleChange(e.target)}>
					</input>
				</div>
				<div>
					<input type='text' id='state' placeholder='State' onChange = {(e) => this.handleChange(e.target)}>
					</input>
				</div>

				<div>
					<input type='text' id='zip' placeholder='ZIP' onChange = {(e) => this.handleChange(e.target)}>
					</input>
				</div>

				<div>
					<input type='text' id='phoneNum' placeholder='Phone Number' onChange = {(e) => this.handleChange(e.target)}>
					</input>
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
		this.handleChange = this.handleChange.bind(this);

	};

	 handleChange(target) {
	 	let id = target.id;
	 	let val = target.value;

	 	console.log('target.id:', id);
	 	console.log('target.value:', val);

		    this.setState({
		    [id] : val
			});
	 }

	moveToForm2 () {
		ReactDOM.render(<Form2 states = {this.state} />, document.getElementById('app'));
	};

	render() {

		return (

			<div>
				<div>
					<input type='text' id='cardNum' placeholder='card number' onChange = {(e) => this.handleChange(e.target)}>
					</input>
				</div>
				<div>
					<input type='text' id='expiredDate' placeholder='expired date' onChange = {(e) => this.handleChange(e.target)}>
					</input>
				</div>
				<div>
					<input type='text' id='CVV' placeholder='CVV' onChange = {(e) => this.handleChange(e.target)}>
					</input>
				</div>
				<div>
					<input type='text' id='billingZipCode' placeholder='billing Zip Code' onChange = {(e) => this.handleChange(e.target)}>
					</input>
				</div>

				<button onClick = {this.moveToForm2}>
				 Back
				</button>

			</div>


		)
	}
}



ReactDOM.render(<App />, document.getElementById('app'));
