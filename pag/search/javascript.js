// -------------------------------------Elemento tomados del buscardor de la pag principal

let name_game = localStorage.getItem('src_name').toLowerCase();

// -------------------------------------Buscar en el Documento
class  SRC_DOC{
	constructor() {
		this.title = document.getElementById('title')
		this.side_left = document.getElementById('side_left')
		this.side_right = document.getElementById('side_right')
	}
}

const NAMEGAME = new SRC_DOC

// -------------------------------------Crear Elementos en el Documento
// -----------Función para crear un elemento en el Documento
function createNode(element) {
    return document.createElement(element)
};
// -----------Función para insertar etiqueta dentro de otra
function append(element_parent, element) {
  return element_parent.appendChild(element);
};

// -------------------------------------Buscar en caso de encontrarla Descripción Larga - Minimum System Requirements
const options = {
	method: 'GET',
	headers: {
		'X-RapidAPI-Host': 'free-to-play-games-database.p.rapidapi.com',
		'X-RapidAPI-Key': '49c18413b0msh66a8464e54dc142p1c438ajsnfd7fe374832a'
	}
};

fetch('https://free-to-play-games-database.p.rapidapi.com/api/games', options)
.then(response => response.json())
.then((database) => {
	let data = database.map((in_data) => {
		let info = in_data
		let name = in_data.title.toLowerCase()
		if (name == name_game) {
			let src_id = info.id

const options = {
	method: 'GET',
	headers: {
		'X-RapidAPI-Host': 'free-to-play-games-database.p.rapidapi.com',
		'X-RapidAPI-Key': '49c18413b0msh66a8464e54dc142p1c438ajsnfd7fe374832a'
	}
};

fetch(`https://free-to-play-games-database.p.rapidapi.com/api/game?id=${src_id}`, options)
.then(response => response.json())
.then((info) => {
	let in_info = info

	let src_desc = info.description

	let src_minimum_system_requirements = info.minimum_system_requirements

	let src_graphics = src_minimum_system_requirements.graphics
	let src_memory = src_minimum_system_requirements.memory
	let src_os = src_minimum_system_requirements.os
	let src_processor = src_minimum_system_requirements.processor
	let src_storage = src_minimum_system_requirements.storage

	let create_div = createNode('div');
	create_div.id = 'desc_msr'
	create_div.innerHTML =
	`
	<hr>
	<h3><u>Description</u></h3>
	<p>${src_desc}</p> <hr>
	<h3><u>Minimum System Requirements</u></h3>
	<h3><u>Graphics: </u> <br>
	${src_graphics}</h3>
	<h3><u>Memory: </u> <br>
	${src_memory}</h3>
	<h3><u>Os: </u> <br>
	${src_os}</h3>
	<h3><u>Processor: </u> <br>
	${src_processor}</h3>
	<h3><u>Storage: </u> <br>
	${src_storage}</h3>
	`;
	append(NAMEGAME.side_right, create_div)
})
		}
	})
});

// -------------------------------------Buscar información principal
fetch(`https://api.rawg.io/api/games?key=f6c2f13476104dfcad2b2c3f1f364f84&search=${name_game}`)
.then(response => {
	return response.json()
})
.then((data) => {
  let indata = data.results.forEach((info) => {
    let list_name = info.name.toLowerCase()
		let list_sshots = info.short_screenshots
    let id_games = info.id
    let info_game = info

    if (list_name === name_game) {
// ---------------Buscar ID
      let src_id = id_games
// ---------------Buscar screenshots del juego
			if (list_sshots[2] != list_sshots[2]) {
				let ss_game0 = info.short_screenshots[0].image
				let ss_game1 = info.short_screenshots[1].image
				let ss_game2 = info.short_screenshots[2].image

				document.getElementById('myCarousel').innerHTML =
				`
				<div class="carousel-item active">
						<img src="${ss_game0}" class="d-block w-100" alt="...">
				</div>
				<div class="carousel-item">
						<img src="${ss_game1}" class="d-block w-100" alt="...">
				</div>
				<div class="carousel-item">
						<img src="${ss_game2}" class="d-block w-100" alt="...">
				</div>
				`
			} else {
				if (list_sshots[1] = list_sshots[1]) {
					let ss_game0 = info.short_screenshots[0].image
					let ss_game1 = info.short_screenshots[1].image
					document.getElementById('myCarousel').innerHTML =
					`
					<div class="carousel-item active">
							<img src="${ss_game0}" class="d-block w-100" alt="...">
					</div>
					<div class="carousel-item">
							<img src="${ss_game1}" class="d-block w-100" alt="...">
					</div>
					`
				} else {
					if (list_sshots[0] = list_sshots[0]) {
						let ss_game0 = info.short_screenshots[0].image
						document.getElementById('myCarousel').innerHTML =
						`
						<div class="carousel-item active">
						<img src="${ss_game0}" class="d-block w-100" alt="...">
						</div>
						`
					}
				}
			}









// ---------------Buscar Título
			let src_title = info.name

NAMEGAME.title.innerText = `${src_title}`
// ---------------Buscar Géneros
			let src_genre
			let list_genre = info.genres.map((names) => {
				let in_list = names.name
				src_genre = in_list
			})
// ---------------Buscar Plataformas
			let src_plataforms
			let list_plataforms = info.platforms.forEach((list) => {
				let in_list = list.platform.name
				src_plataforms = in_list
			});
// ---------------Buscar etiquetas
			let src_tags
			let list_tags = info.tags.map((list) => {
				let in_list = list.language
				if (in_list == 'eng') {
					let names = list.name
					src_tags = names
				}
			})
// ---------------Fecha de lanzamiento
			let src_released = info.released

let create_div = createNode('div')
create_div.id = 'game_info'
create_div.innerHTML =
`<hr>
<h3><u>Genres: </u> <br>
${src_genre}</h3>
<h3><u>Plataforms: </u> <br>
${src_plataforms}</h3>
<h3><u>Tags: </u> <br>
${src_tags}</h3>
<h3><u>Released: </u> <br>
${src_released}</h3>
`;
NAMEGAME.side_right.appendChild(create_div)



fetch(`https://api.rawg.io/api/games/${src_id}?key=f6c2f13476104dfcad2b2c3f1f364f84`)
.then(response => {
	return response.json()
})
.then((data) => {
let indata = data
// ---------------Buscar descripción
let src_desc = indata.description
// ---------------Buscar Website
let src_website = indata.website

let create_h3 = createNode('h3')
create_h3.innerHTML =
`<u>Website: </u> <br>
<a href="${src_website}">${src_website}</a>
`;
let src_game_info = document.getElementById('game_info');
append(src_game_info, create_h3)

let src_desc_msr = document.getElementById('desc_msr');
if (src_desc_msr != src_desc_msr) {
	let create_div = createNode('div')
	create_div.innerHTML =
	`<hr>
	<h3><u>Description</u></h3>
	<p>${src_desc}</p> <hr>`;

	append(NAMEGAME.side_right, create_div)
}
})
    }

  })
})
