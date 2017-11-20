import React from 'react';

export default function Description(props) {
	return (
		<div
			className={
				props.theDescription
					? 'fade fadeIn projectIdeaViewSection'
					: 'fade projectIdeaViewSection'
			}
		>
			<label className="label">Project Description:</label>
			<p className="indentedText">{props.theDescription}</p>
		</div>
	);
}
