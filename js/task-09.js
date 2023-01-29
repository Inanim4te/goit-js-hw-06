function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}

const changeColorBtn = document.querySelector('button.change-color');

const colorHolder = document.querySelector('span.color');

changeColorBtn.addEventListener('click', changeColor);

function changeColor(randomColor) {
  randomColor = getRandomHexColor();
  document.body.style.backgroundColor = randomColor;
  colorHolder.innerHTML = randomColor;
}
