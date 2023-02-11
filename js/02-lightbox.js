import { galleryItems } from './gallery-items.js';
// Change code below this line

const galleryEl = document.querySelector('.gallery');

const gallery = galleryItems.map((item) => 
`<a class="gallery__item" href="${item.original}">
  <img class="gallery__image" src="${item.preview}" alt="${item.description}" />
</a>`)
.join(' ')

galleryEl.insertAdjacentHTML('afterbegin', gallery);

new SimpleLightbox('.gallery a', { 
        
    captionDelay: 250,
    captionsData: "alt",
      
 });