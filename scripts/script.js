// back to top function for logo 
const logos = document.querySelectorAll(".logo");
const redir = document.querySelector(".to-signin");
const signupForm = document.querySelector(".sign-up");
const signinForm = document.querySelector(".sign-in");
const signuptext = document.querySelector(".signup__text");
// scroll-horizontal
const scrollContainer = document.querySelector('.best__selling');
const scrollContent = document.querySelector('.gallery__container');
const scrollLeftBtn = document.querySelector('.prev');
const scrollRightBtn = document.querySelector('.next');
//nav icon
const toggleIcon = document.querySelector('.toggle-icon');
const leftNav = document.querySelector('.left_nav');
//dropdown
const dropdown = document.querySelector(".dropbtn");
const dropContent = document.querySelector(".dropdown-content");

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

    const scrollStep = 50;

    scrollLeftBtn.addEventListener('click', function () {
        scrollContent.scrollLeft -= scrollStep;
    });

    scrollRightBtn.addEventListener('click', function () {
        scrollContent.scrollLeft += scrollStep;
    });
});



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


dropdown.addEventListener(
    'click', function () {
        dropContent.classList.toggle("opened-drop");
        if (dropContent.classList.contains("opened-drop")) {
            dropContent.style.display = 'block'
        } else {
            dropContent.style.display = 'none'
        }
    }
)



const toggleForms = (showSignup) => {
    signupForm.style.display = showSignup ? 'flex' : 'none';
    signinForm.style.display = showSignup ? 'none' : 'flex';
};

redir.addEventListener('click', (event) => {
    event.stopPropagation(); // Prevent the click event from reaching the window
    toggleForms(false);
});

signuptext.addEventListener('click', (event) => {
    event.stopPropagation(); // Prevent the click event from reaching the window
    toggleForms(true);
});

// Clicking outside the signupForm or signinForm or dropdown will hide them
window.addEventListener('click', function (event) {
    if (!signupForm.contains(event.target)) {
        signupForm.style.display = 'none';
    }
    if (!signinForm.contains(event.target)) {
        signinForm.style.display = 'none';
    }
    if (!isClickedInsideNav(event.target)) {
        leftNav.classList.remove('active');
    }
});