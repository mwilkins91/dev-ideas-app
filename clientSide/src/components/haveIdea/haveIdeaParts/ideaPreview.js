import React from 'react';
import IdeaTitle from '../../displayIdea/ideaTitle.js';
import IdeaDescription from '../../displayIdea/ideaDescription.js';
import IdeaLanguages from '../../displayIdea/ideaLanguages.js';
import IdeaUserStories from '../../displayIdea/ideaUserStories.js';
import IdeaStack from '../../displayIdea/ideaStack.js';

export default class IdeaPreview extends React.Component {
	render() {
		return (
			<div className={`${this.props.cardContent ? '' : 'box'} preview content`}>
				<IdeaTitle theTitle={this.props.projectName} />
				<IdeaStack theStack={this.props.stack} />
				<IdeaLanguages theLanguages={this.props.languages} />
				<IdeaDescription theDescription={this.props.description} />
				<IdeaUserStories theStories={this.props.userStory} />
			</div>
		);
	}
}
