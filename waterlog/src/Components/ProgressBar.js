import React, { Component } from 'react';
import '../Stylesheets/_progressBar.scss';

export default class ProgressBarComponent extends Component {
	percentage = this.props.percentage;
	constructor(props) {
		super(props);

		this.state = {
			percentage: this.percentage
		};
	}
	render() {
		return (
			<div style={{ marginLeft: '10px' }}>
				<ProgressBar percentage={this.state.percentage} />
			</div>
		);
	}
}

const ProgressBar = (props) => {
	return (
		<div>
			<div className="progress-bar">
				<Filler percentage={props.percentage} />
			</div>
			<div>
				<p style={{ textAlign: 'center' }}>{props.percentage} %</p>
			</div>
			<div>
				<p style={{ textAlign: 'center' }}> (of the total water used is being lost) </p>
			</div>
		</div>
	);
};

const Filler = (props) => {
	return <div className="filler" style={{ width: `${props.percentage}%` }} />;
};
