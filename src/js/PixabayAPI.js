import axios from "axios";

export class PixabayAPI {

#BASE_URL = 'https://pixabay.com/api/';
#API_KEY = '31910898-50bf1f8c70306f6b7b25ce5eb';
#query = 'cats';
#page = 1;
    
    get query() {
    return this.#query;
  }

  set query(newQuery) {
    this.#query = newQuery;
  }
    
   async getImagesByQuery() {
       const { data } = await axios.get(`${this.#BASE_URL}?key=${this.#API_KEY}&q=${this.#query}&image_type=photo&orientation=horizontal&safesearch=true`);

       console.log(data);

       return data;
    }  
    
   async getMoreImages() {

    }
}