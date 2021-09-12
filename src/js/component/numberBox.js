import React from "react";
import Number from "./number";
import Icono from "./icono";
import PropTypes from "prop-types";
const NumberBox = props => {
	let counter = 0;
	return setInterval(function() {
		<div className="container-fluid  row d-flex justify-content-center bg-dark numberBox ">
			<Icono />
			<div className="box">
				<h1 className="text-center"></h1>
			</div>
			<div className="box">
				<h1 className="text-center">{props.sixthCounter}</h1>
			</div>
			<div className="box">
				<h1 className="text-center">{props.fifthCounter}</h1>
			</div>
			<div className="box">
				<h1 className="text-center">{props.forthCounter}</h1>
			</div>
			<div className="box">
				<h1 className="text-center">{props.thirdCounter}</h1>
			</div>
			<div className="box">
				<h1 className="text-center">{props.secondCounter}</h1>
			</div>
			<div className="box">
				<h1 className="text-center">{props.firstCounter}</h1>
			</div>
		</div>;
		counter++;
	}, 1000);
};

NumberBox.propTypes = {
	firstCounter: PropTypes.number,
	secondCounter: PropTypes.number,
	thirdCounter: PropTypes.number,
	forthCounter: PropTypes.number,
	fifthCounter: PropTypes.number,
	sixthCounter: PropTypes.number
};

export default NumberBox;