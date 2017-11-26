import React from 'react';
import IdeaPreivew from '../../haveIdea/haveIdeaParts/ideaPreview.js';
import { Link } from 'react-router-dom';

export default function ProjectDetails(props) {
	if (!props.details) {
		return (
			<div
				id="previewCard"
				style={{ top: props.top, position: 'relative' }}
				className="card"
				onMouseEnter={props.handleMouseEnter}
				onMouseLeave={props.handleMouseLeave}
			>
				<div className="card-header">
					<h3 className="card-header-title"> Details </h3>
				</div>
				{props.previewData ? (
					<div className="card-content">
						<IdeaPreivew cardContent={true} {...props.previewData} />
						<Link
							className="getStarted button is-primary"
							to={`/startProject/${props.previewData._id}`}
						>
							Let's get started!
						</Link>
					</div>
				) : (
					<div className="card-content">
						<p className="content">
							Select a project idea to view some more details.
						</p>
						<p className="content">
							If you like the idea, click "Let's get started" to go to the project
							page, and get going!
						</p>
					</div>
				)}
			</div>
		);
	} else {
		return <P>Active!</P>;
	}
}
