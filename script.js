const slideshow = document.getElementById('slideshow');
const slides = document.querySelectorAll('.slide');
const prevBtn = document.querySelector('.prev-btn');
const nextBtn = document.querySelector('.next-btn');
let currentSlide = 0;

function showSlide(index) {
    slides.forEach((slide) => {
        slide.classList.remove('active');
    });
    slides[index].classList.add('active');
}

function showNextSlide() {
    currentSlide = (currentSlide + 1) % slides.length;
    showSlide(currentSlide);
}

function showPrevSlide() {
    currentSlide = (currentSlide - 1 + slides.length) % slides.length;
    showSlide(currentSlide);
}

nextBtn.addEventListener('click', showNextSlide);
prevBtn.addEventListener('click', showPrevSlide);

showSlide(currentSlide);

// Add event listener to the "Crop Disease" button
document.getElementById("crop-disease-btn").addEventListener("click", function() {
    // Open Streamlit app in a new window
    window.open("http://localhost:8501", "_blank");
});


