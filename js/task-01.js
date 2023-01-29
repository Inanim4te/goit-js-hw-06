const list = document.querySelector('#categories');
console.log(`Number of categories: ${list.children.length}`);
const listItems = list.querySelectorAll('.item');
listItems.forEach(item => {
  console.log(`Category: ${item.querySelector("h2").textContent}`);
  console.log(`Elements: ${item.querySelectorAll("li").length}`);
});