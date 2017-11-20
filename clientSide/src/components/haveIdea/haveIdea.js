import React from 'react';
import IdeaForm from './haveIdeaParts/ideaform.js';
import IdeaPreview from './haveIdeaParts/ideaPreview.js';

export default class HaveIdea extends React.Component {
	constructor() {
		super();
		this.state = {
			projectName: '',
			languages: '',
			description: '',
			userStory: ''
		};
		this.handleChange = this.handleChange.bind(this);
		this.handleSubmit = this.handleSubmit.bind(this);
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
				this.setState({
					projectName: '',
					languages: '',
					description: '',
					userStory: ''
				});
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
