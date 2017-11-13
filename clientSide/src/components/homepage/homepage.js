import React from 'react';
import { Link } from 'react-router-dom';

export default class HomePage extends React.Component {
	constructor() {
		super();
		this.state = {
			languages: [
				'JavaScript',
				'React',
				'Python',
				'PhP',
				'C++',
				'CSS',
				'Sass',
				'Less',
				'Ruby',
				'Node.js',
				'Jade/PUG',
				'Bootstrap',
				'Bulma'
			],
			interval: null,
			index: 0
		};
		this.randomIndex = this.randomIndex.bind(this);
		this.updateIndex = this.randomIndex.bind(this);
	}
	randomIndex(min, max, lastIndex, killReps = 0) {
		let randoNum = Math.floor(Math.random() * (max - min)) + min;
		if (randoNum !== lastIndex || killReps > 1000) {
			return randoNum;
		} else {
			return this.randomIndex(min, max, lastIndex, killReps + 1);
		}
	}
	updateStateIndex() {
		this.setState({
			index: this.randomIndex(0, this.state.languages.length, this.state.index)
		});
	}
	componentDidMount() {
		let interval = setInterval(() => {
			this.updateStateIndex();
		}, 1000);
		this.setState({ interval: interval });
	}
	componentWillUnmount() {
		if (this.state.interval) {
			clearInterval(this.state.interval);
		}
	}
	render() {
		return (
			<div className="homepage">
				<div className="columns">
					<section className="column needIdea">
						<Link className="box" to="/needAnIdea">
							<section className="hero is-info">
								<div className="hero-body">
									<div className="container is-fluid">
										<h1 className="title">Need Project Ideas?</h1>
										<h2 className="subtitle">Click here to browse!</h2>
									</div>
								</div>
							</section>
							<section className="container is-fluid recentIdeasContainer content">
								<h3 className="title">Some recent ideas to get you inspired:</h3>
								<ul className="recentIdeas">
									{this.props.projects.map(project => (
										<li key={`recentIdea-${project._id}`}>{project.projectName}</li>
									))}
								</ul>
							</section>
						</Link>
					</section>
					<section className="column haveIdea">
						<Link className="box" to="/haveAnIdea">
							<section className="hero is-success">
								<div className="hero-body">
									<div className="container is-fluid">
										<h1 className="title">Got a Project Idea?</h1>
										<h2 className="subtitle">Click here to Share!</h2>
									</div>
								</div>
							</section>
							<section className="container is-fluid recentIdeasContainer content">
								<h3 className="title">
									Got an awesome{' '}
									<span className="fixedSize">
										{this.state.languages[this.state.index]}
									</span>{' '}
									project idea? We want to hear it!
								</h3>
							</section>
						</Link>
					</section>
				</div>
				<section className="createAccountCta">
					<Link className="box" to="/createAccount">
						<section className="hero is-warning">
							<div className="hero-body">
								<div className="container">
									<h1 className="title has-text-centered">Need an Account?</h1>
									<h2 className="subtitle has-text-centered">Click here!</h2>
								</div>
							</div>
						</section>
					</Link>
				</section>
			</div>
		);
	}
}
