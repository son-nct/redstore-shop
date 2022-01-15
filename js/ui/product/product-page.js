import { setAllProductToSessionStorage } from "../shared/shared.js";

class PagingComponent {
  $page_btn;
  $allProduct;
  $productListPaging;
  $curPage;

  constructor() {
    this.$allProduct = JSON.parse(sessionStorage.getItem("all-products"));
    this.$curPage = JSON.parse(sessionStorage.getItem("cur-page"));

    if (!this.$curPage) {
      this.$curPage = 1;
      sessionStorage.setItem("cur-page", JSON.stringify(this.$curPage));
    }

    // console.log($this.$curPage)

    let productSize = this.$allProduct.length;

    let number_btn = Math.ceil(productSize / 16);

    this.$page_btn = document.createElement("div");
    this.$page_btn.classList.add("page-btn");

    for (let i = 1; i <= number_btn; i++) {
      let span = document.createElement("span");
      span.innerHTML = i;

      if (i == this.$curPage) {
        span.classList.toggle("active");
        span.style.cursor = "default";
      }

      span.addEventListener("click", this.productListPaging);

      this.$page_btn.appendChild(span);
    }

    let startIndex = (this.$curPage - 1) * 12;
    let endIndex = this.$curPage * 12;

    sessionStorage.setItem(
      "product_list_paging",
      JSON.stringify(this.$allProduct.slice(startIndex, endIndex))
    );
  }

  render() {
    return this.$page_btn;
  }

  productListPaging = ($evt) => {
    this.$curPage = parseInt($evt.target.textContent);

    sessionStorage.setItem("cur-page", JSON.stringify(this.$curPage));

    location.reload();
  };
}

export { PagingComponent };
