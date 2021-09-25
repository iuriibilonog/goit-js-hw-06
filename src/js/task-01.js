'use strict';

const counterCategory = document.querySelectorAll('li.item');

console.log('Number of categories:', counterCategory.length);

for (const char of counterCategory) {
  console.log('Category:', char.firstElementChild.textContent)
  console.log('Elements:', char.lastElementChild.children.length)
}





