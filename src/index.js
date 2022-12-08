
import { Notify } from "notiflix";
import SimpleLightbox from "simplelightbox";
import "simplelightbox/dist/simple-lightbox.min.css";

import { refs } from "./js/refs";
import { fetchImages } from "./js/fetchImages";
import { createGallery } from "./js/createGallery";
import { PixabayAPI } from "./js/PixabayAPI";

const pixabayApi = new PixabayAPI();


async function onFormSubmit(e) {
    e.preventDefault();

    const {
    elements: { searchQuery },
    } = e.currentTarget;

    const searchValue = searchQuery.value.trim().toLowerCase();
   
  if (!searchValue) {
    Notify.failure('Sorry, there are no images matching your search query. Please try again.');
    return;
  }
    
    pixabayApi.query = searchValue;
    const data = await pixabayApi.getImagesByQuery();

    if (data.hits.length === 0) {
        Notify.failure('Sorry, there are no images matching your search query. Please try again.');
    return;
    }
    lightbox.refresh();
    const markup = createGallery(data.hits);
    refs.gallery.innerHTML = markup;

    

}

var lightbox = new SimpleLightbox('.gallery a', { captionsData: "alt", captionPosition: "bottom", captionDelay: 250 });

refs.searchForm.addEventListener("submit", onFormSubmit);