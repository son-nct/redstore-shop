class HomeCategoriesComponent {
  $container;
  $row;

  constructor(products = []) {
    this.$container = document.createElement("div");
    this.$container.classList.add("small-container");

    this.$row = document.createElement("div");
    this.$row.classList.add("row");

    for (let i = 0; i < products.length; i++) {
      let col = document.createElement("div");
      col.classList.add("col-3");

      let img = document.createElement("img");
      img.src = products[i].main_img;

      col.appendChild(img);

      this.$row.appendChild(col);
    }
  }

  render() {
    this.$container.appendChild(this.$row);
    return this.$container;
  }
}
export { HomeCategoriesComponent };
