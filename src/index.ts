import { toggleVisibilityTemporarily } from './utils/utils'

function index(): void {
  // Ejercicio: Clase 13/09/2021
  // Guardamos el nodo donde voy a extraer el dato
  saveDataAnchor()

  function saveDataAnchor(): void {
    const anchor: HTMLElement | null = document.getElementById('a');
    // Si el elemento con id = 'a' existe:
    if (!anchor) return
    // Guardo el dato en una variable
    const data: string = anchor.innerText;
    // Reemplazo el dato en el elemento.
    anchor.innerText = data;
  }


  // Ejercicio: Clase 14/09/2021 (1/3)
  // Validación de entrada de datos en un formulario
  const newsLetter = document.getElementById('news-letter') as HTMLElement
  const successfulMessage = document.getElementById('successful-message') as HTMLElement
  const invalidMessage = document.getElementById('invalid-message') as HTMLElement

  const emailsBanned: string[] = [
    'aquiles_bailo@yahoo.com',
    'susana_oria@hotmail.com',
    'aquiles_bailo@hotmail.com',
    'armando_estebanquito@gmail.com',
    'example@gmail.com',
    'example@yahoo.com',
    'example@hotmail.com',
    'malapalabra@gmail.com'
  ]

  addListenerForm()

  function addListenerForm (): void {
    newsLetter.addEventListener('submit', function(e: Event): void {
      e.preventDefault()
      console.log('Dentro del boton')
      const inputEmail = newsLetter.querySelector('input[name=email]') as HTMLInputElement
      const email: string = inputEmail.value
    
      if (emailsBanned.includes(email)) return toggleVisibilityTemporarily(invalidMessage, 3000)
      return toggleVisibilityTemporarily(successfulMessage, 3000)
    })
  }
}

export default index