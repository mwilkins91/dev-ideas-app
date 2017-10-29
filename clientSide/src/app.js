//Load in your dependencies and components
import React from 'react';
import ReactDom from 'react-dom';

class App extends React.Component {
	constructor() {
		super();
		this.state = {
			tests: ''
		};
	}
	render() {
		return <p>{JSON.stringify(this.state.tests)}</p>;
	}
	componentDidMount() {
		fetch('/api/tests')
			.then(res => res.json())
			.then(json => this.setState({ tests: json }));
	}
}

//Render React to the Dom
ReactDom.render(<App />, document.getElementById('app'));
