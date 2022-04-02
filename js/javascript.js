// ---------------------------------Mostrar información de un Juego Aleatorio

// -----------------Buscar en el Documento
class HTMLSRC {
  constructor(data_game) {
this.search_game = document.querySelector('#input_game');

this.img_game = document.querySelector('#side_right');
this.info_game = document.querySelector('#info_game');
  }
}


// -----------------Bucle de Juegos que se van a mostrar


for(let i=1; i<2; i++){

  let bucle_cont = setInterval(function(){
// -----------------Busqueda en la API
fetch("https://free-to-play-games-database.p.rapidapi.com/api/games", {
  "method": "GET",
  "headers": {
"x-rapidapi-host": "free-to-play-games-database.p.rapidapi.com",
"x-rapidapi-key": "49c18413b0msh66a8464e54dc142p1c438ajsnfd7fe374832a"
  }
})
.then(resp => resp.json())
.then(function(info) {
  let data = info;
// -----------------De la busqueda obtener un valor aleatorio
  let random = Math.floor(Math.random()*data.length);
  let data_game = data[random];
  let RANDGAMES = new HTMLSRC(data_game)
// -----------------Información de la API
  let src_img = data_game.thumbnail;
  let src_title = data_game.title;
  let src_platf = data_game.platform;
  let src_genre = data_game.genre;
  let src_desc = data_game.short_description;
// -----------------Insertar valores en el Documento

  RANDGAMES.img_game.innerHTML =
  `<img src="${src_img}" alt="">

  <div id="info_game">
<h2>${src_title}</h2>
<h4>Plataform: ${src_platf}</h4>
<h4>Genre: ${src_genre}</h4>
<p>${src_desc}</p>
  </div>`;
  })

.catch(err => {
  console.error(err);
});

  },12000)

}

// ---------------------------------Busqueda en el Formulario

// -----------------Autocompletado del buscador

import { list_game } from './list.js';
// -----------------Importar modulo lista
$( function() {
  let selec_games = list_game

  $( "#input_game" ).autocomplete({
source: selec_games
  });
} );

// -----------------Busqueda realizada


const e_search = document.getElementById('button_game');
const alert = document.getElementById('alert_src');

e_search.addEventListener('click', (e) => {
  e.preventDefault();

  const src_write = document.getElementById('input_game').value;

  if (src_write === '') {
// -----------------Si no hay nada escritor ver una alerta
    window.alert('No hay nada que buscar, por favor inserte un valor. :(');
  } else {
    if (src_write) {
      localStorage.setItem('name', src_write)
      window.location.pathname = 'pag/list_search/list_search.html'
    }
  }
})
