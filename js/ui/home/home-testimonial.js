class TestimonialComponent {
  $container;
  $row;

  constructor(testimonialList = []) {
    

    this.$container = document.createElement("div");
    this.$container.classList.add("small-container");

    this.$row = document.createElement("div");
    this.$row.classList.add("row");

    for (let i = 0; i < 3; i++) {
      let col = document.createElement("div");
      col.classList.add("col-3");

      let i_tag = document.createElement("i");
      i_tag.classList.add("fa", "fa-user-circle");

      let content = document.createElement("p");
      content.innerHTML = testimonialList[i].content;

      let rating = document.createElement("div");
      rating.classList.add("rating");

      let count = 1;
      while (count <= testimonialList[i].rating) {
        rating.innerHTML += `<i class="fa fa-star"></i>`;
        count++;
      }

      let img = document.createElement("img");
      img.src = testimonialList[i].img;

      let name = document.createElement("h3");
      name.innerHTML = testimonialList[i].name;

      col.appendChild(i_tag);
      col.appendChild(content);
      col.appendChild(rating);
      col.appendChild(img);
      col.appendChild(name);

      this.$row.appendChild(col);
    }
  }

  render() {
      this.$container.appendChild(this.$row);
      return this.$container;
  }
}

export { TestimonialComponent }