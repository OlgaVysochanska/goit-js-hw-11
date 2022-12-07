export class PixabayAPI {

#BASE_URL = 'https://pixabay.com/api/';
#API_KEY = '31910898-50bf1f8c70306f6b7b25ce5eb';
#query = '';
    
    get query() {
    return this.#query;
  }

  set query(newQuery) {
    this.#query = newQuery;
  }
    
    getImagesByQuery() {
      
  }  
}