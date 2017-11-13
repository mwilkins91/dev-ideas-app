import React from 'react';

export default class IdeaForm extends React.Component {
    constructor() {
        super();
        this.state = {
            projectName: '',
            languages: '',
            description: '',
            userStory: ''
        }
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }
    handleChange(e) {
        this.setState({
            [e.target.id]: e.target.value
        })
    }
    handleSubmit(e) {
        e.preventDefault();
        fetch('/api/projects', {
            headers: {
                'Content-Type': 'application/json'
            },
            method: 'POST',
            body: JSON.stringify(Object.assign({}, this.state)),
            
        })
        .then(res => res.json())
        .then(json => {
            console.log(json);
            this.props.refreshProjects();
            this.setState({
                projectName: '',
                languages: '',
                description: '',
                userStory: ''
            });
        })
    }
    render(){
        return (
            <form onSubmit={this.handleSubmit} action="">
                <div className="field">
                    <label htmlFor="projectName" className="label">
                        Project Name
                    </label>
                    <div className="control">
                        <input required
                            id="projectName"
                            className="input"
                            type="text"
                            placeholder="My Sweet JS Project"
                            onChange={this.handleChange}
                        />
                    </div>
                </div>

                <div className="field">
                    <label htmlFor="languages" className="label">
                        Language
                    </label>
                    <div className="control has-icons-left">
                        <input required
                            id="languages"
                            className="input"
                            type="text"
                            placeholder="Javascript, React"
                            onChange={this.handleChange}
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
                        <input required
                            id="description"
                            className="input"
                            type="text"
                            placeholder="A short description"
                            onChange={this.handleChange}
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
                        <textarea onChange={this.handleChange} required id="userStory" className="textarea" placeholder="The user is able to create project ideas and upload them." />
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
}
