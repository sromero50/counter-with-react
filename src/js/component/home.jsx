import React, { useState, useEffect } from "react";
import NumberBox from "./numberBox";

//include images into your bundle

const Home = () => {
	let [counter, setCounter] = useState(0);
	const interval = setInterval(() => {
		setCounter(counter + 1);
	}, 1000);

	useEffect(() => {
		return () => {
			clearInterval(interval);
		};
	});
	////// Reset Button////////////////////////////////////
	function reset() {
		let boton = document.querySelector("#reset");
		boton.addEventListener("click", function() {
			counter = -1;
		});
	}
	////// Stop Button////////////////////////////////////
	function stop() {
		let boton = document.querySelector("#stop");
		boton.addEventListener("click", function() {
			clearInterval(interval);
		});
	}
	////// Start Button no funciona todavia////////////////////////////////////
	// function start() {
	// 	let boton = document.querySelector("#start");
	// 	boton.addEventListener("click", function() {
	// 		startInterval();
	// 	});
	// }
	////// Divide seconds, minutes, hours ////////////////////////////////////
	let hours = Math.floor(counter / (60 * 60));
	let hourCounterTwo = Math.floor(hours / 10, 1);
	let hourCounterOne = hours - Math.floor(hours / 10, 1) * 10;

	let divideMinutes = counter % (60 * 60);
	let minutes = Math.floor(divideMinutes / 60);
	let minuteCounterTwo = Math.floor(minutes / 10, 1);
	let minuteCounterOne = minutes - Math.floor(minutes / 10, 1) * 10;

	let divideSeconds = divideMinutes % 60;
	let seconds = Math.ceil(divideSeconds);
	let secondsCounterTwo = Math.floor(seconds / 10, 1);
	let secondsCounterOne = seconds - Math.floor(seconds / 10, 1) * 10;
	////// Counter ////////////////////////////////////

	return (
		<div>
			<div>
				<NumberBox
					firstCounter={secondsCounterOne}
					secondCounter={secondsCounterTwo}
					thirdCounter={minuteCounterOne}
					forthCounter={minuteCounterTwo}
					fifthCounter={hourCounterOne}
					sixthCounter={hourCounterTwo}
				/>
			</div>
			<div>
				<button id="reset" onClick={reset}>
					Reset
				</button>
				<button id="stop" onClick={stop}>
					Stop
				</button>
				<button id="start">Start</button>
			</div>
		</div>
	);
};

export default Home;
