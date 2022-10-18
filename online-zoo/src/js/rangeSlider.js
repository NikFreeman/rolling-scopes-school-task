import testimonials from "../data/testimonials";
import { random } from "./common";
const TESTIMONIALS_SLIDER = document.querySelector(".testimonials__row");
const TESTIMONIALS_POPUP = document.querySelector(".testimonial__popup");
const popupClose = document.querySelectorAll(".popup__close");

let currentID;
function createRangeSlider() {
  fillRangeSlider();
  const TESTIMONIALS_CARD = document.querySelectorAll(".testimonials__card");
  const inputRange = document.querySelector(".testimonials__input-range");
  let windowWidth;
  let stepTransform;
  const initResize = () => {
    windowWidth = window.innerWidth;
    stepTransform = windowWidth > 1600 ? 295 : 322;
    let max = windowWidth > 1600 ? 7 : 8;
    inputRange.setAttribute("max", max);
    window.innerWidth < 999
      ? TESTIMONIALS_CARD.forEach((x) => x.addEventListener("click", getID))
      : TESTIMONIALS_CARD.forEach((x) => x.removeEventListener("click", getID));
  };
  let newValue = function () {
    let newTransform = inputRange.value * stepTransform;
    TESTIMONIALS_SLIDER.setAttribute(
      "style",
      `transform: translateX(-${newTransform}px)`
    );
  };
  initResize();
  inputRange.addEventListener("input", newValue);
  window.addEventListener("resize", initResize);
}

function fillRangeSlider() {
  const randomTestimonials = shuffleTestimonials(testimonials);
  TESTIMONIALS_SLIDER.innerHTML = "";
  randomTestimonials.forEach((x) => {
    let strTemplate = `<div class="testimonials__card" id=${x.id}>
    <div class="testimonials__card-row">
      <div class="testimonials__card-image">
        <img
          src=${x.faceAccount}
          alt="account"/>
      </div>
      <div class="testimonials__card-content">
        <p class="testimonials__card-title">${x.author}</p>
        <div class="testimonials__card-subtitle">
          <p class="testimonial-location">
            ${x.location} •
            <span class="testimonial-time">${x.time}</span>
          </p>
        </div>
      </div>
    </div>
    <div class="testimonials__card-text">
      <p class="testimonials__card-textarea">
        ${x.content}
      </p>                
    </div>
  </div>`;
    TESTIMONIALS_SLIDER.innerHTML += strTemplate;
  });
}

function shuffleTestimonials(review) {
  let templateReview = review.slice();
  let templateTestimonials = [];
  for (let i = 0; i < templateReview.length; ) {
    let randomIndex = random(0, templateReview.length);
    templateTestimonials.push(templateReview[randomIndex]);
    templateReview.splice(randomIndex, 1);
  }
  return templateTestimonials;
}
function openPopup() {
  popupClose.forEach((x) => x.addEventListener("click", closePopup));
  const review = testimonials.find((x) => x.id === parseInt(currentID));
  const accountImage = document.querySelector(".popup__image-account");
  const authorTitle = document.querySelector(".popup__card-title");
  const location = document.querySelector(".popup-location");
  const time = document.querySelector(".popup-time");
  const textarea = document.querySelector(".popup__card-textarea");
  accountImage.src = review.faceAccount;
  authorTitle.textContent = review.author;
  location.textContent = review.location;
  time.textContent = review.time;
  textarea.textContent = review.content;
  TESTIMONIALS_POPUP.classList.add("open");
}
function getID(e) {
  console.log(e.target);
  console.log(e.currentTarget);
  let targetDiv = e.target.closest(".testimonials__card");
  console.log(targetDiv);

  currentID = e.currentTarget.getAttribute("id");

  openPopup();
}
function closePopup() {
  TESTIMONIALS_POPUP.classList.remove("open");
}
export { createRangeSlider };
