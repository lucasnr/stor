const form = document.querySelector('.content .form');
const alert = form.querySelector('.text-success');

form.onsubmit = (event) => {
  event.preventDefault();
  alert.classList.remove('d-none');
};
