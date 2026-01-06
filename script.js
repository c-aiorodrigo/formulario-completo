const form = document.getElementById("form");
const username = document.getElementById("username");
const password = document.getElementById("password");
const email = document.getElementById("email");
const checkPassword = document.getElementById("check-password");

form.addEventListener("submit", (e) => {
  e.preventDefault();

  checkInputs();
});

function checkInputs() {
  const usernameValue = username.value;
  const emailValue = email.value;
  const passwordValue = password.value;
  const checkPasswordValue = checkPassword.value;

  if (usernameValue === "") {
    setErrorFor(username, "O nome de usúario é obrigatório.");
  } else {
    setSuccessFor(username, "O nome de usúario é valido")
  }

  if (emailValue === "") {
    setErrorFor(email, "Insira um email válido.");
  } else {
    setSuccessFor(email, "O email é valido")
  }

  if (passwordValue === "") {
    setErrorFor(password, "Insira uma senha válida.");
  } else {
    setSuccessFor(password, "O nome de usúario é valido")
  }
  
  if (checkPasswordValue === "") {
    setErrorFor(checkPassword, "As senhas não são iguais");
  } else {
    setSuccessFor(checkPassword, "O nome de usúario é valido")
  }
}

function setErrorFor(input, message) {
  const formControl = input.parentElement;
  const small = formControl.querySelector("small");
  small.innerText = message;
  formControl.className = "form-control error";
}

function setSuccessFor(input, message) {
  const formControl = input.parentElement;

  formControl.className = "form-control success";
}
