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
