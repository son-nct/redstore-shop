import {
  renderNavbarForAll,
  renderNavbarForUser,
  renderFooter,
  renderHomeIntroduction,
  renderHomeProduct,
  renderOfferComponent,
  renderHomeTestimonial
} from "../shared/shared.js";

const header = document.getElementById("header");
const container = document.createElement("div");
container.classList.add("container");
container.id = "container";

header.appendChild(container);

/*------------------------------------------------*/

auth.onAuthStateChanged((user) => {
  if (user) {
    renderNavbarForUser();
    
  } else {

    renderNavbarForAll();
  }

  renderHomeIntroduction();

  renderHomeProduct();

  renderOfferComponent();

  renderHomeTestimonial();

  renderFooter();
});
