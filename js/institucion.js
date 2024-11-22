const sliders = {};

function initializeSlider(sliderId) {
    const slides = document.querySelectorAll(`#${sliderId} .slide`);
    if (slides.length > 0) {
        sliders[sliderId] = {
            slides: slides,
            slideIndex: 0,
            intervalId: setInterval(() => nextSlide(sliderId), 5000)
        };
        slides[0].classList.add("displaySlide");
    }
}

function showSlide(sliderId, index) {
    const slider = sliders[sliderId];
    if (index >= slider.slides.length) {
        slider.slideIndex = 0;
    } else if (index < 0) {
        slider.slideIndex = slider.slides.length - 1;
    } else {
        slider.slideIndex = index;
    }

    slider.slides.forEach(slide => {
        slide.classList.remove("displaySlide");
    });
    slider.slides[slider.slideIndex].classList.add("displaySlide");
}

function prevSlide(sliderId) {
    clearInterval(sliders[sliderId].intervalId);
    showSlide(sliderId, sliders[sliderId].slideIndex - 1);
}

function nextSlide(sliderId) {
    clearInterval(sliders[sliderId].intervalId);
    showSlide(sliderId, sliders[sliderId].slideIndex + 1);
}

document.addEventListener("DOMContentLoaded", () => {
    initializeSlider("cantinaSlider");
    initializeSlider("auditorioSlider");
    initializeSlider("quimicaSlider");
    initializeSlider("informaticaSlider");
    initializeSlider("electromecanicaSlider");
    initializeSlider("bibliotecaSlider");
    initializeSlider("poloSlider");
    initializeSlider("inclusivaSlider");
    initializeSlider("salonesSlider");
});
