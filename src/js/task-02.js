const ingredients = [
  'Potatoes',
  'Mushrooms',
  'Garlic',
  'Tomatos',
  'Herbs',
  'Condiments',
  
];

const ingredientsNode = document.querySelector('#ingredients');

const createNode = ingredients.map(name => {
  const elementNode = document.createElement('li');
    elementNode.classList.add('item');
    elementNode.textContent = name;
  return elementNode;
})

ingredientsNode.append(...createNode)

