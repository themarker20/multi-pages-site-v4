// Mega Menu Action
const otherLinks = document.querySelector(".other-links");

const megaMenu = document.querySelector(".mega-menu");

otherLinks.addEventListener('click', () => {
    megaMenu.classList.toggle("active-menu");
});