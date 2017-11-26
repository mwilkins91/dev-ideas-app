import React from 'react';
import IdeaForm from './haveIdeaParts/ideaform.js';
import IdeaPreview from './haveIdeaParts/ideaPreview.js';

export default class HaveIdea extends React.Component {
	constructor() {
		super();
		this.state = {
			projectName: '',
			languages: ['none'],
			languagesString: '',
			description: '',
			userStory: '',
			stack: ''
		};
		this.initialState = Object.assign({}, this.state);
		this.handleChange = this.handleChange.bind(this);
		this.handleSubmit = this.handleSubmit.bind(this);
		this.handleRadioChange = this.handleRadioChange.bind(this);
		this.handleLanguageChange = this.handleLanguageChange.bind(this);
	}
	handleLanguageChange(e) {
		let languageArray = e.target.value
			.split(',')
			.map(language => language.trim())
			.filter(language => language.length > 0);

		if (languageArray.length <= 0) {
			languageArray = ['none'];
		}

		this.setState({
			languages: languageArray,
			languagesString: e.target.value
		});
	}
	handleChange(e) {
		this.setState({
			[e.target.id]: e.target.value
		});
	}
	handleSubmit(e) {
		e.preventDefault();
		fetch('/api/projects', {
			headers: {
				'Content-Type': 'application/json'
			},
			method: 'POST',
			body: JSON.stringify(Object.assign({}, this.state))
		})
			.then(res => res.json())
			.then(json => {
				console.log(json);
				this.props.refreshProjects();
				this.setState(this.initialState);
			});
	}
	handleRadioChange(e) {
		this.setState({
			[e.target.name]: e.target.value
		});
	}
	render() {
		return (
			<div className="haveIdeaPage mainPageElement">
				<div className="columns">
					<div className="column">
						<IdeaForm
							handleChange={this.handleChange}
							handleSubmit={this.handleSubmit}
							handleRadioChange={this.handleRadioChange}
							handleLanguageChange={this.handleLanguageChange}
							refreshProjects={this.props.refreshProjects}
							{...this.state}
						/>
					</div>
					<div className="column">
						<IdeaPreview {...this.state} />
					</div>
				</div>
			</div>
		);
	}
}
