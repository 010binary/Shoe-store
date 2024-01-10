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

//dropdown
const dropdown = document.querySelector(".dropbtn");
const dropContent = document.querySelector(".dropdown-content");

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

const redir = document.querySelector(".to-signin");
const signupForm = document.querySelector(".sign-up");
const signinForm = document.querySelector(".sign-in");
const signuptext = document.querySelector(".signup__text");

const toggleForms = (showSignup) => {
    signupForm.style.display = showSignup ? 'flex' : 'none';
    signinForm.style.display = showSignup ? 'none' : 'flex';
};

redir.addEventListener('click', () => {
    toggleForms(false);
});

signuptext.addEventListener('click', () => {
    toggleForms(true);
});


