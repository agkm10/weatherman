import React, { Component } from "react";
import {getWeather} from '../../services/weatherService'
import "./EnterLocation.css";

export default class EnterLocation extends Component {
	constructor( props ) {
		super( props );

		this.state = { location: "" };

		this.handleChange = this.handleChange.bind( this );
		this.handleSubmit = this.handleSubmit.bind( this );
	}

	handleChange( event ) {
		this.setState( { location: event.target.value } );
	}

	handleSubmit( event ) {
		event.preventDefault();
		getWeather( this.state.location );
		this.setState( { location: "" } );
	}

	render() {
		return (
			<form
				className="enter-location"
				onSubmit={ this.handleSubmit }
			>
			<h1 className="app__title">WEATHERMAN</h1>
				<input
					className="enter-location__input"
					onChange={ this.handleChange }
					placeholder="London / 84601"
					type="text"
					value={ this.state.location }
				/>
				<button
					className="enter-location__submit"
				>
					Submit
				</button>
			</form>
		);
	}
}
