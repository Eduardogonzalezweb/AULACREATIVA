// Inspired by: https://dribbble.com/shots/3545421-017-Email-receipt

function $(e) { return document.querySelector(e); }

var next = $('.next');
var prev = $('.prev');
var index = 0;

var randomText = [
  {
    title: "¡Estrategias prácticas y comprobadas para escuela secundaria!",
    desc: "Somos Aula Creativa, un sitio web diseñado para ayudar a docentes de secundaria en las materias de Español y Matemáticas, aquí encontrarás las mejores estrategias y un foro para compartir las que mejor te han funcionado. Página enriquecida por docentes frente a grupo y docentes en formación. Recopilado por Eduardo González."  
  },
  {
    title: "Estrategias para primer grado",
    desc: "Aquí, podrás encontrar las mejores estrategias de Matemáticas y Español para primer grado."
  },
  {
    title: "Estrategias para segundo grado",
    desc: "Aquí, podrás encontrar las mejores estrategias de Matemáticas y Español para segundo grado."
  },
  {
    title: "Estrategias para tercer grado",
    desc: "Aquí, podrás encontrar las mejores estrategias de Matemáticas y Español para tercer grado."
  } 
];

$('.content__title').innerHTML = randomText[0].title;
$('.content__desc').innerHTML = randomText[0].desc;

next.addEventListener('click', function() {
  if (index >= 0 && index <= 2) {
    toggleView();
    setTimeout(function() {
      $('.content__title').innerHTML = randomText[index].title;
      $('.content__desc').innerHTML = randomText[index].desc;      
    }, 500)
    $('main').classList.remove('view'+index+'--active');
    $('main').classList.add('view'+(index + 1)+'--active');
    index++;
  }
}, false);

prev.addEventListener('click', function() {
  if (index > 0 && index <= 3) {
    toggleView();
    setTimeout(function() {
      $('.content__title').innerHTML = randomText[index].title;
      $('.content__desc').innerHTML = randomText[index].desc;      
    }, 500)
    $('main').classList.remove('view'+(index)+'--active');
    $('main').classList.add('view'+(index - 1)+'--active');
    index--;
  }
}, false)

function toggleView() {
    $('main').classList.add('fade-out');
    setTimeout(function() {
      $('main').classList.remove('fade-out');
    }, 500)
}