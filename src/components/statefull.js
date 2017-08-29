import React from 'react';


//exports will be what it imported in another file!
export default class Statefull extends React.Component {
	
	//This is part of JavaScript's "Class" feature. It allows you to set up some things for your class at the time of it's creation
	constructor() {
		super();
		this.state = {
			hello: true
		}
	}

	//I print stuff to the page
	render() {
		if(this.state.hello) {
			return(
				<p>Hello there, Onbrander! Welcome to the statefull component.</p>
			)
		} else {
			return (
				<p>Goodbye, Onbrander!</p>
			)
		}
	}
}