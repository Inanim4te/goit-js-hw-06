const input = document.querySelector('#validation-input');

input.addEventListener('blur', e => {
  input.classList.remove('invalid');
  input.classList.remove('valid');
  if (e.target.value.length !== 6) {
    input.classList.add('invalid');
    return;
  }
  input.classList.add('valid');
});
