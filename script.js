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

// Conversor
const volumeFactors = {
  ml: 1,
  cup: 240,
  tbsp: 15,
  tsp: 5,
  oz: 29.5735,
};

const weightFactors = {
  g: 1,
  lb: 453.592,
  oz: 28.3495,
};

const fromUnit = document.getElementById("fromUnit");
const toUnit = document.getElementById("toUnit");
const inputs = document.querySelectorAll("#conversor-child input");

if (fromUnit && toUnit && inputs.length >= 2) {
  inputs[0].addEventListener("input", convert);
  fromUnit.addEventListener("change", convert);
  toUnit.addEventListener("change", convert);
}

function convert() {
  const value = parseFloat(inputs[0].value);
  const from = fromUnit.value;
  const to = toUnit.value;

  if (isNaN(value) || !from || !to) {
    inputs[1].value = "";
    return;
  }

  if (volumeFactors[from] && volumeFactors[to]) {
    const valueInML = value * volumeFactors[from];
    const result = valueInML / volumeFactors[to];
    inputs[1].value = result;
  } else if (weightFactors[from] && weightFactors[to]) {
    const valueInG = value * weightFactors[from];
    const result = valueInG / weightFactors[to];
    inputs[1].value = result;
  } else {
    inputs[1].value = "N/A";
  }
}
