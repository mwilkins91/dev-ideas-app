import React from 'react';

export default function Stack(props) {
	let printStack;
	if (props.theStack) {
		let theStack = props.theStack;
		if (theStack === 'frontEnd') {
			printStack = (
				<p className="indentedText tag">
					Front-End<i className="fa fa-laptop" />
				</p>
			);
		} else if (theStack === 'backEnd') {
			printStack = (
				<p className="indentedText tag">
					Back-End<i className="fa fa-server" />
				</p>
			);
		} else if (theStack === 'fullStack') {
			printStack = (
				<p className="indentedText tag">
					Full Stack<i className="fa fa-stack-overflow" />
				</p>
			);
		} else {
			printStack = <p className="indentedText tag">None</p>;
		}
	} else {
		printStack = <p className="indentedText tag">None</p>;
	}
	return (
		<div
			className={
				props.theStack
					? 'fade fadeIn projectIdeaViewSection'
					: 'fade projectIdeaViewSection'
			}
		>
			<label className="label">Project Scope:</label>
			{printStack}
		</div>
	);
}
