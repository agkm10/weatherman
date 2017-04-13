import React, { Component } from "react";
import { connect } from "react-redux";

import "./App.css";

import hourglass from "./assets/hourglass.svg";

import { reset } from "./ducks/weather";

import CurrentWeather from "./components/CurrentWeather/CurrentWeather";
import EnterLocation from "./components/EnterLocation/EnterLocation";
import ErrorMessage from "./components/ErrorMessage/ErrorMessage";



class App extends Component {
	renderChildren() {
			if (this.props.error) {
				return <ErrorMessage reset={this.props.reset} />;
			}
			if (this.props.loading) {
				return <img src={this.props.hourglass} alt="loading indicator" />
			}
			if (this.props.search) {
				return <EnterLocation />
			}
			return (
				<CurrentWeather
			reset={this.props.reset}
			weather={this.props.weather}
			 />
		 );
	}
	render() {

		return (
			<div className="app">
				
				{ this.renderChildren() }
			</div>
		);
	}
}

export default connect( state => state, { reset } )( App );
