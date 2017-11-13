import React from 'react';
import IdeaForm from './haveIdeaParts/ideaform.js';
import IdeaPreview from './haveIdeaParts/ideaPreview.js';

export default class HaveIdea extends React.Component {
	render() {
		return (
			<div className="haveIdeaPage mainPageElement">
				<div className="columns">
					<div className="column">
						<IdeaForm refreshProjects={this.props.refreshProjects}/>
					</div>
					<div className="column">
						<IdeaPreview />
					</div>
				</div>
			</div>
		);
	}
}
