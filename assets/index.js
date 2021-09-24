// Ejercicio: Clase 13/09/2021
// Guardamos el nodo donde voy a extraer el dato
const anchor = document.getElementById('a');
// Guardo el dato en una variable
const data = anchor.innerText;
// Reemplazo el dato en el elemento.
anchor.innerText = data;


// Ejercicio: Clase 14/09/2021 (1/3)
// Validación de entrada de datos en un formulario
const newsLetter = document.getElementById('news-letter');
const successfulMessage = document.getElementById('successful-message');
const invalidMessage = document.getElementById('invalid-message');

function showMessage(el) {
  el.classList.replace('v-hidden', 'v-visible');
    setTimeout(function() {
      el.classList.replace('v-visible', 'v-hidden');
    }, 3000)
}


const emailsBanned = [
  'aquiles_bailo@yahoo.com',
  'susana_oria@hotmail.com',
  'aquiles_bailo@hotmail.com',
  'armando_estebanquito@gmail.com',
  'example@gmail.com',
  'example@yahoo.com',
  'example@hotmail.com',
  'malapalabra@gmail.com'
  ]
newsLetter.addEventListener('submit', function(e) {
  e.preventDefault()

  const email = this.email.value
  if (emailsBanned.includes(email)) {
    return showMessage(invalidMessage)
  }
  return showMessage(successfulMessage)
});