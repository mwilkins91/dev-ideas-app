import React from 'react';

export default function UserStories(props) {
	let storiesToPrint;
	if (props.theStories) {
		let storyArray = props.theStories
			.split('-')
			.map(story => story.trim())
			.filter(story => story.length > 0);
		// check if we have an empty array after removing
		// empty strings
		if (storyArray.length > 0) {
			storiesToPrint = storyArray;
		} else {
			storiesToPrint = ['none'];
		}
	} else {
		storiesToPrint = ['none'];
	}
	return (
		<div
			className={
				props.theStories
					? 'fade fadeIn projectIdeaViewSection'
					: 'fade projectIdeaViewSection'
			}
		>
			<label className="label">User Stories:</label>
			<p className="indentedText">
				{storiesToPrint.map((story, i) => <li key={`story-${i}`}>{story}</li>)}
			</p>
		</div>
	);
}
