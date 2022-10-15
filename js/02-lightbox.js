import { galleryItems } from './gallery-items.js';
// Change code below this line

// creating collection of pictures 
const previewImagesContainer = document.querySelector(`.gallery`);
const galleryItemsEl = [];

for (let galleryItem of galleryItems) {
    const galleryItemEl = document.createElement(`li`);
    

    const galleryLinkEl = document.createElement(`a`);
    galleryLinkEl.classList.add(`gallery__item`);
    galleryLinkEl.href = galleryItem.original;

    const galleryImgEl = document.createElement(`img`);
    galleryImgEl.classList.add(`gallery__image`);
    galleryImgEl.src = galleryItem.preview;
    galleryImgEl.alt = galleryItem.description;

    galleryItemEl.appendChild(galleryLinkEl);
    galleryLinkEl.appendChild(galleryImgEl);

    galleryItemsEl.push(galleryItemEl);

}

previewImagesContainer.append(...galleryItemsEl);

// delegation

let gallery = new SimpleLightbox('.gallery a', {captions: true,
    captionSelector: 'img',
    captionPosition: 'bottom',
    captionType: 'attr',
    captionsData: 'alt',
    captionDelay: 250,
    });
gallery.on('show.simplelightbox', function (event) {
	// Do something…

    
});

/*
let SimpleLightbox.sourceAttr = e.target.getAttribute('alt');
  console.log(SimpleLightbox.sourceAttr);
  */