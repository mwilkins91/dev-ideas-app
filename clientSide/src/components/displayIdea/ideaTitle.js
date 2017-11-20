import React from 'react';

export default function Title(props) {
	return (
		<div
			className={
				props.theTitle
					? 'fade fadeIn projectIdeaViewSection'
					: 'fade projectIdeaViewSection'
			}
		>
			<label className="label">Project Name:</label>
			<h2 className="indentedText">{props.theTitle}</h2>
		</div>
	);
}
