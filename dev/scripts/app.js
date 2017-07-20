import React from 'react';
import ReactDOM from 'react-dom';
import {
	BrowserRouter as Router,
	Route, Link} from 'react-router-dom';
import SweetAlert from 'sweetalert-react';

// import Hogwarts from './hogwarts-quiz.js';
// import Wands from './wand-quiz.js';

class App extends React.Component {
	render() {
		return (
			<Router basename='/'>
				<div>
					<Route exact path='/' component={HomePage} />
					<Route path='/hogwarts-quiz' component={Hogwarts} />
					<Route path='/wand-quiz' component={Wands} />
				</div>
			</Router>
		)
	}
}

class HomePage extends React.Component {
	render() {
		return (
			<div>
				<div className='wrapper'>
					{/* <Route path='/hogwarts-quiz' component={Hogwarts} /> */}
					{/* <Route path='/wand-quiz' component={Wands} /> */}
					<h1>Harry Potter Quizzes</h1>
					<Link to='hogwarts-quiz'>
						<img src="./assets/sorting_hat.svg"/>
						<h3>Hogwarts House Quiz</h3>
					</Link>
					<Link to='wand-quiz'>
						<img src="./assets/wand.svg"/>
						<h3>Wand Quiz</h3>
					</Link>
				</div>
			</div>
		)
	}
}

class Wands extends React.Component {
	constructor() {
		super();
		this.state = {

		}
	}
	render() {
		return (
			<div>
				<div className="mask"></div>
				<form action="">
					<div className="mask"></div>
					<h1>Wand Choosing Quiz</h1>
					<ol>
						<li>Do you wait to cross the street until the walk signal has appeared, even if there are no cars coming?
							<ul className="choice">
								<li><input type="radio" name="hogwarts1" id="wait" onClick={this.slythraw}/><label htmlFor="wait">Wait</label></li>
								<li><input type="radio" name="hogwarts1" id="walk" onClick={this.gryffhuff}/><label htmlFor="walk">Walk</label></li>
							</ul>
						</li>
					</ol>
				</form>
			</div>
		)
	}
}

class Hogwarts extends React.Component {
	constructor() {
		super();
		this.state = {
			gryffindor: 0,
			slytherin: 0,
			hufflepuff: 0,
			ravenclaw: 0,
			show: false
		};
		this.gryffindor = this.gryffindor.bind(this);
		this.slytherin = this.slytherin.bind(this);
		this.hufflepuff = this.hufflepuff.bind(this);
		this.ravenclaw = this.ravenclaw.bind(this);
		this.slythraw = this.slythraw.bind(this);
		this.gryffhuff = this.gryffhuff.bind(this);
		this.gryffslyth = this.gryffslyth.bind(this);
		this.huffraw = this.huffraw.bind(this);
		this.gryffraw = this.gryffraw.bind(this);
		this.slythhuff = this.slythhuff.bind(this);
		this.handleSubmit = this.handleSubmit.bind(this);
		this.showAlert = this.showAlert.bind(this);
		this.closeAlert = this.closeAlert.bind(this);
	}
	gryffindor() {
		this.setState({
			gryffindor: this.state.gryffindor + 1
		})
	}
	slytherin() {
		this.setState({
			slytherin: this.state.slytherin + 1
		})
	}
	hufflepuff() {
		this.setState({
			hufflepuff: this.state.hufflepuff + 1
		})
	}
	ravenclaw() {
		this.setState({
			ravenclaw: this.state.ravenclaw + 1
		})
	}
	slythraw() {
		this.slytherin();
		this.ravenclaw();
	}
	gryffhuff() {
		this.gryffindor();
		this.hufflepuff();
	}
	gryffslyth() {
		this.gryffindor();
		this.slytherin();
	}
	huffraw() {
		this.hufflepuff();
		this.ravenclaw();
	}
	gryffraw() {
		this.gryffindor();
		this.ravenclaw();
	}
	slythhuff() {
		this.slytherin();
		this.hufflepuff();
	}
	handleSubmit(e) {
		e.preventDefault();
		// this.state(house).reduce(function(a, b){
		// 	console.log(house[a] > obj[b] ? a : b);
		// });
	}
	showAlert() {
		this.setState({
			show: true
		});
	}
	closeAlert() {
		this.setState({
			show: false
		});
	}
	render() {
		return (
			<div>
				<div className="mask"></div>
				<form action="" onSubmit={this.handleSubmit}>
					<div className="mask"></div>
					<h1>Hogwarts House Sorting Quiz</h1>
					<ol>
						<li>Do you wait to cross the street until the walk signal has appeared, even if there are no cars coming?
							<ul className="choice">
								<li><input type="radio" name="hogwarts1" id="wait" onClick={this.slythraw}/><label htmlFor="wait">Wait</label></li>
								<li><input type="radio" name="hogwarts1" id="walk" onClick={this.gryffhuff}/><label htmlFor="walk">Walk</label></li>
							</ul>
						</li>
						<li>Are you more satisfied by someone else's praise for your work or your internal knowledge of your achievement?
							<ul className="choice">
								<li><input type="radio" name="hogwarts2" id="praise" onClick={this.gryffslyth}/><label htmlFor="praise">Praise</label></li>
								<li><input type="radio" name="hogwarts2" id="self" onClick={this.huffraw}/><label htmlFor="self">Self</label></li>
							</ul>
						</li>
						<li>When you make a major life change, do you stop and consider how it might appear to others and if you need to alleviate that?
							<ul className="choice">
								<li><input type="radio" name="hogwarts3" id="yes" onClick={this.gryffhuff}/><label htmlFor="yes">Yes</label></li>
								<li><input type="radio" name="hogwarts3" id="no"onClick={this.slythraw}/><label htmlFor="no">No</label></li>
							</ul>
						</li>
						<li>Are you more likely to make a decision or pusue a course of action out of passion or reason?
							<ul className="choice">
								<li><input type="radio" name="hogwarts4" id="passion" onClick={this.gryffraw}/><label htmlFor="passion">Passion</label></li>
								<li><input type="radio" name="hogwarts4" id="reason" onClick={this.slythhuff}/><label htmlFor="reason">Reason</label></li>
							</ul>
						</li>
						<li>In school, did you procrastinate until the last minute or get your work out of the way as soon as possible?
							<ul className="choice">
								<li><input type="radio" name="hogwarts5" id="procrastinate" onClick={this.gryffhuff}/><label htmlFor="procrastinate">Procrastinate</label></li>
								<li><input type="radio" name="hogwarts5" id="asap" onClick={this.slythraw}/><label htmlFor="asap">Finish ASAP</label></li>
							</ul>
						</li>
						<li>Are you more concerned with individuals' unique experiences of the world or the overarching rules that govern society?
							<ul className="choice">
								<li><input type="radio" name="hogwarts6" id="unique" onClick={this.gryffslyth}/><label htmlFor="unique">Unique experiences</label></li>
								<li><input type="radio" name="hogwarts6" id="rules" onClick={this.huffraw}/><label htmlFor="rules">Governing rules</label></li>
							</ul>
						</li>
						<li>Friends describe you as...
							<ul className="choice">
								<li><input type="radio" name="hogwarts7" id="stubborn" onClick={this.gryffindor}/><label htmlFor="stubborn">Stubborn</label></li>
								<li><input type="radio" name="hogwarts7" id="cunning" onClick={this.slytherin}/><label htmlFor="cunning">Cunning</label></li>
								<li><input type="radio" name="hogwarts7" id="loyal" onClick={this.hufflepuff}/><label htmlFor="loyal">Loyal</label></li>
								<li><input type="radio" name="hogwarts7" id="intelligent" onClick={this.ravenclaw}/><label htmlFor="intelligent">Intelligent</label></li>
							</ul>
						</li>
					</ol>
					<input type="submit" onClick={this.showAlert}/>
					<SweetAlert 
						show={this.state.show}
						title="The Sorting Hat Says..."
						text="Gryffindor!"
						onConfirm={this.closeAlert}
						confirmButtonColor="#d3a625"
					/>
				</form>
			</div>
		)
	}
}

ReactDOM.render(<App />, document.getElementById('app'));
