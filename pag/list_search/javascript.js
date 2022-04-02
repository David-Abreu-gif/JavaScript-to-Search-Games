// -------------------------------------Elemento tomados del buscardor de la pag principal

let name_game = localStorage.getItem('name').toLowerCase();

// -------------------------------------Buscar en el Documento

class SRC_DOC {
  constructor() {
    this.content = document.getElementById('content');
    this.section = document.getElementsByTagName('section')
    this.ul_doc = document.getElementById('list_available')
    this.msj_nofound = document.getElementById('msj_no_search')
    this.h2_doc = document.getElementsByTagName('h2')
  }
}

const NAMEGAME = new SRC_DOC;

// -----------Función para crear un elemento en el Documento
function createNode(element) {
    return document.createElement(element);
};
// -----------Función para insertar etiqueta dentro de otra
function append(out, in_out) {
  return out.appendChild(in_out);
};


// -------------------------------------Listado de Juegos Traidos
fetch(`https://api.rawg.io/api/games?key=f6c2f13476104dfcad2b2c3f1f364f84&search=${name_game}`)
  .then(response => {
  	return response.json()
  .then((data_base) => {

let count = data_base.count
let data = data_base.results

// -----------Si en la lista no hay nada
if (count === 0) {
  let no_result = createNode('h3');
  no_result.className = 'display-2';
  no_result.innerHTML = `There is nothing on the list... Sorry :(`;
  NAMEGAME.content.appendChild(no_result);

} else {
// -----------Si encuentra información buscar en la lista
    data.forEach((element) => {
        let game_img = element.background_image;
        let name_game_original = element.name;
        let name_lc = element.name.toLowerCase()
// -----------Si contiene el nombre del juego buscado hacer...
        if (name_lc.includes(name_game)) {

          let src_img = element.background_image;

          let src_title = element.name;

// -----------Buscar en cada lista
          let list_genres = element.genres.map((list) => {
            return list.name
          })
          let src_genres = list_genres;

// -----------Buscar en cada lista dentro de sus listas que tiene
          let src_platf
          let list_platforms = element.platforms.forEach((list) => {
            if (list.platform.name) {
              src_platf = list.platform.name
            }
          });

          let src_score = element.score;

// -----------Crear una section
          let in_html = createNode('section');
// -----------Introducir la información dentro de esa section
          in_html.innerHTML =
          `
          <div>
            <img src="${src_img}">

            <div class="info_game">
              <h2>${src_title}</h2>
              <h4><u>Genres:</u> ${src_genres}</h4>
              <h4><u>Platforms:</u> ${src_platf}</h4>
              <h4 class="score"><u>Score:</u> ${src_score}</h4>
            </div>
          </div>
          `;
// -----------Colocar esa section dentro de la etiqueta content
          NAMEGAME.content.appendChild(in_html);

          } else {
// -----------Si no consigue ninguna coincidencia mostrar posibles busquedas
            let section_doc = NAMEGAME.section.length
// -----------Solo y solo si if no se ejecuto
            if (section_doc === 0) {

              NAMEGAME.ul_doc.style.display = 'flex';
              NAMEGAME.msj_nofound.style.display = 'block'

              let create_list = createNode('li');
              let create_div = createNode('div')
              let create_img = createNode('img')
              let create_h2 = createNode('h2');
              create_img.src = `${game_img}`;
              create_h2.innerHTML = `${name_game_original}`;
              append(create_list, create_div)
              append(create_div, create_img)
              append(create_div, create_h2);

              NAMEGAME.ul_doc.appendChild(create_list);
            }
          }
        })
      }
    })
  })

// -------------------------------------Seleccionar un Juegos

document.onclick = selec_element;

function selec_element(e) {
// -----------Buscar que elemento fue clickeado
  let data_element = event.srcElement
// -----------Que tipo de etiqueta es
  let type_tag = event.srcElement.tagName.toLowerCase()

  if (type_tag == 'h2') {
    selec_game = data_element.innerText

    localStorage.setItem('src_name', selec_game)
    window.location.pathname = 'pag/search/search.html'


  } else {
    if (type_tag == 'u') {
// -----------Ir hasta su etiqueta padre y buscar la etiqueta h2 del nombre
      let src_name = data_element.parentNode.parentNode.getElementsByTagName('h2')[0].innerText;
// -----------Redireccionar a otra pag con la variable del nombre
      localStorage.setItem('src_name', src_name)
      window.location.pathname = 'pag/search/search.html'


    } else {
      if (type_tag == 'h4') {
        let src_name = data_element.parentNode.getElementsByTagName('h2')[0].innerText;

        localStorage.setItem('src_name', src_name)
        window.location.pathname = 'pag/search/search.html'


      } else {
        if (type_tag == 'img') {
          let src_name = data_element.parentNode.parentNode.getElementsByTagName('h2')[0].innerText;

          localStorage.setItem('src_name', src_name)
          window.location.pathname = 'pag/search/search.html'
        }
      }
    }
  }
}
