'use strict';

const counterCategory = document.querySelectorAll('li.item');

console.log('Number of categories:', counterCategory.length);

// for (const char of counterCategory) {
//   console.log('Category:', char.firstElementChild.textContent)
//   console.log('Elements:', char.lastElementChild.children.length)
// }

counterCategory.forEach(item => {
  const titleLi = item.querySelector("h2");
  console.log('Category:', titleLi.textContent);

  const itemLi = item.querySelectorAll("li");
  console.log('Elements:', itemLi.length);
})



