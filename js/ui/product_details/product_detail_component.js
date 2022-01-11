class ProductDetailComponent {
  $row;
  $main_img;
  $category_name;
  $product_name;
  $product_price;
  $product_size;
  $product_description;

  constructor(productDetail = {}) {
    this.$row = document.createElement("div");
    this.$row.classList.add("row");

    let col1 = document.createElement("div");
    col1.classList.add("col-2");

    this.$main_img = document.createElement("img");
    this.$main_img.id = "product-img";
    this.$main_img.src = productDetail.main_img;

    let small_img_row = document.createElement("div");
    small_img_row.classList.add("small-img-row");

    for (let i = 0; i < productDetail.detailed_photo.length; i++) {
      let small_img_col = document.createElement("div");
      small_img_col.classList.add("small-img-col");

      let small_img = document.createElement("img");
      small_img.classList.add("small-img");
      small_img.src = productDetail.detailed_photo[i];

      small_img.addEventListener("click", this.changeImg);

      small_img_col.appendChild(small_img);
      small_img_row.appendChild(small_img_col);
    }

    col1.appendChild(this.$main_img);
    col1.appendChild(small_img_row);

    /**------------------------------------------------------------ */

    let col2 = document.createElement("div");
    col2.classList.add("col-2");

    // this.$category_name = document.createElement('p');
    // this.$category_name.innerHTML = productDetail.category_name;

    this.$product_name = document.createElement("h1");
    this.$product_name.innerHTML = productDetail.name;

    this.$product_price = document.createElement("h4");
    this.$product_price.innerHTML = `${productDetail.price}$`;

    this.$product_size = document.createElement("select");

    let option_default = document.createElement("option");
    option_default.innerHTML = "Select Size";

    this.$product_size.appendChild(option_default);

    for (const [key, value] of Object.entries(productDetail.stock)) {
      let option = document.createElement("option");
      option.innerHTML = key;

      this.$product_size.appendChild(option);
    }

    let input_number = document.createElement("input");
    input_number.type = "number";
    input_number.value = 1;
    input_number.min = 0;

    let btn_add_to_cart = document.createElement("a");
    btn_add_to_cart.classList.add("btn");
    btn_add_to_cart.innerHTML = "Add To Cart";

    let title_description = document.createElement("h3");
    title_description.innerHTML =
      `Product Description` + `<i class="fa fa-indent"></i>`;

    this.$product_description = document.createElement("p");
    this.$product_description.innerHTML = productDetail.description;
    /**------------------------------------------------------------ */

    col2.appendChild(this.$product_name);
    col2.appendChild(this.$product_price);

    if (typeof productDetail.stock === "object") {
      col2.appendChild(this.$product_size);
    }

    let br = document.createElement("br");

    col2.appendChild(input_number);
    col2.appendChild(btn_add_to_cart);
    col2.appendChild(title_description);
    col2.appendChild(br);
    col2.appendChild(this.$product_description);

    this.$row.appendChild(col1);
    this.$row.appendChild(col2);


  }

  render() {
    return this.$row;
  }

  changeImg = ($evt) => {
    let product_img = document.getElementById("product-img");

    product_img.src = $evt.target.src;
  };
}

export { ProductDetailComponent };
