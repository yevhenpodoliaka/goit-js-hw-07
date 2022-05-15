import { galleryItems } from "./gallery-items.js";
// Change code below this line

const galleryEl = document.querySelector(".gallery");
const galleryItemsEL = makeGalleryItem(galleryItems);
galleryEl.insertAdjacentHTML("beforeend", galleryItemsEL);
galleryEl.addEventListener("click", onClickGalleryItem);

function makeGalleryItem(array) {
  return array
    .map((el) => {
      return `<div class="gallery__item">
  <a class="gallery__link" href="large-image.jpg">
    <img
      class="gallery__image"
      src="${el.preview}"
      data-source="${el.original}"
      alt="${el.description}"
    />
  </a>
</div>
      `;
    })
    .join("");
}

function onClickGalleryItem(event) {
  event.preventDefault();
  if (event.target.nodeName !== "IMG") {
    return;
  }

  showBackdrop(event.target.dataset.source);

}
let backdrop;
function showBackdrop(url) {
   backdrop = basicLightbox.create(`<img src="${url}" alt="">`, {
    closable: true,
    onShow: (backdrop) => {
      document.addEventListener('keydown', onCloseEsc)
    },

    onClose: () => {
      document.removeEventListener("keydown", onCloseEsc);
    },
  });
  backdrop.show();

}
function onCloseEsc(event) {
  if (event.code!=='Escape') {
  return
  }
 backdrop.close()
  console.log('ok');
}

















