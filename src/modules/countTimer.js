/* eslint-disable linebreak-style */

function countTimer(deadline) {
	const timeHours = document.querySelector('#timer-hours'),
		timeMinute = document.querySelector('#timer-minutes'),
		timeSeconds = document.querySelector('#timer-seconds');

	const getTimeReamning = () => {
		const dateStop = new Date(deadline).getTime(),
			dateNow = new Date().getTime(),
			timeReamning = (dateStop - dateNow) / 1000,
			seconds = Math.floor(timeReamning % 60),
			minutes = Math.floor((timeReamning / 60) % 60),
			hours = Math.floor(timeReamning / 60 / 60);
		return { timeReamning, hours, minutes, seconds };
	};
	const updateClock = () => {
		const timer = getTimeReamning();

		timeHours.textContent = timer.hours;
		timeMinute.textContent = timer.minutes;
		timeSeconds.textContent = timer.seconds;

		if (timer.hours < 10) {
			timeHours.textContent = "0" + timer.hours;
		}
		if (timer.minute < 10) {
			timeMinute.textContent = "0" + timer.minutes;
		}
		if (timer.seconds < 10) {
			timeSeconds.textContent = "0" + timer.seconds;
		}
		if (timer.hours < 0) {
			timeHours.textContent = '00';
			timeMinute.textContent = '00';
			timeSeconds.textContent = '00';
		}

	};
	setTimeout(updateClock(), 1000);
}
export default countTimer;
