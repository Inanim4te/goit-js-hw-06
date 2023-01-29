const form = document.querySelector('.login-form');

const user = {};

form.addEventListener('submit', handleSubmit);

function handleSubmit(event) {
  event.preventDefault();
  const {
    elements: { email, password },
  } = event.target;

  if (email.value === '' || password.value === '') {
    alert('inputs must be filled');
    return;
  }
  user.email = email.value;
  user.password = password.value;
  console.log(user);
  form.reset();
}
