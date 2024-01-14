document.addEventListener("DOMContentLoaded", function () {
    const dropdown = document.querySelector(".dropbtn");
    const dropContent = document.querySelector(".dropdown-content");
    const signupForm = document.querySelector(".sign-up");
    const signinForm = document.querySelector(".sign-in");
    const signuptext = document.querySelector(".signup__text");
    const toSignin = document.querySelector(".to-signin");

    // Display dropdown content and sign-in form on page load
    signinForm.classList.add("opened-drop");

    /**
     * Toggle login dropdown
     */
    dropdown.addEventListener("click", function () {
        signinForm.classList.toggle("opened-drop");
        dropContent.classList.toggle("hidden");
    });

    /**
     * Click outside dropdown to hide it
     */
    window.addEventListener("click", function (event) {
        if (
            !dropContent.contains(event.target) &&
            !dropdown.contains(event.target)
        ) {
            dropContent.classList.add("hidden");
        }
    });

    /**
     * Toggle between sign-in and sign-up forms
     */
    function toggleForms(showSignup) {
        signupForm.style.display = showSignup ? "flex" : "none";
        signinForm.style.display = showSignup ? "none" : "flex";
    }

    signuptext.addEventListener("click", function () {
        toggleForms(true);
    });

    toSignin.addEventListener("click", function () {
        toggleForms(false);
    });
});