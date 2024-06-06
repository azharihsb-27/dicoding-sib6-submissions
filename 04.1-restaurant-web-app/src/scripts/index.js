import "regenerator-runtime"; /* for async await transpile */
import "../styles/main.scss";
import DATA from "../public/data/DATA.json";

document.addEventListener("DOMContentLoaded", () => {
  const btn = document.querySelector(".nav-btn");
  const navbar = document.querySelector(".navbar");

  btn.addEventListener("click", () => {
    const btnAttr = btn.getAttribute("aria-label");
    btn.setAttribute(
      "aria-label",
      btnAttr === "Open Menu" ? "Close Menu" : "Open Menu"
    );

    navbar.classList.toggle("active");
  });

  const { restaurants } = DATA;
  const displayTopKitchens = () => {
    const topKitchenContainer = document.querySelector(".top-kitchen_list");
    restaurants.map(({ id, name, pictureId, city, rating }) => {
      if (rating >= 4.6) {
        topKitchenContainer.innerHTML += `
        <div class="top-kitchen_item" key=${id}>
          <img
            src=${pictureId}
            alt="${name} Cafe"
            class="top-kitchen_item_img"
          />
          <span class="top-kitchen_item_rating">
            <i class="fas fa-star"></i>
            <p>${rating}</p>
          </span>
          <div class="top-kitchen_item_description">
            <h1 class="kitchen-name">${name}</h1>
            <p class="kitchen-city">${city}</p>
          </div>
        </div>
        `;
      }
    });
  };

  const displayAllKitchens = () => {
    const allKitchenContainer = document.querySelector(".all-kitchen_list");
    restaurants.map(({ id, name, description, pictureId, city, rating }) => {
      allKitchenContainer.innerHTML += `
        <div class="all-kitchen_item" key=${id}>
          <img
            src=${pictureId}
            alt=${name}
            class="all-kitchen_item_img"
          />
          <span class="all-kitchen_item_rating">
            <i class="fas fa-star"></i>
            <p>${rating}</p>
          </span>
          <div class="all-kitchen_item_description">
            <h1 class="kitchen-name">${name}</h1>
            <p class="kitchen-city">${city}</p>
            <p class="kitchen-description">
              ${description}
            </p>
          </div>
        </div>
    `;
    });
  };

  displayTopKitchens();
  displayAllKitchens();
});
