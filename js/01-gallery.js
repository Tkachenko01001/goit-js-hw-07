import { galleryItems } from './gallery-items.js';
// Change code below this line

const galleryEl = document.querySelector('.gallery');

const gallery = galleryItems.map((item) => `<div class="gallery__item">
<a class="gallery__link" href="large-image.jpg">
  <img
    class="gallery__image"
    src="${item.preview}"
    data-source="${item.original}"
    alt="${item.description}"
  />
</a>
</div>`)
.join(' ')

galleryEl.insertAdjacentHTML('afterbegin', gallery);

const onClickImg = (event) => {

    if (event.target.tagName !== 'IMG') {
        return;
    };
    
    event.preventDefault();

    const instance = basicLightbox.create (
    `<img src="${event.target.dataset.source}" width="800" height="600">`,
    
    {
        onShow: () => {
            window.addEventListener('keydown', onTarget);
        },

        onClose: () => {
            window.removeEventListener('keydown', onTarget);
        },
        
    }
    );

    const onTarget = (event) => {
        if ( event.key === 'Escape') {
         instance.close();
        };
     };

     instance.show();
};

galleryEl.addEventListener('click', onClickImg);