const form = document.querySelector('.form');

form.onsubmit = (event) => {
  event.preventDefault();
  const { value: email } = event.target.email;
  const { value: password } = event.target.password;
  console.log({ email, password });

  window.location.href = './crm/tasks.html';
};
