const wrapper = document.querySelector(".wrapper"),
  signupHeader = document.querySelector(".signup header"),
  loginHeader = document.querySelector(".login header");

loginHeader.addEventListener("click", () => {
  wrapper.classList.add("active");
});
signupHeader.addEventListener("click", () => {
  wrapper.classList.remove("active");
});




document.getElementById('signupButton').addEventListener('click', function () {
  const fullName = document.getElementById('fullName').value;
  const email = document.getElementById('email').value;
  const password = document.getElementById('password').value;
  const terms = document.getElementById('terms').checked;

  if (fullName && email && password && terms) {
    alert("Account has been created");
  } else {
    alert("Please fill all fields correctly and accept terms & conditions");
  }
});

document.getElementById('loginButton').addEventListener('click', function () {
  const loginEmail = document.getElementById('loginEmail').value;
  const loginPassword = document.getElementById('loginPassword').value;

  if (loginEmail && loginPassword) {
    alert("Incorrect Password");
  } else {
    alert("Please fill in all login fields");
  }
});










