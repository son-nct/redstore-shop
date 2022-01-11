class HomeFooterComponent {
  $container;
  $row;
  $footer_col_1;
  $footer_col_2;
  $footer_col_3;
  $footer_col_4;
  $hr;
  $copyright

  constructor(content1 = {}, content2 = {}, content3 = {}, content4 = {}) {
    this.$container = document.createElement("div");
    this.$container.classList.add("container");

    this.$row = document.createElement("div");
    this.$row.classList.add("row");

    // create column 1 and append content
    this.$footer_col_1 = document.createElement("div");
    this.$footer_col_1.classList.add("footer-col-1");
    this.$row.appendChild(this.$footer_col_1);

    let title_footer1 = document.createElement(content1["title-type"]);
    title_footer1.innerHTML = content1["title-content"];
    let detail_footer1 = document.createElement(content1["detail-type"]);
    detail_footer1.innerHTML = content1["detail-content"];

    let app_logo = document.createElement('div');
    app_logo.classList.add('app-logo');

    let img_chplay = document.createElement('img');
    img_chplay.src =  content1["app-logo1"];

    let img_appstore = document.createElement('img');
    img_appstore.src =  content1["app-logo2"];

    app_logo.appendChild(img_chplay);
    app_logo.appendChild(img_appstore);

    this.$footer_col_1.appendChild(title_footer1);
    this.$footer_col_1.appendChild(detail_footer1);
    this.$footer_col_1.appendChild(app_logo);


    // create column 2 and append content
    this.$footer_col_2 = document.createElement("div");
    this.$footer_col_2.classList.add("footer-col-2");
    this.$row.appendChild(this.$footer_col_2);

    let img_footer2 = document.createElement(content2["title-type"]);
    img_footer2.src = content2["title-content"];
    let detail_footer2 = document.createElement(content2["detail-type"]);
    detail_footer2.innerHTML = content2["detail-content"];

    this.$footer_col_2.appendChild(img_footer2);
    this.$footer_col_2.appendChild(detail_footer2);

   
    // create column 3 and append content
    this.$footer_col_3 = document.createElement("div");
    this.$footer_col_3.classList.add("footer-col-3");
    this.$row.appendChild(this.$footer_col_3);

    let title_footer3 = document.createElement(content3["title-type"]);
    title_footer3.innerHTML = content3["title-content"];
    let detail_footer3 = document.createElement(content3["detail-type"]);

    content3["detail-content"].forEach((item, index) => {
      let li = document.createElement("li");
      li.innerHTML = item;
      detail_footer3.appendChild(li);
    });

    this.$footer_col_3.appendChild(title_footer3);
    this.$footer_col_3.appendChild(detail_footer3);

   

    // create column 4 and append content
    this.$footer_col_4 = document.createElement("div");
    this.$footer_col_4.classList.add("footer-col-4");
    this.$row.appendChild(this.$footer_col_4);

    let title_footer4 = document.createElement(content4["title-type"]);
    title_footer4.innerHTML = content4["title-content"];
    let detail_footer4 = document.createElement(content4["detail-type"]);
    content4["detail-content"].forEach((item, index) => {
      let li = document.createElement("li");
      li.innerHTML = item;
      detail_footer4.appendChild(li);
    });

    this.$footer_col_4.appendChild(title_footer4);
    this.$footer_col_4.appendChild(detail_footer4);

    //create hr tag and copyright content
    this.$hr = document.createElement("hr");
    this.$copyright = document.createElement("p");
    this.$copyright.classList.add('copyright');
    this.$copyright.innerHTML = content4["copyright-content"];

  }

  render() {
    this.$row.appendChild(this.$footer_col_1);
    this.$row.appendChild(this.$footer_col_2);
    this.$row.appendChild(this.$footer_col_3);
    this.$row.appendChild(this.$footer_col_4);

    this.$container.appendChild(this.$row); 
    this.$container.appendChild(this.$hr);
    this.$container.appendChild(this.$copyright);

    return this.$container;
  }
}

export { HomeFooterComponent };
