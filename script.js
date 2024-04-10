const passwordBox = document.getElementById("password");
const lenght = 8;

const upperCase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
const lowerCase = "abcdefghijklmnopqrstuvwxyz";
const number = "0123456789";
const symbol = "~!@#$%^&*()_-+=][}{><.?";

const allChars = upperCase + lowerCase + number + symbol;

function createPassword() {
  let password = "";
  password += upperCase[Math.floor(Math.random() * upperCase.length)];
  password += lowerCase[Math.floor(Math.random() * lowerCase.length)];
  password += number[Math.floor(Math.random() * number.length)];
  password += symbol[Math.floor(Math.random() * symbol.length)];

  /*8 chars lenght needed*/
  while (password.length < 8) {
    password += allChars[Math.floor(Math.random() * allChars.length)];
  }

  console.log("Generated password:", password);
  passwordBox.value = password;

  passwordBox.classList.add("generated");
}

function copyPassword() {
  passwordBox.select();
  document.execCommand("copy");
}
