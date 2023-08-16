const carousel = document.querySelector(".carousel");
const prevBtn = document.getElementById("prevBtn");
const nextBtn = document.getElementById("nextBtn");
const slideWidth = carousel.querySelector(".carousel-slide").clientWidth;

let currentIndex = 0;

function updateCarouselPosition() {
  carousel.style.transform = `translateX(-${currentIndex * slideWidth}px)`;
}

prevBtn.addEventListener("click", () => {
  currentIndex = Math.max(currentIndex - 1, 0);
  updateCarouselPosition();
});

nextBtn.addEventListener("click", () => {
  currentIndex = Math.min(currentIndex + 1, carousel.childElementCount - 1);
  updateCarouselPosition();
});