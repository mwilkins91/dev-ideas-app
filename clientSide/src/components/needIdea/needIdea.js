import React from 'react';
import ProjectSummary from './needIdeasParts/projectSummary.js';
import ProjectDetails from './needIdeasParts/projectDetails.js';

export default function needIdea(props) {
	return (
		<div className="needIdeaPage">
			<h2 className="title has-text-centered">I need an Idea</h2>
			<div className="columns">
				<div className="column projectSums">
					{props.projects.map(project => (
						<ProjectSummary key={project._id} project={project} />
					))}
				</div>
				<div className="column projectDetails">
					<ProjectDetails />
				</div>
			</div>
		</div>
	);
}
