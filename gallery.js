// gallery.js: Handles fullscreen image functionality for About page gallery

document.addEventListener("DOMContentLoaded", () => {
    // Get all gallery images
    const galleryImages = document.querySelectorAll(".gallery-img");
    const fullscreenContainer = document.querySelector("#fullscreen");
    const fullscreenImg = document.querySelector("#fullscreen-img");
    const closeButton = document.querySelector("#close-fullscreen");

    // Add click event to each gallery image
    galleryImages.forEach((img) => {
        img.addEventListener("click", () => {
            // Set fullscreen image source to clicked image
            fullscreenImg.src = img.src;
            fullscreenImg.alt = img.alt;
            // Show fullscreen container
            fullscreenContainer.classList.add("active");
        });
    });

    // Close fullscreen on button click
    closeButton.addEventListener("click", () => {
        fullscreenContainer.classList.remove("active");
    });

    // Close fullscreen on Escape key press
    document.addEventListener("keydown", (event) => {
        if (event.key === "Escape" && fullscreenContainer.classList.contains("active")) {
            fullscreenContainer.classList.remove("active");
        }
    });
});