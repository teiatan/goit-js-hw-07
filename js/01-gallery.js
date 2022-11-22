import { galleryItems } from './gallery-items.js';
// Change code below this line

const previewImagesContainer = document.querySelector(`.gallery`);
const galleryItemsEl = [];

for (let galleryItem of galleryItems) {
    const galleryItemEl = document.createElement(`div`);
    galleryItemEl.classList.add(`gallery__item`);

    const galleryLinkEl = document.createElement(`a`);
    galleryLinkEl.classList.add(`gallery__link`);
    galleryLinkEl.href = galleryItem.original;
    galleryLinkEl.setAttribute("onclick", "return false");

    const galleryImgEl = document.createElement(`img`);
    galleryImgEl.classList.add(`gallery__image`);
    galleryImgEl.src = galleryItem.preview;
    galleryImgEl.alt = galleryItem.description;
    galleryImgEl.setAttribute("data-source", galleryItem.original);

    galleryItemEl.appendChild(galleryLinkEl);
    galleryLinkEl.appendChild(galleryImgEl);

    galleryItemsEl.push(galleryItemEl);
 
}

previewImagesContainer.append(...galleryItemsEl);

previewImagesContainer.addEventListener(`click`, imageInccreaseHandler);

function imageInccreaseHandler(event) {

    if (event.target.nodeName !== `IMG`) {
        return;
    }

    const instance = basicLightbox.create(`
        <img width="1400" height="900" src="${event.target.getAttribute('data-source')}">
    `,
    {
        onShow: () => {
            document.addEventListener("keydown", modalCloseHandler);
        },
        onClose: () => {
            document.removeEventListener("keydown", modalCloseHandler);
        },
      }
    );

    function modalCloseHandler(event) {
        
        if (event.code === 'Escape') {
            instance.close();
        }
    }

    instance.show();
}
