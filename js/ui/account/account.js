import {
  linkLogo,
  cartImg,
  renderFooter,
  renderNavbarForAll,
} from "../shared/shared.js";

import { setLoading } from "../shared/shared.js";

import { LoginComponent } from "../account/account-authentication.js";

/*-----------------------------------------------------------------------*/

renderNavbarForAll();

renderFooter();

/*--------------- render login component ------------------------ */
const account_page = document.getElementById("account-page");

const image_background = "./images/image1.png";

const loginComponent = new LoginComponent(image_background);

account_page.appendChild(loginComponent.render());

/* Event change Form Button when Clicked */

let span_login_btn = document.getElementById("span_login_btn");
let span_register_btn = document.getElementById("span_register_btn");

let hr_indicator = document.getElementById("Indicator");

let login_form = document.getElementById("LoginForm");
let register_form = document.getElementById("RegisterForm");

span_login_btn.addEventListener("click", (evt) => {
  hr_indicator.style.transform = "translateX(0px)";

  login_form.style.transform = "translateX(300px)";
  register_form.style.transform = "translateX(300px)";
});

span_register_btn.addEventListener("click", (evt) => {
  hr_indicator.style.transform = "translateX(100px)";
  login_form.style.transform = "translateX(0px)";
  register_form.style.transform = "translateX(0px)";
});

const loginForm = document.getElementById("LoginForm");
const registerForm = document.getElementById("RegisterForm");

/*------------------------------Register Account------------------------------ */

registerForm.addEventListener("submit", (evt) => {
  evt.preventDefault();

  let displayName = registerForm["register_displayName"].value;
  let email = registerForm["register_email"].value;
  let password = registerForm["register_password"].value;
  let confirm_password = registerForm["register_confirm_password"].value;

  let err_displayName = document.getElementById("err-displayName");
  let err_email = document.getElementById("err-email");
  let err_password = document.getElementById("err-password");
  let err_confirm_password = document.getElementById("err-confirm-password");

  let register_message_success = document.getElementById("register-success");
  let register_message_failed = document.getElementById("register-failed");

  if (displayName.length < 2) {
    err_displayName.style.display = "block";
  } else {
    err_displayName.style.display = "none";
  }

  if (password.length < 6) {
    err_password.style.display = "block";
  } else {
    err_password.style.display = "none";
  }

  if (password.length >= 6 && password != confirm_password) {
    err_confirm_password.style.display = "block";
  } else {
    err_confirm_password.style.display = "none";
  }

  err_email.style.display = "none";

  if (
    displayName.length >= 2 &&
    password.length >= 6 &&
    password === confirm_password
  ) {
    setLoading(true);
    auth
      .createUserWithEmailAndPassword(email, password)

      .then((cred) => {
        return db
          .collection("users")
          .doc(cred.user.uid)
          .set({
            Name: displayName,
            Email: email,
            Password: password,
          })
          .then(() => {
            setLoading(false);

            register_message_success.style.display = "block";
            register_message_failed.style.display = "none";

            err_email.style.display = "none";

            registerForm.reset();

            setTimeout(() => {
              register_message_success.style.display = "none";
            }, 5000);
          })
          .catch((err) => {
            setLoading(false);
            register_message_failed.style.display = "block";
            register_message_success.style.display = "none";
            err_email.style.display = "none";
          });
      })
      .catch((err) => {
        setLoading(false);
        register_message_failed.style.display = "none";
        register_message_success.style.display = "none";

        err_email.style.display = "block";
      });
  }
});

/*------------------------------Login Account------------------------------ */

loginForm.addEventListener("submit", (evt) => {
  evt.preventDefault();

  let login_email = loginForm["login_email"].value;
  let login_password = loginForm["login_password"].value;

  let err_login = document.getElementById("error-login");

  if (login_password.length >= 1 && login_password.length >= 1) {
    setLoading(true);
    auth
      .signInWithEmailAndPassword(login_email, login_password)
      .then(() => {
        err_login.style.display = "none";
        setLoading(false);
        loginForm.reset();
        window.history.back();
      })
      .catch((err) => {
        setLoading(false);
        loginForm.reset();
        err_login.style.display = "block";
      });
  }
});
