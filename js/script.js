// Mega Menu Action
const otherLinks = document.querySelector(".other-links");

const megaMenu = document.querySelector(".mega-menu");

otherLinks.addEventListener('click', () => {
    megaMenu.classList.toggle("active-menu");
});


// Create a Function to add Clicked Class to the Selected Video 
// and Remove any clicked class form any element else.


// Animation On Scroll Powerful
const ourSkills = document.querySelector(".our-skills");
const spans = document.querySelectorAll(".the-progress span");

// Increas Numbers of Statstics Section
const nums = document.querySelectorAll(".stats .box .number");
const statstics = document.querySelector(".stats");

let countUp = false;

// Anonymous Function with Window Scroll
window.onscroll = function () {
	// Skills Section
	if (window.scrollY >= ourSkills.offsetTop - 250) {
		spans.forEach((span) => {
			span.style.width = span.dataset.width;
		});
	} else {
        spans.forEach((span) => {
			span.style.width = 0;
		});
    }
	// Statstics Section
	if (window.scrollY >= statstics.offsetTop - 250) {
		if (!countUp) {
			nums.forEach((num) => startCount(num));
		}
		countUp = true;
	}
};


function startCount(el) {
	let goal = el.dataset.goal;
	let count = setInterval(() => {
		el.textContent++;
		if (el.textContent == goal) {
			clearInterval(count);
		}
	}, 2000 / goal)
}