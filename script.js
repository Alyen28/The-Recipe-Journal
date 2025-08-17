let slideIndices = [1, 1, 1, 1, 1];

const slideClasses = [
  "breakfastSlides",
  "lunchSlides",
  "dinnerSlides",
  "dessertSlides",
  "snackSlides",
];

// Initialize slideshows
document.addEventListener("DOMContentLoaded", function () {
  for (let i = 0; i < slideClasses.length; i++) {
    showSlides(1, i);
  }
});

// Next/previous controls
function plusSlides(n, no) {
  showSlides((slideIndices[no] += n), no);
}

// Show slides for a given section
function showSlides(n, no) {
  let slides = document.getElementsByClassName(slideClasses[no]);
  if (slides.length === 0) return;
  if (n > slides.length) slideIndices[no] = 1;
  if (n < 1) slideIndices[no] = slides.length;
  for (let i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  slides[slideIndices[no] - 1].style.display = "block";
  const dotClass = [
    "dot-breakfast",
    "dot-lunch",
    "dot-dinner",
    "dot-dessert",
    "dot-snacks",
  ][no];
  let dots = document.getElementsByClassName(dotClass);
  for (let i = 0; i < dots.length; i++) {
    dots[i].classList.remove("active");
  }
  if (dots.length > 0) {
    dots[slideIndices[no] - 1].classList.add("active");
  }
}

// Dot navigation
function currentSlide(n, no) {
  showSlides((slideIndices[no] = n), no);
}
