import animalsData from "../data/animals";
export { createSlider };

function createSlider() {
  console.log(animalsData);
  const animalsCard = animalsSlider();
  const cardAnimals = document.querySelectorAll(".card__slider");
  for (let i = 0; i < 6; i++) {
    let image = cardAnimals[i].querySelector(".card__slider-image");
    let imageFood = cardAnimals[i].querySelector(".card__food-image");
    let cardName = cardAnimals[i].querySelector(".card-content-title");
    let cardNative = cardAnimals[i].querySelector(".card__content-subtitle");
    image.src = animalsCard[i].img;
    imageFood.src = animalsCard[i].foodType;
    cardName.textContent = animalsCard[i].name;
    cardNative.textContent = animalsCard[i].native;
  }
}

function animalsSlider() {
  const animalsDesk = animalsData.slice();
  const sliderAnimals = [];
  for (let i = 0; i < 6; i++) {
    let randomIndex = random(0, animalsDesk.length);
    sliderAnimals.push(animalsDesk[randomIndex]);
    animalsDesk.splice(randomIndex, 1);
  }
  return sliderAnimals;
}

function random(min, max) {
  return Math.floor(Math.random() * (max - min) + min);
}
