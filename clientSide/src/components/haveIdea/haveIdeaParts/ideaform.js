import React from 'react';

export default function IdeaForm(props) {
	return (
		<form onSubmit={props.handleSubmit} action="">
			<div className="field">
				<label htmlFor="projectName" className="label">
					Project Name
				</label>
				<div className="control">
					<input
						required
						id="projectName"
						className="input"
						type="text"
						placeholder="My Sweet JS Project"
						onChange={props.handleChange}
						value={props.projectName}
					/>
				</div>
			</div>

			<div className="field">
				<label htmlFor="languages" className="label">
					Language
				</label>
				<div className="control has-icons-left">
					<input
						required
						autoComplete="off"
						id="languages"
						className="input"
						type="text"
						placeholder="Javascript, React"
						onChange={props.handleChange}
						value={props.languages}
					/>
					<div className="control__tooltip box">
						<p>Add a comma to seperate languages</p>
					</div>
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
						required
						id="description"
						className="input"
						type="text"
						placeholder="A short description"
						onChange={props.handleChange}
						value={props.description}
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
					<textarea
						onChange={props.handleChange}
						required
						id="userStory"
						className="textarea"
						placeholder="The user is able to create project ideas and upload them."
						value={props.userStory}
					/>
					<div className="control__tooltip box">
						<p>Use " - " to denote a seperate story.</p>
					</div>
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
