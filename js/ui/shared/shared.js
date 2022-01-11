import { Navbar } from "../home/navbar.js";
import { HomeFooterComponent } from "../home/home-footer.js";
import { HomeCategoriesComponent } from "../home/home-categories.js";
import { HomeIntroComponent } from "../home/home-intro.js";
import { ProductComponent } from "../home/home-product.js";
import { OfferComponent } from "../home/home-offer.js";
import { TestimonialComponent } from "../home/home-testimonial.js";
import { ProductDetailComponent } from "../product_details/product_detail_component.js";
import { ProductsRelativeComponent } from "../product_details/products_relative_component.js";

export const linkLogo = "./images/logo.png";
export const cartImg = "./images/cart.png";

/**render introduction component */

const intro_title = "Give Your Fashion" + " <br /> " + "A New Style !";
const intro_content =
  `Success isn't always about greatness. It's about consistency. Consistency` +
  " <br /> " +
  `hard work gains success.
                     Greatness will come. `;
const intro_image = "./images/image1.png";
const btnContent = "Explore now &#8594";

/* ------render home offer ---------------- */
const offer_img = "./images/exclusive.png";
const offer_content = "Exclusively Available on RedStore";
const offer_title = "Smart Band 4";
const offer_description =
  "The Mi Smart Band 4 features a 39.9% larger (than Mi Band 3) AMOLED color full-touch display with adjustable brightness, so everything is clear as can be";

/* ------render home testimonial(chứng thực) ---------------- */
const testimonialList = [
  {
    name: "Sean Parker",
    content:
      "The Red Store has the best range of linens! I love their entire range of linen ginghams, and they have a wonderful curation of solid colors too. Plus, everything always arrives super quickly.",
    rating: 5,
    img: "./images/user-1.png",
  },
  {
    name: "Donny Hoang",
    content:
      "I love shopping at The Red Store. Not only can I rely on their fabrics being excellent quality, but I find their photos and descriptions to be accurate so that I can rely on getting what I expected.",
    rating: 5,
    img: "./images/user-2.png",
  },
  {
    name: "Megan Neilsen",
    content:
      "The Red Store stocks the best woven linen and merino knits. I order almost all my fabrics online - and The Red Store never lets me down. The best quality and selection.",
    rating: 5,
    img: "./images/user-3.png",
  },
];

/* ------render footer components ---------------- */

const content_col1 = {
  "title-type": "h3",
  "detail-type": "p",
  "title-content": "Download Our App",
  "detail-content": "Download App for Android and IOS mobile phone.",
  "app-logo1": "images/play-store.png",
  "app-logo2": "images/app-store.png",
};

const content_col2 = {
  "title-type": "img",
  "detail-type": "p",
  "title-content": "images/logo-white.png",
  "detail-content":
    "Our Purpose Is Sustainably Make The Pleasure and Benefits of Sport Accessible to the Many .",
};
const content_col3 = {
  "title-type": "h3",
  "detail-type": "ul",
  "title-content": "Useful Links",
  "detail-content": ["Coupons", "Blog Post", "Return Policy", "Join Affiliate"],
};
const content_col4 = {
  "title-type": "h3",
  "detail-type": "ul",
  "title-content": "Follow us",
  "detail-content": ["Facebook", "Twitter", "Instagram", "Youtube"],
  "copyright-content": "Copyright 2021 - Nguyễn Công Thái Sơn",
};
/*************************************************** */

/**Navbar for everyone */

export function renderNavbarForAll() {
  let container = document.getElementById("container");

  const navbarForAll = new Navbar(
    linkLogo,
    ["Home", "Products", "About", "Contact", "Account"],
    cartImg
  );

  container.appendChild(navbarForAll.render());
}

/**Navbar for userd signed in */

export function renderNavbarForUser() {
  let container = document.getElementById("container");

  const navbarForUser = new Navbar(
    linkLogo,
    ["Home", "Products", "About", "Contact", "Sơn Quyền"],
    cartImg
  );

  container.appendChild(navbarForUser.render());
}

export function renderHomeIntroduction() {
  let container = document.getElementById("container");

  const introduction = new HomeIntroComponent(
    intro_title,
    intro_content,
    intro_image,
    btnContent
  );

  container.appendChild(introduction.render());
}

export function renderFooter() {
  const footer = document.getElementById("footer");

  const container_footer = new HomeFooterComponent(
    content_col1,
    content_col2,
    content_col3,
    content_col4
  );

  footer.appendChild(container_footer.render());
}

export function setLoading(check) {
  const overlay = document.getElementById("overlay");
  if (check) {
    overlay.classList.remove("hidden");
  } else {
    overlay.classList.add("hidden");
  }
}

async function getFeaturedProduct() {
  const categories = [];
  await db
    .collection("categories")
    .get()
    .then((querySnapshot) => {
      querySnapshot.docs.forEach((doc) => {
        categories.push(doc.data().products);
      });
    });

  const feature_product = [];

  let indexList = 0;
  let checked = 1;
  let count = 0;
  while (count < 8) {
    feature_product.push(categories[indexList][checked - 1]);
    checked = checked + 1;
    count++;

    if (checked == 4) {
      indexList++;
      checked = 1;
    }
  }

  return feature_product;
}

async function getLatestProduct() {
  const categories = [];
  await db
    .collection("categories")
    .get()
    .then((querySnapshot) => {
      querySnapshot.docs.forEach((doc) => {
        categories.push(doc.data().products);
      });
    });

  const latest_product = [];

  let indexList = 0;
  let checked = 1;
  let count = 0;
  let latest_index = categories[indexList].length - 1;

  while (count < 8) {
    latest_product.push(categories[indexList][latest_index]);
    checked = checked + 1;
    count++;
    latest_index--;

    if (checked == 4) {
      indexList++;
      checked = 1;
      latest_index = categories[indexList].length - 1;
    }
  }

  return latest_product;
}

export function renderHomeProduct() {
  let indexList = 0;
  let count = 0;
  let checked = 1;
  const featured_product = [];

  getFeaturedProduct().then((productList) => {
    let home_feature_product = new ProductComponent(productList);

    let title = document.createElement("h2");
    title.classList.add("title");
    title.innerHTML = "Featured Products";

    const feature_product = document.getElementById("feature-product");
    feature_product.appendChild(title);
    feature_product.appendChild(home_feature_product.render());
  });

  const categories2 = getLatestProduct().then((productList) => {
    let home_latest_product = new ProductComponent(productList);

    let title = document.createElement("h2");
    title.classList.add("title");
    title.innerHTML = "Latest Products";

    const feature_product = document.getElementById("feature-product");
    feature_product.appendChild(title);
    feature_product.appendChild(home_latest_product.render());
  });
}

export function renderOfferComponent() {
  let offerComponent = new OfferComponent(
    offer_img,
    offer_content,
    offer_title,
    offer_description
  );

  const offer = document.getElementById("offer");

  offer.appendChild(offerComponent.render());
}

export function renderHomeTestimonial() {
  let testimonialComponent = new TestimonialComponent(testimonialList);

  let testimonial = document.getElementById("testimonial");

  testimonial.appendChild(testimonialComponent.render());
}


export function renderProductDetail() {
  let product_detail = document.getElementById("product-detail");
  let products_relative = document.getElementById("products-relative");
  let title_products_relative = document.getElementById(
    "title-products-relative"
  );

  let product = JSON.parse(sessionStorage.getItem("product_detail"));

  let product_info = JSON.parse(sessionStorage.getItem("product_detail"));
  let list_product_relative = JSON.parse(
    sessionStorage.getItem("list_product_relative")
  );

  let detail_component = new ProductDetailComponent(product_info);

  let products_relative_component = new ProductsRelativeComponent(
    list_product_relative
  );

  let row = document.createElement("div");
  row.classList.add("row", "row-2");

  let h2 = document.createElement("h2");
  h2.innerHTML = `Related Products`;

  let p = document.createElement("p");
  p.innerHTML = 'View more &#8594'
  p.style.cursor = 'pointer';

  row.appendChild(h2);
  row.appendChild(p);


  product_detail.appendChild(detail_component.render());
  products_relative.appendChild(row);
  products_relative.appendChild(products_relative_component.render());
  
}
