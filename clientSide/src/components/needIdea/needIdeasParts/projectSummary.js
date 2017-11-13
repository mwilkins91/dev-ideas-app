import React from 'react';

export default function ProjectSummary(props) {
	return (
		<div className="card">
			<div className="card-header">
				<h3 className="card-header-title">{props.project.projectName}</h3>
			</div>
			<div className="card-content">
				<p className="content">{props.project.description}</p>
				<p className="content">{props.project.language}</p>
			</div>
		</div>
	);
}
