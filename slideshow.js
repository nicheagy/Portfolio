// slideshow.js: Handles slideshow functionality for About page
let slideIndex = 0;
let slides = document.getElementsByClassName("slide");
let autoSlideTimeout;

// Show the initial slide
showSlide(slideIndex);

// Start automatic slideshow
startAutoSlide();

// Function to show a specific slide
function showSlide(n) {
    // Hide all slides
    for (let i = 0; i < slides.length; i++) {
        slides[i].classList.remove("active");
    }
    // Adjust slideIndex to loop around
    slideIndex = (n >= slides.length) ? 0 : (n < 0) ? slides.length - 1 : n;
    // Show the current slide
    slides[slideIndex].classList.add("active");
}
// Function to change slide (called by prev/next buttons)
function changeSlide(n) {
    // Clear automatic slideshow timer
    clearTimeout(autoSlideTimeout);
    // Show the next/previous slide
    showSlide(slideIndex += n);
    // Restart automatic slideshow
    startAutoSlide();
}

// Function to start automatic slideshow
function startAutoSlide() {
    autoSlideTimeout = setTimeout(() => {
        showSlide(slideIndex + 1);
        startAutoSlide();
    }, 5000); // Change slide every 5 seconds
}