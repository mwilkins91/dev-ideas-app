//Load in your dependencies and components
import React from 'react';
import ReactDom from 'react-dom';
import { BrowserRouter, Route, Link, browserHistory } from 'react-router-dom';

import NavAndHeader from './components/globals/navAndHeader.js';
import Homepage from './components/homepage/homepage.js';
import Footer from './components/globals/footer.js';

import NeedIdea from './components/needIdea/needIdea.js';
import HaveIdea from './components/haveIdea/haveIdea.js';

class App extends React.Component {
	constructor() {
		super();
		this.state = {
			projects: []
		};
		this.getProjects = this.getProjects.bind(this);
		this.renderChildren = this.renderChildren.bind(this);
	}
	renderChildren() {
		return React.Children.map(this.props.children, child => {
			return React.cloneElement(child, Object.assign({}, this.state));
		});
	}
	render() {
		return (
			<div>
				<BrowserRouter history={browserHistory}>
					<div>
						<NavAndHeader />
						<div className="routes">
							<Route
								exact
								path="/"
								render={props => (
									<Homepage projects={this.state.projects.slice(0, 3)} />
								)}
							/>
							<Route
								path="/needAnIdea"
								render={props => <NeedIdea projects={this.state.projects} {...props} />}
							/>
							<Route path="/haveAnIdea" render={props => <HaveIdea refreshProjects={this.getProjects}/>} />
						</div>
						<Footer />
					</div>
				</BrowserRouter>
			</div>
		);
	}
	getProjects() {
		fetch('/api/projects', { method: 'GET' })
			.then(res => res.json())
			.then(json => this.setState({ projects: json }));
	}
	componentDidMount() {
		this.getProjects();
	}
}

//Render React to the Dom
ReactDom.render(<App />, document.getElementById('app'));
