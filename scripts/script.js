// back to top function for logo 
const logos = document.querySelectorAll(".logo");

// scroll-horizontal
const scrollContainer = document.querySelector('.best__selling');
const scrollContent = document.querySelector('.gallery__container');
const scrollLeftBtn = document.querySelector('.prev');
const scrollRightBtn = document.querySelector('.next');

//moblie toggle icon
const toggleIcon = document.querySelector('.toggle-icon');
const leftNav = document.querySelector('.left_nav');

/**
 * Back to top functionality
 */
logos.forEach(logo => {
    logo.addEventListener("click", () => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    });
});

/**
 * Scroll functionality for the best selling section
 */
document.addEventListener('DOMContentLoaded', function () {

    const scrollStep = 50;

    scrollLeftBtn.addEventListener('click', function () {
        scrollContent.scrollLeft -= scrollStep;
    });

    scrollRightBtn.addEventListener('click', function () {
        scrollContent.scrollLeft += scrollStep;
    });
});


/**
 * moblie navigation toggle icon 
 */
toggleIcon.addEventListener('click', function () {
    leftNav.classList.toggle('active');
    if (leftNav.classList.contains('active')) {
        leftNav.style.transform = 'translateX(0)';
    } else {
        leftNav.style.transform = 'translateX(-100%)';
    }
});

/**
 * moblie navigation toggle icon click outside to close the nav bar
 */
function isClickedInsideNav(element) {
    return leftNav.contains(element) || element === toggleIcon;
}

// Clicking outside the signupForm or signinForm or dropdown will hide them
window.addEventListener('click', function (event) {
    if (!isClickedInsideNav(event.target)) {
        leftNav.classList.remove('active');
    }
});