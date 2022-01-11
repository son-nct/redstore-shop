class ProductComponent {
  $row;

  constructor(productList = []) {
    this.$row = document.createElement("div");
    this.$row.classList.add("row");

    for (let i = 0; i < productList.length; i++) {
      let col_4 = document.createElement("div");
      col_4.classList.add("col-4");
      col_4.addEventListener("click", this.getProductDetail);

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

  getProductDetail = async (evt) => {
    evt.stopPropagation();

    let product = evt.target.parentElement;
    let product_id = product.getAttribute("data-id");

    const categories = [];

    await db
      .collection("categories")
      .get()
      .then((querySnapshot) => {
        querySnapshot.docs.forEach((doc) => {
          categories.push(doc.data().products);
        });
      });

    let categories_size = categories.length;

    let check = 0;
    let product_detail;

    while (!product_detail) {
      categories[check].map((item, index) => {
        if (item.id === product_id) {
          product_detail = item;

          // remove current index
          categories[check].splice(index, 1);

          let relative_list_product = [];

          let count = 0;

          let temp = index;

          // create relative product list
          while (count < 4) {
            if (temp >= categories[check].length) {
              temp = 0;
            }

            relative_list_product.push(categories[check][temp]);
            temp++;
            count++;
          }

          sessionStorage.setItem(
            "list_product_relative",
            JSON.stringify(relative_list_product)
          );
        }
      });
      check++;
    }

    sessionStorage.setItem("product_detail", JSON.stringify(product_detail));

    location = "./product_details.html";
  };
}

export { ProductComponent };
