import { DataProduct } from "../ts/types";

export function setDisplayFlex(node: HTMLElement): void {
  if (node.classList.contains('d-none')) return node.classList.replace('d-none', 'd-flex');
}

export function setDisplayNone(node: HTMLElement): void {
  if (node.classList.contains('d-flex')) return node.classList.replace('d-flex', 'd-none');
}

export function toggleDisplayTemporarily(node: HTMLElement, time: number): void {
  if (node.classList.contains('d-none')) {
    node.classList.replace('d-none', 'd-flex')
    setTimeout(function() {
      node.classList.replace('d-flex', 'd-none')
    }, time)
  }
}

export function toggleVisibilityTemporarily(node: HTMLElement, time: number): void {
  node.classList.replace('v-hidden', 'v-visible')
  setTimeout(function() {
    node.classList.replace('v-visible', 'v-hidden')
  }, time)
}


export async function fetchData(url: string): Promise<[] | undefined> {
  const response: [] = await fetch(url)
    .then(res => res.ok ?res.json() :Promise.reject())
    .catch(err => console.error(err))

  if (!response) return undefined
  return response
}

export async function fetchProduct(url: string, cb: (data: DataProduct[]) => void): Promise<void> {
  const data: (DataProduct[] | undefined | void) = await fetchData(url)
  if (!data) throw new Error('Fetch error')
  cb(data)
}

// arr = Que cosa injectamos;
// Where = Donde lo injectamos;
// Who = Con que funcion injectamos
export function injectArrayInDOM(arr: any[], where: HTMLElement, who: (arg0: any) => string): void {
  arr.forEach(item => where.innerHTML += who(item))
}

export function injectSingleInDOM(thing: any | undefined, where: HTMLElement, who: (arg0: any) => string): void {
  where.innerHTML += who(thing)
}

export function differenceDays(timeAgo: string): number {
  const datePast: number = (new Date(timeAgo)).getTime()
  const dateNow: number = (new Date()).getTime()

  const difference: number = Math.abs(dateNow - datePast)
  const daysAgo: number = Math.ceil(difference/(1000 * 3600 * 24))
  return daysAgo
}