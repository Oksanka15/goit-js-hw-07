import { galleryItems } from './gallery-items.js';
// Change code below this line



const galleryDiv = document.querySelector(".gallery");
const galleryCard = createGalleryCards(galleryItems);
galleryDiv.insertAdjacentHTML('afterbegin', galleryCard);

function createGalleryCards(images) {
    return images
    .map(image => 
        `<div class="gallery__item">
            <a class="gallery__link" href="${image.original}" onclick="return false;">
            <img
                class="gallery__image"
                src="${image.preview}"
                data-source="${image.original}"
                alt="${image.description}"
            />
            </a>
            </div>
        `)
        .join('');
}

// import * as basicLightbox from 'basiclightbox'

galleryDiv.addEventListener('click', openImage);

function openImage(event) {
    event.preventDefault();
    
    if (event.target.nodeName !== 'IMG'){
        return;
    };

const instance = basicLightbox.create(`
    <img src="${event.target.dataset.source}" width="800" height="600">`,

);
instance.show();
galleryDiv.addEventListener("keydown", (event) => {
            if(event.code === "Escape"){
                instance.close()
            }
        })
}