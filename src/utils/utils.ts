import { ProductInterface } from "../interfaces/types";

/**
 * Ingresa un nodo y este pasa de display:none; a display:flex;
 */
export function setDisplayFlex(node: HTMLElement): void {
  if (node.classList.contains('d-none')) {
    node.classList.replace('d-none', 'd-flex');
  }
}

/**
 * Ingresa un nodo y este pasa de display:flex; a display:none;
 */
export function setDisplayNone(node: HTMLElement): void {
  if (node.classList.contains('d-flex')) {
    node.classList.replace('d-flex', 'd-none');
  }
}

/**
 * Ingresa un nodo y un tiempo
 * Las clases pasan de display:flex; a display:none;
 * Luego del tiempo ingresado vuelve de display:flex; a display:none;
 */
export function toggleDisplayTemporarily(node: HTMLElement, time: number): void {
  if (node.classList.contains('d-none')) {
    node.classList.replace('d-none', 'd-flex')
    setTimeout(function() {
      node.classList.replace('d-flex', 'd-none')
    }, time)
  }
}

/**
 * Ingresa un nodo y un tiempo
 * Las clases pasan de visibility:hidden; a visibility:visible;
 * Luego del tiempo ingresado vuelve de visibility:visible; a visibility:hidden;
 */
export function toggleVisibilityTemporarily(node: HTMLElement, time: number): void {
  node.classList.replace('v-hidden', 'v-visible')
  setTimeout(function() {
    node.classList.replace('v-visible', 'v-hidden')
  }, time)
}

/**
 * Ingresa una url y devuelve undefined o la respuesta 
 */
export async function fetchData(url: string): Promise<[] | undefined> {
  const response: [] = await fetch(url)
    .then((res: Response) => res.ok ?res.json() :Promise.reject())
    .catch((err: Error) => console.error(err))

  if (!response) return undefined
  return response
}

/**
 * Ingresa una url y un callback
 * Luego si el dato no es falso se ejecuta el callback, sino se lanza un error.
 */
export async function fetchProduct(url: string, cb: (data: ProductInterface[]) => void): Promise<void> {
  const data: (ProductInterface[] | undefined | void) = await fetchData(url)
  if (!data) throw new Error('Fetch error')
  cb(data)
}

/**
 * arr = Que cosa injectamos;
 * Where = Donde lo injectamos;
 * Who = Con que funcion injectamos
 * Injecta varios elementos en el DOM dependiendo de la cantidad de elementos en el array ingresado.
 */

export function injectArrayInDOM(arr: any[], where: HTMLElement, who: (arg0: any) => string): void {
  arr.forEach(item => where.innerHTML += who(item))
}

/**
 * arr = Que cosa injectamos;
 * Where = Donde lo injectamos;
 * Who = Con que funcion injectamos
 * Injecta un solo elemento en el DOM.
 */
export function injectSingleInDOM(thing: any | undefined, where: HTMLElement, who: (arg0: any) => string): void {
  where.innerHTML += who(thing)
}

/**
 * Devuelve la diferencia en numeros de dias entre una fecha ingresada y la fecha actual
 */
export function differenceDays(timeAgo: string): number {
  const datePast: number = (new Date(timeAgo)).getTime()
  const dateNow: number = (new Date()).getTime()

  const difference: number = Math.abs(dateNow - datePast)
  const daysAgo: number = Math.ceil(difference/(1000 * 3600 * 24))
  return daysAgo
}

/**
 * Retorna true o false dependiendo si el usuario esta o no por debajo de la altura total de la pagina.
 * true = Esta por dejabo.
 * false = Esta por encima.
 */
export function isHalfPage(): boolean {
  const halfPage: number = document.body.clientHeight / 2;
  const userPositionY = window.scrollY
  return userPositionY > halfPage
};

/**
 * Retorna true o false dependiendo si las dos strings ingresadas son iguales o no.
 * true = Son iguales.
 * false = No son iguales.
 */
export function isEqualString(a: string, b: string): boolean {
  return a === b
}

/**
 * Retorna el ID de la query en la url.
 * En este caso esta hecho para la ID de un producto.
 */
export function getProductIDFromPath(path: string): string {
  const searchTerm: string = '='
  const productID: string = path
    .slice(path.indexOf(searchTerm))
    .replace(searchTerm, '')
  return productID
}