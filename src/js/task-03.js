const images = [
  {
    url: 'https://images.pexels.com/photos/140134/pexels-photo-140134.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
    alt: 'White and Black Long Fur Cat',
  },
  {
    url: 'https://images.pexels.com/photos/213399/pexels-photo-213399.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
    alt: 'Orange and White Koi Fish Near Yellow Koi Fish',
  },
  {
    url: 'https://images.pexels.com/photos/219943/pexels-photo-219943.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
    alt: 'Group of Horses Running',
  },
];


// const gallaryNode = document.querySelector('.gallery');

// const createNode = images.map(item => {
//   const liElement = document.createElement('li');
//   const imgEl = document.createElement('img');
//   imgEl.src = item.url;
//   imgEl.alt = item.alt;
//   liElement.appendChild(imgEl);
//   return liElement;
// })


// gallaryNode.append(...createNode)

const gallaryNode = document.querySelector('.gallery');

const makeItem = item => {
  const { url, alt } = item;
  return `<li><img src="${url}" alt="${alt}" width=100%></li>`;
}

const ItemWithImg = images.map(makeItem).join("");

gallaryNode.insertAdjacentHTML("beforeend", ItemWithImg);

