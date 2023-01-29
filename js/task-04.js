let counterValue = 0;

const counter = document.querySelector('#counter');
const counterOutput = document.querySelector('#value');
const decrementBtn = document.querySelector('button[data-action="decrement"]');
const incrementBtn = document.querySelector('button[data-action="increment"]');

counter.addEventListener('click', e => {
  if (e.target === decrementBtn) {
    counterValue -= 1;
    counterOutput.innerHTML = counterValue;
  } else if (e.target === incrementBtn) {
    counterValue += 1;
    counterOutput.innerHTML = counterValue;
  }
});
