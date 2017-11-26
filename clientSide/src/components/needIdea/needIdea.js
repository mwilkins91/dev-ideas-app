import React from 'react';
import ProjectSummary from './needIdeasParts/projectSummary.js';
import ProjectDetails from './needIdeasParts/projectDetails.js';

export default class needIdea extends React.Component {
	constructor() {
		super();
		this.state = {
			previewData: false,
			top: 0,
			currentlySelected: null
		};
		this.handleScroll = this.handleScroll.bind(this);
		this.getPreviewData = this.getPreviewData.bind(this);
		this.updateElementLocations = this.updateElementLocations.bind(this);
		this.updateElementLocations = this.updateElementLocations.bind(this);
		this.debouncedHandleScroll = this.throttle(this.handleScroll, 100);
	}
	throttle(func, wait, options) {
		let context;
		let args;
		let result;
		let timeout = null;
		let previous = 0;
		if (!options) options = {};
		let later = function() {
			previous = options.leading === false ? 0 : Date.now();
			timeout = null;
			result = func.apply(context, args);
			if (!timeout) context = args = null;
		};
		return function() {
			let now = Date.now();
			if (!previous && options.leading === false) previous = now;
			let remaining = wait - (now - previous);
			context = this;
			args = arguments;
			if (remaining <= 0 || remaining > wait) {
				if (timeout) {
					clearTimeout(timeout);
					timeout = null;
				}
				previous = now;
				result = func.apply(context, args);
				if (!timeout) context = args = null;
			} else if (!timeout && options.trailing !== false) {
				timeout = setTimeout(later, remaining);
			}
			return result;
		};
	}
	handleScroll() {
		let theCard = document.getElementById('previewCard');
		let pageWidth = window.outerWidth;
		let windowLocation = window.scrollY;
		let cardBottomLocation = windowLocation + theCard.offsetHeight;
		let columnTop = this.columnTop;
		let footerTop = this.footerTop;
		if (windowLocation > columnTop && pageWidth > 768) {
			//if we need to set the top, figure out where...
			if (footerTop - 30 > cardBottomLocation) {
				//set the top value to the top of the window
				this.setState({
					top: windowLocation - columnTop
				});
			} else if (
				this.getOffset(theCard).top + theCard.offsetHeight >
				footerTop - 30
			) {
				this.setState({
					top: footerTop - columnTop - 30 - theCard.offsetHeight
				});
			}
		} else if (this.state.top !== 0) {
			this.setState({
				top: 0
			});
		} else {
			return;
		}
	}
	getOffset(el) {
		let rect = el.getBoundingClientRect();
		let scrollLeft = window.pageXOffset || document.documentElement.scrollLeft;
		let scrollTop = window.pageYOffset || document.documentElement.scrollTop;
		return { top: rect.top + scrollTop, left: rect.left + scrollLeft };
	}
	componentDidMount() {
		this.updateElementLocations();
		window.addEventListener('scroll', this.debouncedHandleScroll);
		window.addEventListener('resize', this.debouncedHandleScroll);
	}
	componentDidUpdate() {
		this.updateElementLocations();
	}
	updateElementLocations() {
		this.columnTop = this.getOffset(document.getElementById('columnTop')).top;
		this.footerTop = this.getOffset(document.getElementById('mainFooter')).top;
	}
	getPreviewData(previewToGetId, callback = function() {}) {
		fetch(`/api/projects/${previewToGetId}`)
			.then(res => res.json())
			.then(json =>
				this.setState(
					{ previewData: json, currentlySelected: previewToGetId },
					callback
				)
			);
	}
	handleMouseEnter() {
		document.getElementsByTagName('html')[0].classList.add('noscroll');
	}
	handleMouseLeave() {
		document.getElementsByTagName('html')[0].classList.remove('noscroll');
	}
	render() {
		return (
			<div className="needIdeaPage">
				<h2 className="title titleCase has-text-centered">I need an Idea</h2>
				<div id="columnTop" className="columns">
					<div className="column projectSums">
						{this.props.projects.map(project => (
							<ProjectSummary
								getPreviewData={this.getPreviewData}
								triggerScroll={this.handleScroll}
								key={project._id}
								project={project}
								currentlySelected={this.state.currentlySelected}
							/>
						))}
					</div>
					<div className="column projectDetails">
						<ProjectDetails
							top={this.state.top}
							previewData={this.state.previewData}
							handleMouseEnter={this.handleMouseEnter}
							handleMouseLeave={this.handleMouseLeave}
						/>
					</div>
				</div>
			</div>
		);
	}
	componentWillUnmount() {
		document.getElementsByTagName('html')[0].classList.remove('noscroll');
		window.removeEventListener('scroll', this.debouncedHandleScroll);
		window.removeEventListener('resize', this.debouncedHandleScroll);
	}
}
