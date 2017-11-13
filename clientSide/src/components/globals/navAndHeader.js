import React from 'react';
import { Link } from 'react-router-dom';
export default class NavAndHeader extends React.Component {
	constructor() {
		super();
		this.state = {
			mobileNavOpen: false
		};
		this.toggleNav = this.toggleNav.bind(this);
	}
	toggleNav() {
		this.setState({
			mobileNavOpen: !this.state.mobileNavOpen
		});
	}
	render() {
		return (
			<header>
				<nav className="navbar is-transparent">
					<div className="navbar-brand">
						<Link className="navbar-item" to="/">
							<img
								src="https://www.markwilkins.co/public/assets/logo.svg"
								alt="Mark Wilkins"
								width={112}
								height={28}
							/>
						</Link>
						<div className="navbar-burger burger" onClick={this.toggleNav}>
							<span />
							<span />
							<span />
						</div>
					</div>
					<div
						id="main-menu"
						className={`navbar-menu ${this.state.mobileNavOpen ? 'is-active' : null}`}
					>
						<div className="navbar-start">
							<Link className="navbar-item" to="/">
								Home
							</Link>
							<Link className="navbar-item" to="/needAnIdea">
								Need an Idea
							</Link>
							<Link className="navbar-item" to="/haveAnIdea">
								Have an Idea
							</Link>
						</div>
						<div className="navbar-end">
							<div className="navbar-item">
								<div className="field is-grouped">
									<p className="control">
										<Link className="button is-primary" to="#">
											<span className="icon">
												<i className="fa fa-sign-in" />
											</span>
											<span>Log in</span>
										</Link>
									</p>
								</div>
							</div>
						</div>
					</div>
				</nav>
			</header>
		);
	}
}
