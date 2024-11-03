document.addEventListener("DOMContentLoaded", () => {
    let currentIndex = 0;
    const images = document.querySelectorAll(".image-slider img");
    const totalImages = images.length;
    let intervalId;

    // Function to show the current image
    function showImage(index) {
        images.forEach((img, i) => {
            img.classList.toggle("active", i === index);
            img.style.opacity = i === index ? '1' : '0';
            img.style.visibility = i === index ? 'visible' : 'hidden';
        });
    }

    // Event listeners for Next and Previous buttons
    document.querySelector(".next").addEventListener("click", () => {
        currentIndex = (currentIndex + 1) % totalImages;
        showImage(currentIndex);
    });

    document.querySelector(".prev").addEventListener("click", () => {
        currentIndex = (currentIndex - 1 + totalImages) % totalImages;
        showImage(currentIndex);
    });

    // Automatic image transition
    function startSlider() {
        intervalId = setInterval(() => {
            currentIndex = (currentIndex + 1) % totalImages;
            showImage(currentIndex);
        }, 5000); // Change image every 5 seconds
    }

    // Pause on hover
    function stopSlider() {
        clearInterval(intervalId);
    }

    document.querySelector(".image-slider").addEventListener("mouseover", stopSlider);
    document.querySelector(".image-slider").addEventListener("mouseout", startSlider);

    // Keyboard navigation
    document.addEventListener("keydown", (event) => {
        if (event.key === "ArrowRight") {
            currentIndex = (currentIndex + 1) % totalImages;
            showImage(currentIndex);
        } else if (event.key === "ArrowLeft") {
            currentIndex = (currentIndex - 1 + totalImages) % totalImages;
            showImage(currentIndex);
        }
    });

    // Initialize the slider and start automatic transition
    showImage(currentIndex);
    startSlider();
});
