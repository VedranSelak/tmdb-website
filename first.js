import {APIKEY, BASE_URL} from  './assets/js/config.js';

fetch(BASE_URL + 'movie/popular?api_key=' + APIKEY + "&language=en-US&page=1")
    .then(response => response.json())
    .then(data => console.log(data.results));
