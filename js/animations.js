// ---------------------------------Animación de Inicio

const side_left = document.querySelector('#side_left')
const side_right = document.querySelector('#side_right')
const nav_button = document.querySelector('#nav_button')


// ------------------Lado Izquierdo

const time_effect_nav = nav_time();

function nav_time(){
  setTimeout(function(){
nav_button.style.display = 'flex';
nav_button.classList.add('magictime', 'slideLeftReturn')
  },1000)
}


const time_effect_left = left_time()

function left_time() {
  setTimeout(function(){
side_left.style.display = 'flex';
side_left.classList.add('magictime', 'vanishIn')
  },2000)
}

// ------------------Lado Derecho
const time_effect_right = right_time()

function right_time() {
  setTimeout(function(){
side_right.style.display = 'block';
side_right.classList.add('magictime', 'swashIn')
  },5000)
}

// ------------------Animaciones
