import React from 'react';
import IdeaTitle from '../../displayIdea/ideaTitle.js';
import IdeaDescription from '../../displayIdea/ideaDescription.js';
import IdeaLanguages from '../../displayIdea/ideaLanguages.js';
import IdeaUserStories from '../../displayIdea/ideaUserStories.js';
import IdeaStack from '../../displayIdea/ideaStack.js';

export default function ProjectSummary(props) {
	return (
		<div
			onClick={() => {
				props.getPreviewData(props.project._id, props.triggerScroll);
			}}
			className={`ideaCard card ${
				props.currentlySelected === props.project._id ? 'currentlySelected' : ''
			}`}
		>
			<div className="card-header">
				<h3 className="titleCase card-header-title">{props.project.projectName}</h3>
			</div>
			<div className="card-content">
				<p className="content">{props.project.description}</p>
				<div className="evenlySpaced">
					<IdeaStack theStack={props.project.stack} />
					<IdeaLanguages theLanguages={props.project.languages} />
				</div>
			</div>
		</div>
	);
}
