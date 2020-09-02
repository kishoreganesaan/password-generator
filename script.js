var copyText = document.querySelector(".pg__password--copy");

//Handle slider change and update length
handleOnSlideChange = (value) => {
  document.getElementById("length").innerHTML = "Length: " + value;
};

//Check selected options
generateSelectedString = () => {
  var selectedStr = "";
  var passwordList = [
    {
      is_enabled: document.getElementById("include_uppercase").checked,
      value: "ABCDEFGHIJKLMNOPQRSTUVWXYZ",
    },
    {
      is_enabled: document.getElementById("include_lowercase").checked,
      value: "abcdefghijklmnopqrstuvwxyz",
    },
    {
      is_enabled: document.getElementById("include_number").checked,
      value: "1234567890",
    },
    {
      is_enabled: document.getElementById("include_symbol").checked,
      value: "!@#$%^&*(){}[]=<>/,.",
    },
  ];
  copyText.innerHTML = "click to copy";
  passwordList.map((password, i) => {
    console.log(password.is_enabled);
    if (password.is_enabled) {
      selectedStr += password.value;
    }
  });
  generateRandomString(selectedStr);
};

//Generate Password
generateRandomString = (password_str) => {
  var length = document.getElementById("range").value;
  var password = document.getElementById("password");
  var password_string = "";
  for (var i = 0; i < parseInt(length); i++) {
    password_string += password_str.charAt(
      Math.floor(Math.random() * password_str.length)
    );
  }
  copyText.classList.remove("u-hide");
  password.value = password_string;
};

//Copy password to clipboard
copyPassword = () => {
  var password = document.getElementById("password");
  password.select();
  password.setSelectionRange(0, 99999);
  document.execCommand("copy");
  copyText.innerHTML = "Copied";
};
