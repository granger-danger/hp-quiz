import React from 'react';
import ReactDOM from 'react-dom';
import {
	BrowserRouter as Router,
	Route, Link} from 'react-router-dom';
import SweetAlert from 'sweetalert-react';
// import $ from 'jquery';

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
	constructor() {
		super();
		this.activateSparkles = this.activateSparkles.bind(this);
	}
	activateSparkles() {
	}
	render() {
		return (
			<div>
				<div className="mask"></div>
				<div className="wrapper">
					<h1>Harry Potter Quizzes</h1>
					<div className="quizzes">
						<Link to='hogwarts-quiz' onMouseOver={this.activateSparkles}>
							<img src="./assets/sorting_hat.svg"/>
							<h3>Hogwarts House Quiz</h3>
						</Link>
						<Link to='wand-quiz'>
							<img src="./assets/wand.svg"/>
							<h3>Wand Quiz</h3>
						</Link>
						<Link to='patronus-quiz'>
							<img src="./assets/wolf.svg"/>
							<h3>Patronus Quiz</h3>
						</Link>
						<Link to='ilvermorny-quiz'>
							<img src="./assets/suitcase.svg"/>
							<h3>Ilvermorny House Quiz</h3>
						</Link>
					</div>
				</div>
			</div>
		)
	}
}

class Wands extends React.Component {
	constructor() {
		super();
		this.state = {
			length: '',
			rigidity: '',
			wood: '',
			core: ''
		}
		this.wandLength = this.wandLength.bind(this);
	}
	wandLength(e) {
		let wandSelection = e.target.id;
		const short = ['8 1/4 inches', '8 3/4 inches', '9 2/3 inches'];
		const average = ['10 1/2 inches', '10 3/9 inches', '11 5/8 inches',];
		const tall = ['12 7/8 inches', '13 1/4 inches', '14 inches'];
		const randomIndex = Math.floor(Math.random() * short.length);
		const randomWandLength = wandSelection.value[randomIndex];
		// console.log(e.target.id);
		console.log(randomWandLength);
		// this.setState = {
		// 	length: e.target.value
		// }
	}
	render() {
		return (
			<div>
				<div className="mask"></div>
				<form action="">
					<div className="mask"></div>
					<h1>Wand Choosing Quiz</h1>
					<ol>
						<li>Are you short, average, or tall?
							<ul className="choice">
								<li><input type="radio" name="wand1" id="short" onClick={this.wandLength}/><label htmlFor="short">Short</label></li>
								<li><input type="radio" name="wand1" id="average" onClick={this.wandLength}/><label htmlFor="average">Average</label></li>
								<li><input type="radio" name="wand1" id="tall" onClick={this.wandLength}/><label htmlFor="tall">Tall</label></li>
							</ul>
						</li>
						<li>Do you bend to others' opinions easily or hold fast to your beliefs?
							<ul className="choice">
								<li><input type="radio" name="wand2" id="rigid" onClick={this.slythraw}/><label htmlFor="rigid">I'm only concerned with my opinion</label></li>
								<li><input type="radio" name="wand2" id="springy" onClick={this.gryffhuff}/><label htmlFor="springy">It depends</label></li>
								<li><input type="radio" name="wand2" id="flexible" onClick={this.gryffhuff}/><label htmlFor="flexible">I'm pretty easily persuaded</label></li>
							</ul>
						</li>
						<li>What trait do you most value in a fellow colleague or student?
							<ul className="choice">
								<li><input type="radio" name="wand3" id="loyal" onClick={this.slythraw}/><label htmlFor="loyal">I'm only concerned with my opinion</label></li>
								<li><input type="radio" name="wand3" id="warrior" onClick={this.gryffhuff}/><label htmlFor="warrior">It depends</label></li>
								<li><input type="radio" name="wand3" id="intellect" onClick={this.gryffhuff}/><label htmlFor="intellect">I'm pretty easily persuaded</label></li>
							</ul>
						</li>
						<li>What outside activity do you most enjoy?
							<ul className="choice">
								<li><input type="radio" name="wand4" id="unicorn" onClick={this.slythraw}/><label htmlFor="unicorn">Swimming in a lagoon</label></li>
								<li><input type="radio" name="wand4" id="dragon" onClick={this.gryffhuff}/><label htmlFor="dragon">A bonfire</label></li>
								<li><input type="radio" name="wand4" id="phoenix" onClick={this.gryffhuff}/><label htmlFor="phoenix">Hiking in the mountains</label></li>
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
			house: {
				gryffindor: 0,
				slytherin: 0,
				hufflepuff: 0,
				ravenclaw: 0
			},
			finalHouse: null,
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
			house: {
				gryffindor: this.state.house.gryffindor + 1,
				slytherin: this.state.house.slytherin,
				hufflepuff: this.state.house.hufflepuff,
				ravenclaw: this.state.house.ravenclaw
			}
		})
	}
	slytherin() {
		this.setState({
			house: {
				slytherin: this.state.house.slytherin + 1,
				gryffindor: this.state.house.gryffindor,
				hufflepuff: this.state.house.hufflepuff,
				ravenclaw: this.state.house.ravenclaw
			}
		})
	}
	hufflepuff() {
		this.setState({
			house: {
				hufflepuff: this.state.house.hufflepuff + 1,
				gryffindor: this.state.house.gryffindor,
				slytherin: this.state.house.slytherin,
				ravenclaw: this.state.house.ravenclaw
			}
		})
	}
	ravenclaw() {
		this.setState({
			house: {
				ravenclaw: this.state.house.ravenclaw + 1,
				gryffindor: this.state.house.gryffindor,
				slytherin: this.state.house.slytherin,
				hufflepuff: this.state.house.hufflepuff
			}
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
	}
	showAlert() {

		var maxValue = 0;
		var finalHouse = null;
		var hogwarts = this.state.house;
		for (var house in hogwarts) {
			if (hogwarts[house] > maxValue) {
				maxValue = hogwarts[house];
				finalHouse = house;
			}
		}
		finalHouse = finalHouse.toUpperCase();

		this.setState({
			show: true,
			finalHouse: finalHouse
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
						text={`${this.state.finalHouse}!`}
						onConfirm={this.closeAlert}
						confirmButtonColor="#d3a625"
					/>
					<div className="moreQuizzes">
						<h2>Take another quiz...</h2>
						<div className="quizFooter">
							<Link to='wand-quiz'>
								<img src="./assets/wand.svg"/>
								<h3>Wand Quiz</h3>
							</Link>
							<Link to='patronus-quiz'>
								<img src="./assets/wolf.svg"/>
								<h3>Patronus Quiz</h3>
							</Link>
							<Link to='ilvermorny-quiz'>
								<img src="./assets/suitcase.svg"/>
								<h3>Ilvermorny House Quiz</h3>
							</Link>
						</div>
					</div>
				</form>
			</div>
		)
	}
}

ReactDOM.render(<App />, document.getElementById('app'));
