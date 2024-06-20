// navigation bar
const hamburger = document.querySelector(".hamburger");
const navigation = document.querySelector(".navigation");

hamburger.addEventListener("click", () => {
  navigation.classList.toggle("active");
});

// testimonials slider
const testimonialItems = document.querySelectorAll(".testimonial-item");
const nextBtn = document.getElementById("next-button");
const prevBtn = document.getElementById("prev-button");

let id = 0;

nextBtn.addEventListener("click", () => {
  if (
    id < testimonialItems.length - 1 &&
    testimonialItems[id].classList.contains("active")
  ) {
    testimonialItems[id].classList.remove("active");
    id++;
    testimonialItems[id].classList.add("active");
    testimonialItems[id].classList.add("fade");
    setTimeout(function () {
      testimonialItems[id].classList.remove("fade");
    }, 800);
  } else return;
});

prevBtn.addEventListener("click", () => {
  if (id > 0 && testimonialItems[id].classList.contains("active")) {
    testimonialItems[id].classList.remove("active");
    id--;
    testimonialItems[id].classList.add("active");
    testimonialItems[id].classList.add("fade");
    setTimeout(function () {
      testimonialItems[id].classList.remove("fade");
    }, 800);
  } else return;
});
