
// Live Count Down to Spacific Date
// You Can Change Date to any date you want
let countDownDate = new Date("Dec 31, 2023 23:59:59").getTime();
// console.log(countDownDate);
let counter = setInterval(() => {
	// Get Date Now
	let dateNow = new Date().getTime();

	// Find Differance Between Now And Count Down Date
	let dateDiff = countDownDate - dateNow;
	// console.log(dateDiff);

	// Get Days Units
	// let days = Math.floor(dateDiff / 1000 / 60 / 60 / 24);
	let days = Math.floor(dateDiff / (1000 * 60 * 60 * 24));
	let hours = Math.floor((dateDiff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
	let minutes = Math.floor((dateDiff % (1000 * 60 * 60)) / (1000 * 60));
	let seconds = Math.floor((dateDiff % (1000 * 60)) / 1000 );
	
	document.querySelector(".days").innerHTML = days;
	document.querySelector(".hours").innerHTML = hours;
	document.querySelector(".minutes").innerHTML = minutes < 10 ? `0${minutes}` : minutes;
	document.querySelector(".seconds").innerHTML = seconds < 10 ? `0${seconds}` : seconds;

if (dateDiff < 0) {
	clearInterval(counter);
}

}, 1000);