import {APIKEY, BASE_URL} from  './assets/js/config.js';

fetch(BASE_URL + 'movie/550?api_key=' + APIKEY)
    .then(response => response.json())
    .then(data => console.log(data));
