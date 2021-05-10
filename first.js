import {APIKEY} from  './js/config.js';

fetch('https://api.themoviedb.org/3/movie/550?api_key=' + APIKEY)
    .then(response => response.text())
    .then(data => console.log(data));
