import { galleryItems } from './gallery-items.js';
// Change code below this line

const galleryRef = document.querySelector('.gallery');

function createImgCards(galleryItems) {
  return galleryItems
    .map(({ preview, original, description }) => {
      return `
            <a class="gallery__link" rel="noopener noreferrer"  href="${original}">
            <img class="gallery__image" src="${preview}" data-source="${original}" alt="${description}"/>
            </a>`;
    })
    .join('');
}

const cardsCreate = createImgCards(galleryItems);
galleryRef.innerHTML = cardsCreate;

const gallery = new SimpleLightbox('.gallery a', {
  captionsData: 'alt',
  captionDelay: 250,
});
console.log(galleryItems);
