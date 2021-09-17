// Ejercicio: Clase 14/09/2021 (2/3)
// guardamos los anchors que tenga la clase "sold-out";
const soldOut = document.querySelectorAll('.sold-out');
// guardamos el mensaje que se va a mostrar;
const notAvaliable = document.getElementById('not-avaliable');

function toggleDisplayTemporarily(node) {
  if (node.classList.contains('d-none')) {
    node.classList.replace('d-none', 'd-flex');
    setTimeout(function() {
      node.classList.replace('d-flex', 'd-none');
    }, 3000)
  }
  return
};
// por cada uno de los anchors se le asigna un event listener que reacciona al 'click'
soldOut.forEach(el => el.addEventListener('click', function() {
  toggleDisplayTemporarily(notAvaliable)
}));


// Ejercicio: Clase 14/09/2021 (3/3)
// Verificamos que si el usuario scrollea debajo de mitad de pagina 
const goUp = document.getElementById('go-up');
const halfPage = document.body.clientHeight / 2;

function isHalfPage() {
  if (window.scrollY > halfPage) return true
  return false
};

function setDisplayFlex(node) {
  if (node.classList.contains('d-none')) return node.classList.replace('d-none', 'd-flex');
  return
};

function setDisplayNone(node) {
  if (node.classList.contains('d-flex')) return node.classList.replace('d-flex', 'd-none');
  return
};

window.addEventListener('scroll', () => {
  if (isHalfPage()) return setDisplayFlex(goUp)
  return setDisplayNone(goUp)
})