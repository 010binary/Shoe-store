// back to top function for logo 
const logos = document.querySelectorAll(".logo");

logos.forEach(logo => {
    logo.addEventListener("click", () => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    });
});

// Scroll functionality for the best selling section
document.addEventListener('DOMContentLoaded', function () {
    const scrollContainer = document.querySelector('.best__selling');
    const scrollContent = document.querySelector('.gallery__container');
    const scrollLeftBtn = document.querySelector('.prev');
    const scrollRightBtn = document.querySelector('.next');

    const scrollStep = 50;

    scrollLeftBtn.addEventListener('click', function () {
        scrollContent.scrollLeft -= scrollStep;
    });

    scrollRightBtn.addEventListener('click', function () {
        scrollContent.scrollLeft += scrollStep;
    });
});


const toggleIcon = document.querySelector('.toggle-icon');
const leftNav = document.querySelector('.left_nav');

toggleIcon.addEventListener('click', function () {
    leftNav.classList.toggle('active');
    if (leftNav.classList.contains('active')) {
        leftNav.style.transform = 'translateX(0)';
    } else {
        leftNav.style.transform = 'translateX(-100%)';
    }
});

// Function to check if the clicked element is inside the leftNav
function isClickedInsideNav(element) {
    return leftNav.contains(element) || element === toggleIcon;
}

// Event listener to handle clicks outside the leftNav
window.addEventListener('click', function (event) {
    if (!isClickedInsideNav(event.target)) {
        leftNav.classList.remove('active');
        // leftNav.style.transform = 'translateX(-100%)';
    }
});