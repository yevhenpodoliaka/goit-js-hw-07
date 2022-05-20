import { galleryItems } from './gallery-items.js';
// Change code below this line


const galleryEl = document.querySelector(".gallery");
const galleryItemsEL = makeGalleryItem(galleryItems);
galleryEl.insertAdjacentHTML("beforeend", galleryItemsEL);


function makeGalleryItem(array) {
  return array
    .map((el) => {
      return `<a class="gallery__item" href="${el.original}">
  <img class="gallery__image" src="${el.preview}" alt="${el.description}" />
</a> `;
    })
    .join("");
}

new SimpleLightbox(".gallery a", {
  disableScroll: true,
  captionsData: "alt",
  captionDelay: 250,
});



