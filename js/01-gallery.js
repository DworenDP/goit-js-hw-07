import { galleryItems } from './gallery-items.js';
// Change code below this line

const galleryRef = document.querySelector('.gallery');
const cardsCreate = createImgCards(galleryItems);
galleryRef.insertAdjacentHTML('beforeend', cardsCreate);

function createImgCards(galleryItems) {
  return galleryItems
    .map(({ preview, original, description }) => {
      return `<div class="gallery__item">
            <a class="gallery__link" rel="noopener noreferrer">
            <img class="gallery__image" src="${preview}" data-source="${original}" alt="${description}"/>
            </a>
            </div>`;
    })
    .join('');
}

//
galleryRef.addEventListener('click', makeModal);

function makeModal(event) {
  const imgCurrentSelect = event.target.nodeName;
  if (imgCurrentSelect !== 'IMG') {
    return;
  }
  const createLightbox = basicLightbox.create(`
        <img src="${event.target.dataset.source}" alt= "hmmmm...something went wrong... ">
    `);
  createLightbox.show();
}
