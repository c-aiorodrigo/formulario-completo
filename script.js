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
    setSuccessFor(username, "O nome de usúario é valido");
  }

  if (emailValue === "") {
    setErrorFor(email, "O email é obrigatorio");
  } else if (!checkEmail(emailValue)) {
    setErrorFor(email, "Insira um email válido.");
  } else {
    setSuccessFor(email, "O email é valido");
  }

  if (passwordValue === "") {
    setErrorFor(password, "A senha é obrigatorio");
  } else if (passwordValue.length < 7) {
    setErrorFor(password, "A senha deve ter o mínimo de 7 caracteres");
  } else {
    setSuccessFor(password, "O nome de usúario é valido");
  }

  if (checkPasswordValue === "") {
    setErrorFor(checkPassword, "Campo obrigatório");
  } else if (checkPasswordValue !== passwordValue) {
    setErrorFor(checkPassword, "As senhas devem ser iguais.");
  } else {
    setSuccessFor(checkPassword, "O nome de usúario é valido");
  }

  const formCrontrols = form.querySelectorAll(".form-control");
  const formIsValid = [...formCrontrols].every(formControl => {
    return formControl.className === "form-control success"
  })

  if (formIsValid) {
    console.log("O formulário está 100% válido!!")
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

function checkEmail(email) {
  return /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(
    email
  );
}
