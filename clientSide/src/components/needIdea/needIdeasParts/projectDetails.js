import React from 'react';

export default function ProjectDetails(props) {
	if (!props.details) {
		return (
			<div className="card">
				<div className="card-header">
					<h3 className="card-header-title"> Details </h3>
				</div>
				<div className="card-content">
					<p className="content">Select a project idea to view some more details.</p>
					<p className="content">
						If you like the idea, click "Let's get started" to go to the project page,
						and get going!
					</p>
				</div>
			</div>
		);
	} else {
		return <P>Active!</P>;
	}
}
