let currentIndex = 0;
const slides = document.querySelectorAll(".slide");
const dotsContainer = document.getElementById("dots");
const prevBtn = document.getElementById("prev");
const nextBtn = document.getElementById("next");
const slidesWrapper = document.querySelector(".slides");

// Criar bolinhas dinamicamente
slides.forEach((_, i) => {
    const dot = document.createElement("button");
    if (i === 0) dot.classList.add("active");
    dot.addEventListener("click", () => {
        currentIndex = i;
        updateCarousel();
    });
    dotsContainer.appendChild(dot);
});

function updateCarousel() {
    slidesWrapper.style.transform = `translateX(-${currentIndex * 100}%)`;
    document.querySelectorAll("#dots button").forEach((dot, i) => {
        dot.classList.toggle("active", i === currentIndex);
    });
}

// Botão anterior
prevBtn.addEventListener("click", () => {
    currentIndex = (currentIndex - 1 + slides.length) % slides.length;
    updateCarousel();
});

// Botão próximo
nextBtn.addEventListener("click", () => {
    currentIndex = (currentIndex + 1) % slides.length;
    updateCarousel();
});

// Troca automática de slides
setInterval(() => {
    currentIndex = (currentIndex + 1) % slides.length;
    updateCarousel();
}, 4000);
