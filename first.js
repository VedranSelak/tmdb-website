import {APIKEY, BASE_URL, IMAGE_BASE_URL} from  './assets/js/config.js';

fetch(BASE_URL + 'movie/popular?api_key=' + APIKEY + "&language=en-US&page=1")
    .then(response => response.json())
    .then(data => {
      let i = 0;
      let output = "<div id='carousel-item' class='carousel-item active'><div class='row'>";
      data.results.forEach(function (arrayItem) {
          output += "<div class='col-2'><img class='d-block w-100' src=" + IMAGE_BASE_URL + "w300" + arrayItem.backdrop_path + "></div>";
          if(i == 5) {
            output += "</div></div><div id='carousel-item' class='carousel-item'><div class='row'>";
            i = 0;
          } else {
            i++;
          }

      });

      if(i == 0) {
        output = output.substring(0,output.length-"</div></div><div id='carousel-item' class='carousel-item'><div class='row'>".length-1);
      } else {
        output += "</div></div>";
      }

      document.getElementById("container").innerHTML = output + document.getElementById("container").innerHTML;


    });
