// Add imports above this line
import { galleryItems } from './gallery-items';
// Change code below this line
import SimpleLightbox from 'simplelightbox';
import 'simplelightbox/dist/simple-lightbox.min.css';

const galleryList = document.querySelector('.gallery')


    const addGallery = (imgArray) => {
    return imgArray.map(({ preview, description, original }) => {
        return `
        <div class="gallery__item">
            <a class="gallery__link" href=${original}>
                <img src=${preview} title=${description}  alt=${description}  data-source=${original} class="gallery__image">
            </a>
        </div>`;
    }).join('')
    }

    let cardSet = addGallery(galleryItems)
    galleryList.insertAdjacentHTML('afterbegin',cardSet )
    
var lightbox = new SimpleLightbox('.gallery a', {
    
    overlay: true,
    captionDelay: '250ms'
});


