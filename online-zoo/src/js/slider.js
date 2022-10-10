import animalsData from "../data/animals";
import { random } from "./common";
function createSlider() {
  const CARD_LEFT = document.querySelectorAll(
    ".card__slider-left .card__slider"
  );
  const CARD_ACTIVE = document.querySelectorAll(
    ".card__slider-active .card__slider"
  );
  const CARD_RIGHT = document.querySelectorAll(
    ".card__slider-right .card__slider"
  );
  const BTN_LEFT = document.querySelector("#ellipse-left");
  const BTN_RIGHT = document.querySelector("#ellipse-right");
  const CARD_UP_LEFT = document.querySelector("#carousel-up-left");
  const CARD_UP_RIGHT = document.querySelector("#carousel-up-right");
  const CARD_UP_ACTIVE = document.querySelector("#carousel-up-active");
  const CARD_DOWN_LEFT = document.querySelector("#carousel-down-left");
  const CARD_DOWN_RIGHT = document.querySelector("#carousel-down-right");
  const CARD_DOWN_ACTIVE = document.querySelector("#carousel-down-active");
  const CAROUSEL = document.querySelectorAll(".carousel");
  fillCard(animalsRandom(), CARD_ACTIVE);
  fillCard(animalsRandom(), CARD_LEFT);
  fillCard(animalsRandom(), CARD_RIGHT);

  const move_left = () => {
    CAROUSEL.forEach((x) => x.classList.add("transition-left"));
    BTN_LEFT.removeEventListener("click", move_left);
    BTN_RIGHT.removeEventListener("click", move_right);
  };
  const move_right = () => {
    CAROUSEL.forEach((x) => x.classList.add("transition-right"));
    BTN_LEFT.removeEventListener("click", move_left);
    BTN_RIGHT.removeEventListener("click", move_right);
  };
  BTN_LEFT.addEventListener("click", move_left);
  BTN_RIGHT.addEventListener("click", move_right);

  CAROUSEL[0].addEventListener("animationend", (animationEvent) => {
    if (animationEvent.animationName === "move-left") {
      CAROUSEL.forEach((x) => x.classList.remove("transition-left"));
      CARD_UP_ACTIVE.innerHTML = CARD_UP_LEFT.innerHTML;
      CARD_DOWN_ACTIVE.innerHTML = CARD_DOWN_LEFT.innerHTML;
      fillCard(animalsRandom(), CARD_LEFT);
    } else {
      CAROUSEL.forEach((x) => x.classList.remove("transition-right"));
      CARD_UP_ACTIVE.innerHTML = CARD_UP_RIGHT.innerHTML;
      CARD_DOWN_ACTIVE.innerHTML = CARD_DOWN_RIGHT.innerHTML;
      fillCard(animalsRandom(), CARD_RIGHT);
    }

    BTN_LEFT.addEventListener("click", move_left);
    BTN_RIGHT.addEventListener("click", move_right);
  });
}

function fillCard(source, destination) {
  for (let i = 0; i < 6; i++) {
    let image = destination[i].querySelector(".card__slider-image");
    let imageFood = destination[i].querySelector(".card__food-image");
    let cardName = destination[i].querySelector(".card-content-title");
    let cardNative = destination[i].querySelector(".card__content-subtitle");
    image.src = source[i].img;
    imageFood.src = source[i].foodType;
    cardName.textContent = source[i].name;
    cardNative.textContent = source[i].native;
  }
}

function animalsRandom() {
  const animalsDesk = animalsData.slice();
  const sliderAnimals = [];
  for (let i = 0; i < 6; i++) {
    let randomIndex = random(0, animalsDesk.length);
    sliderAnimals.push(animalsDesk[randomIndex]);
    animalsDesk.splice(randomIndex, 1);
  }
  return sliderAnimals;
}

export { createSlider };
