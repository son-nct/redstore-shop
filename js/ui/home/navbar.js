class Navbar {
  $container;
  $logo;
  $img;
  $navbar;
  $ul;
  $cartImg;

  constructor(logo, navbarItems = [], cartImg) {
    this.$container = document.createElement("div");
    this.$container.classList.add("navbar");

    this.$logo = document.createElement("div");
    this.$logo.classList.add("navbar-logo");

    this.$img = document.createElement("img");
    this.$img.src = logo;
    this.$img.width = "125";
    this.$logo.appendChild(this.$img);

    this.$navbar = document.createElement("nav");

    this.$ul = document.createElement("ul");

    // add item list to navbar

    if (navbarItems[4] === "Account") {
      navbarItems.forEach((item, index) => {
        var li = document.createElement("li");

        var anchor = document.createElement("a");
        anchor.href = `${item.toLowerCase()}.html`;

        anchor.innerHTML = item;
        li.appendChild(anchor);

        this.$ul.appendChild(li);
      });
    } else {
      navbarItems.forEach((item, index) => {
        if (index === 4) {
          var li = document.createElement("li");
          li.classList.add("nav_user");
          li.style.position = "relative";

          var anchor = document.createElement("a");
          anchor.style.pointerEvents = "none";

          // set Display Name of user
          auth.onAuthStateChanged((user) => {
            if (user) {
              db.collection("users")
                .doc(user.uid)
                .get()
                .then((snapshot) => {
                  anchor.innerHTML =
                    `<i class="far fa-user"></i> ` + snapshot.data().Name;
                });
            }
          });

          li.appendChild(anchor);

          let ul = document.createElement("ul");
          ul.classList.add("user-menu");

          let menu_item = document.createElement("li");
          menu_item.classList.add("user-menu-item");

          let menu_item_link = document.createElement("a");
          menu_item_link.href = "";
          menu_item_link.innerHTML = "Log out";

          menu_item.addEventListener("click", this.handleLogout);

          menu_item.appendChild(menu_item_link);
          ul.appendChild(menu_item);

          li.appendChild(ul);
        } else {
          var li = document.createElement("li");

          var anchor = document.createElement("a");
          anchor.href = `${item.toLowerCase()}.html`;

          anchor.innerHTML = item;
          li.appendChild(anchor);
        }

        this.$ul.appendChild(li);
      });
    }

    this.$navbar.appendChild(this.$ul);

    // add cart Image
    this.$cartImg = document.createElement("img");
    this.$cartImg.src = cartImg;
    this.$cartImg.width = "30";
    this.$cartImg.height = "30";
  }

  //handle logout
  handleLogout = (evt) => {
    evt.preventDefault();
    auth
      .signOut()
      .then(() => {
        location.reload();
      })
      .catch((error) => {});
  };

  render() {
    this.$container.appendChild(this.$logo);
    this.$container.appendChild(this.$navbar);
    this.$container.appendChild(this.$cartImg);
    return this.$container;
  }
}

export { Navbar };
