silderValue = value => {
  document.getElementById("password_length").innerHTML = "Length: " + value;
};

generatePassword = () => {
  document.querySelector(".copy_text").innerHTML = "click to copy";
  var lower_case = "abcdefghijklmnopqrstuvwxyz";
  var upper_case = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
  var numbers = "1234567890";
  var symbols = "!@#$%^&*(){}[]=<>/,.";
  var password_string = "";

  var include_uppercase = document.getElementById("include_uppercase").checked;
  var include_lowercase = document.getElementById("include_lowercase").checked;
  var include_number = document.getElementById("include_number").checked;
  var include_symbol = document.getElementById("include_symbol").checked;

  if (
    include_uppercase &&
    include_lowercase &&
    include_number &&
    include_symbol
  ) {
    password_string += lower_case + upper_case + numbers + symbols;
    this.generateRandomString(password_string);
  } else if (include_uppercase && include_lowercase && include_number) {
    password_string += lower_case + upper_case + numbers;
    this.generateRandomString(password_string);
  } else if (include_uppercase && include_lowercase && include_symbol) {
    password_string += lower_case + upper_case + symbols;
    this.generateRandomString(password_string);
  } else if (include_lowercase && include_number && include_symbol) {
    password_string += lower_case + numbers + symbols;
    this.generateRandomString(password_string);
  } else if (include_uppercase && include_lowercase) {
    password_string += lower_case + upper_case;
    this.generateRandomString(password_string);
  } else if (include_uppercase && include_number) {
    password_string += upper_case + numbers;
    this.generateRandomString(password_string);
  } else if (include_uppercase && include_symbol) {
    password_string += upper_case + symbols;
    this.generateRandomString(password_string);
  } else if (include_lowercase && include_number) {
    password_string += lower_case + numbers;
    this.generateRandomString(password_string);
  } else if (include_lowercase && include_symbol) {
    password_string += lower_case + symbols;
    this.generateRandomString(password_string);
  } else if (include_number && include_symbol) {
    password_string += numbers + symbols;
    this.generateRandomString(password_string);
  } else if (include_uppercase) {
    password_string += upper_case;
    this.generateRandomString(password_string);
  } else if (include_lowercase) {
    password_string += lower_case;
    this.generateRandomString(password_string);
  } else if (include_number) {
    password_string += numbers;
    this.generateRandomString(password_string);
  } else if (include_symbol) {
    password_string += symbols;
    this.generateRandomString(password_string);
  } else {
    password_string += lower_case + upper_case;
    this.generateRandomString(password_string);
  }
};

generateRandomString = password_str => {
  var length = document.getElementById("length").value;
  var password = document.getElementById("password");
  var password_string = "";
  for (var i = 0; i < parseInt(length); i++) {
    password_string += password_str.charAt(
      Math.floor(Math.random() * password_str.length)
    );
  }
  document.querySelector(".copy_text").classList.remove("hider");
  password.value = password_string;
};

copyPassword = () => {
  var copyText = document.getElementById("password");
  copyText.select();
  copyText.setSelectionRange(0, 99999);
  document.execCommand("copy");
  document.querySelector(".copy_text").innerHTML = "Copied";
};