class LoginComponent {
  $container;
  $row;
  $form_container;
  $form_btn;
  $form_login;
  $form_register;

  constructor(imageLink) {
    this.$container = document.createElement("div");
    this.$container.classList.add("container");

    this.$row = document.createElement("div");
    this.$row.classList.add("row");

    //create column 1
    let col1 = document.createElement("div");
    col1.classList.add("col-2");

    let img = document.createElement("img");
    img.src = imageLink;

    col1.appendChild(img);

    //create column 2
    let col2 = document.createElement("div");
    col2.classList.add("col-2");

    this.$form_container = document.createElement("div");
    this.$form_container.classList.add("form-container");

    col2.appendChild(this.$form_container);

    this.$row.appendChild(col1);
    this.$row.appendChild(col2);

    // create form button login register
    this.$form_btn = document.createElement("div");
    this.$form_btn.classList.add("form-btn");

    // append form-button to form-container
    this.$form_container.appendChild(this.$form_btn);

    let span_login = document.createElement("span");
    span_login.id = "span_login_btn";
    span_login.innerHTML = "Login";

    let span_register = document.createElement("span");
    span_register.id = "span_register_btn";
    span_register.innerHTML = "Register";

    let hr = document.createElement("hr");
    hr.id = "Indicator";

    this.$form_btn.appendChild(span_login);
    this.$form_btn.appendChild(span_register);
    this.$form_btn.appendChild(hr);

    /* create Login Form and Register Form */
    // 1. Login Form
    this.$form_login = document.createElement("form");
    this.$form_login.id = "LoginForm";
    let login_email = document.createElement("input");
    login_email.type = "email";
    login_email.id = "login_email";
    login_email.placeholder = "Email";
    /**--------------------------------------------------------- */

    let login_password = document.createElement("input");
    login_password.type = "password";
    login_password.id = "login_password";
    login_password.placeholder = "Password";

    let login_message = document.createElement("span");
    login_message.innerHTML = "Invalid account. Please try again.";
    login_message.classList.add('error-login');
    login_message.id = 'error-login';
    login_message.style.display = "none";

    let login_button = document.createElement("button");
    login_button.type = "submit";
    login_button.classList.add("btn");
    login_button.innerHTML = "Login";

    this.$form_login.appendChild(login_email);
    this.$form_login.appendChild(login_password);
    this.$form_login.appendChild(login_message);
    this.$form_login.appendChild(login_button);

    // 2. Register Form
    this.$form_register = document.createElement("form");
    this.$form_register.id = "RegisterForm";

    /*-----------------regier Display name -------------------*/
    let register_displayName = document.createElement("input");
    register_displayName.required = true;
    register_displayName.id = "register_displayName";
    register_displayName.type = "text";
    register_displayName.placeholder = "Display Name";

    let err_displayName = document.createElement("span");
    err_displayName.innerHTML = "*Display Name must be at least 2 characters";
    err_displayName.style.display = "none";

    err_displayName.classList.add("err-register");
    err_displayName.id = "err-displayName";

    /*-----------------register Email  -------------------*/
    let register_email = document.createElement("input");
    register_email.required = true;
    register_email.type = "email";
    register_email.id = "register_email";
    register_email.placeholder = "Email";

    let err_email = document.createElement("span");

    err_email.innerHTML = "Email already existed. Try again !";
    err_email.style.display = "none";

    err_email.classList.add("err-register");
    err_email.id = "err-email";

    /*-----------------register Password  -------------------*/
    let register_password = document.createElement("input");
    register_password.required = true;
    register_password.type = "password";
    register_password.id = "register_password";
    register_password.placeholder = "Password";

    let err_password = document.createElement("span");
    err_password.innerHTML = "*Password must be at least 6 characters";
    err_password.style.display = "none";

    err_password.classList.add("err-register");
    err_password.id = "err-password";

    /*-----------------register ConfirmPassword  -------------------*/
    let register_confirm_password = document.createElement("input");
    register_confirm_password.required = true;
    register_confirm_password.type = "password";
    register_confirm_password.id = "register_confirm_password";
    register_confirm_password.placeholder = "Confirm Password";

    let err_confirm_password = document.createElement("span");
    err_confirm_password.innerHTML =
      "*Confirm password and password does not match !";
    err_confirm_password.style.display = "none";

    err_confirm_password.classList.add("err-register");
    err_confirm_password.id = "err-confirm-password";

    /*-----------------register message  -------------------*/
    let register_message_success = document.createElement("span");
    register_message_success.innerHTML =
      "Register Successfully. Please Log in !";
    register_message_success.id = "register-success";

    let register_message_failed = document.createElement("span");
    register_message_failed.innerHTML = "Register Failed. Please try again !";
    register_message_failed.id = "register-failed";

    /*-----------------register Button  -------------------*/

    let register_button = document.createElement("button");
    register_button.type = "submit";
    register_button.classList.add("btn");
    register_button.innerHTML = "Register";

    this.$form_register.appendChild(register_displayName);
    this.$form_register.appendChild(err_displayName);

    this.$form_register.appendChild(register_email);
    this.$form_register.appendChild(err_email);

    this.$form_register.appendChild(register_password);
    this.$form_register.appendChild(err_password);

    this.$form_register.appendChild(register_password);
    this.$form_register.appendChild(err_password);

    this.$form_register.appendChild(register_confirm_password);
    this.$form_register.appendChild(err_confirm_password);

    this.$form_register.appendChild(register_message_success);
    this.$form_register.appendChild(register_message_failed);

    this.$form_register.appendChild(register_button);

    this.$form_container.appendChild(this.$form_login);
    this.$form_container.appendChild(this.$form_register);
  }

  render() {
    this.$container.appendChild(this.$row);
    return this.$container;
  }
}

export { LoginComponent };
