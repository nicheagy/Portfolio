document.addEventListener("DOMContentLoaded", () => {
    // Capture required DOM elements
    const galleryImages = document.querySelectorAll(".gallery-img");
    const fullscreenContainer = document.querySelector("#fullscreen");
    const fullscreenImg = document.querySelector("#fullscreen-img");
    const closeButton = document.querySelector("#close-fullscreen");

    // Add click event to each gallery image
    galleryImages.forEach((img) => {
        img.addEventListener("click", () => {
            // Set fullscreen image source and alt attributes to match the clicked image
            fullscreenImg.src = img.src;
            fullscreenImg.alt = img.alt;
            // Show fullscreen container by adding the "active" class
            fullscreenContainer.classList.add("active");
        });
    });

    // Event listener to close fullscreen on button click
    closeButton.addEventListener("click", () => {
        fullscreenContainer.classList.remove("active");
    });

    // Event listener to close fullscreen on Escape key press
    document.addEventListener("keydown", (event) => {
        if (event.key === "Escape" && fullscreenContainer.classList.contains("active")) {
            fullscreenContainer.classList.remove("active");
        }
    });
});