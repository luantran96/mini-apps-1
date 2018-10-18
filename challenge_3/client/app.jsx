var { BrowserRouter, Route, Link } = window.ReactRouterDOM;

class App extends React.Component {

	constructor(props) {
		super(props);
		this.moveToForm1 = this.moveToForm1.bind(this);
		this.state = {};
		this.state.userId = null;
	};

	moveToForm1 () {

		axios.post('/checkout')
		.then ((response) => {
			console.log('response: ',response);
			this.setState({userId: response.data});
			ReactDOM.render(<Form1 states = {this.state}/>, document.getElementById('app'));
		});
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
		this.state = this.props.states || {};
		this.state.name = '';
		this.state.email = '';
		this.state.password = '';

		console.log('states in Form1: ',this.state);

		this.handleChange = this.handleChange.bind(this);
		this.moveToForm2 = this.moveToForm2.bind(this);
	};

	moveToForm2 () {

		axios.post('/form1',{
			states: this.state
		})
		.then ((response) => {
			console.log('response: ',response);
			ReactDOM.render(<Form2 states = {this.state} handleChange= {this.handleChange} />, document.getElementById('app'));
		});


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
		axios.post('/form2',{
			states: this.state
		})
		.then ((response) => {
			console.log('response: ',response);
			ReactDOM.render(<Form3 states = {this.state} handleChange= {this.handleChange} />, document.getElementById('app'));
		});

		//ReactDOM.render(<Form3 states = {this.state}/>, document.getElementById('app'));
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

		this.moveToConfirmation = this.moveToConfirmation.bind(this);
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

	moveToConfirmation () {
		axios.post('/form3',{
			states: this.state
		})
		.then ((response) => {
			console.log('response: ',response);
			ReactDOM.render(<Confirmation states = {this.state} handleChange= {this.handleChange} />, document.getElementById('app'));
		});
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

				<button onClick = {this.moveToConfirmation}>
				 Next
				</button>

			</div>


		)
	}
}

class Confirmation extends React.Component {

	constructor(props) {

		super(props);

		this.state = this.props.states;
		console.log('states in Confirmation:',this.state);
	}

	// componentDidMount() {
	// 	axios.get('/confirmation', {
	// 	    params: {
	// 	      userId: this.state.userId
	// 	    }
	// 	  })
	// 	.then ((res) => {
	// 		console.log(res);
	// 	});

	// }


	render() {
		return (
			<div>
			<h1>Confirmation Page</h1>
			<div>Name : {this.state.name}</div>
			<div>Email : {this.state.email}</div>
			<div>Password : {this.state.password}</div>
			<div>Line 1 : {this.state.line1}</div>
			<div>Line 2 : {this.state.line2}</div>
			<div>City : {this.state.city}</div>
			<div>State : {this.state.state}</div>
			<div>Zipcode : {this.state.zip}</div>
			<div>Card number : {this.state.cardNum}</div>
			<div>Expiry Date : {this.state.expiredDate}</div>
			<div>CVV : {this.state.CVV}</div>
			<div>Billing Zipcode : {this.state.billingZipCode}</div>
			</div>


		)
	}
}


ReactDOM.render(<App />, document.getElementById('app'));
