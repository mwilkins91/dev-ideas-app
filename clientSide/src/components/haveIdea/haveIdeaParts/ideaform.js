import React from 'react';

export default function IdeaForm() {
	return (
		<form action="">
			<div className="field">
				<label htmlFor="projectName" className="label">
					Project Name
				</label>
				<div className="control">
					<input
						id="projectName"
						className="input"
						type="text"
						placeholder="My Sweet JS Project"
					/>
				</div>
			</div>

			<div className="field">
				<label htmlFor="languages" className="label">
					Language
				</label>
				<div className="control has-icons-left">
					<input
						id="languages"
						className="input"
						type="text"
						placeholder="Javascript, React"
					/>
					<span className="icon is-small is-left">
						<i className="fa fa-commenting-o" />
					</span>
				</div>
			</div>

			<div className="field">
				<label htmlFor="description" className="label">
					Description
				</label>
				<div className="control has-icons-left">
					<input
						id="description"
						className="input"
						type="text"
						placeholder="A short description"
					/>
					<span className="icon is-small is-left">
						<i className="fa fa-question-circle-o" />
					</span>
				</div>
			</div>

			<div className="field">
				<label htmlFor="userStory" className="label">
					User Stories
				</label>
				<div className="control">
					<textarea id="userStory" className="textarea" placeholder="The user is able to create project ideas and upload them." />
				</div>
			</div>

            <div className="field is-grouped">
				<div className="control">
					<button className="button is-link">Submit</button>
				</div>
				<div className="control">
					<button className="button is-text">Cancel</button>
				</div>
			</div>
		</form>
	);
}
