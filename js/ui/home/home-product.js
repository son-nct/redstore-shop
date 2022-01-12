import { getProductDetail } from '../shared/shared.js';
class ProductComponent {
  $row;

  constructor(productList = []) {
    this.$row = document.createElement("div");
    this.$row.classList.add("row");

    for (let i = 0; i < productList.length; i++) {
      let col_4 = document.createElement("div");
      col_4.classList.add("col-4");
      col_4.addEventListener("click", getProductDetail);

      col_4.setAttribute("data-id", productList[i].id);

      let product_img = document.createElement("img");
      product_img.src = productList[i].main_img;

      let product_name = document.createElement("h4");
      product_name.innerHTML = productList[i].name;

      let rating = document.createElement("div");
      rating.classList.add("rating");

      let index = 0;
      while (index < productList[i].rating) {
        rating.innerHTML += `<i class="fa fa-star"></i>`;
        index++;
      }

      let product_price = document.createElement("p");
      product_price.innerHTML = `${productList[i].price}$`;

      col_4.appendChild(product_img);
      col_4.appendChild(product_name);
      col_4.appendChild(rating);
      col_4.appendChild(product_price);

      this.$row.appendChild(col_4);
    }
  }

  render() {
    return this.$row;
  }

}

export { ProductComponent };
