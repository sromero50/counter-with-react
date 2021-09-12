//import react into the bundle
import React from "react";
import ReactDOM from "react-dom";
//include bootstrap npm library into the bundle
import "bootstrap";

//include your index.scss file into the bundle
import "../styles/index.scss";

//import your own components
import Home from "./component/home.jsx";

//render your react application

let counter = 0;
setInterval(function() {
	let hours = Math.floor(counter / (60 * 60));
	let counterSix = Math.floor(hours / 10, 1);
	let counterFive = hours - Math.floor(hours / 10, 1) * 10;

	let divisor_for_minutes = counter % (60 * 60);
	let minutes = Math.floor(divisor_for_minutes / 60);
	let counterFour = Math.floor(minutes / 10, 1);
	let counterThree = minutes - Math.floor(minutes / 10, 1) * 10;

	let divisor_for_seconds = divisor_for_minutes % 60;
	let seconds = Math.ceil(divisor_for_seconds);
	let secondsCounterTwo = Math.floor(seconds / 10, 1);
	let secondsCounterOne = seconds - Math.floor(seconds / 10, 1) * 10;

	counter++;
	ReactDOM.render(
		<Home
			firstCounter={secondsCounterOne}
			secondCounter={secondsCounterTwo}
			thirdCounter={counterThree}
			forthCounter={counterFour}
			fifthCounter={counterFive}
			sixthCounter={counterSix}
		/>,
		document.querySelector("#app")
	);
}, 1000);
