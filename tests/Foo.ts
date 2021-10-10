const data: ProductInterface[] = [
  {
    "id": "",
    "picture": "",
    "title": "A",
    "author": "Bb",
    "description": "",
    "price": 50,
    "comments": [],
    "category": [],
    "isAvaliable": true
  },
  {
    "id": "",
    "picture": "",
    "title": "A",
    "author": "Bb",
    "description": "",
    "price": 40,
    "comments": [],
    "category": [],
    "isAvaliable": true
  },
  {
    "id": "",
    "picture": "",
    "title": "B",
    "author": "Ae",
    "description": "",
    "price": 60,
    "comments": [],
    "category": [],
    "isAvaliable": true
  },
  {
    "id": "",
    "picture": "",
    "title": "B",
    "author": "Ae",
    "description": "",
    "price": 40,
    "comments": [],
    "category": [],
    "isAvaliable": true
  },
  {
    "id": "",
    "picture": "",
    "title": "B",
    "author": "Ab",
    "description": "",
    "price": 41,
    "comments": [],
    "category": [],
    "isAvaliable": true
  },
  {
    "id": "",
    "picture": "",
    "title": "Z",
    "author": "Be",
    "description": "",
    "price": 69,
    "comments": [],
    "category": [],
    "isAvaliable": true
  },
  {
    "id": "",
    "picture": "",
    "title": "C",
    "author": "Be",
    "description": "",
    "price": 66,
    "comments": [],
    "category": [],
    "isAvaliable": true
  },
  {
    "id": "",
    "picture": "",
    "title": "Z",
    "author": "Be",
    "description": "",
    "price": 60,
    "comments": [],
    "category": [],
    "isAvaliable": true
  },
  {
    "id": "",
    "picture": "",
    "title": "D",
    "author": "Si",
    "description": "",
    "price": 54,
    "comments": [],
    "category": [],
    "isAvaliable": true
  }
]

interface ProductCommentInterface {
  date: string
  username: string
  message: string
}
interface ProductInterface {
  id: string
  picture: string
  title: string
  author: string
  description: string
  price: number
  comments: ProductCommentInterface[]
  category: string[]
  isAvaliable: boolean
}

interface compareByProps {
  a: {[property: string]: string}
  b: {[property: string]: string}
  keys: string[]
  mode: number[]
  i: number
}

type OrderModeInterface = {
  [a: string]: OrderMode
}

enum OrderMode {
  asc = 1,
  desc = -1,
}
abstract class List {

  public items: any[]
  public result: any[]
  public cache: Map<OrderModeInterface, ProductInterface[]>
  public keysAndOrder: OrderModeInterface

  constructor(data: any[]) {
    this.items = data
    this.result = [...this.items]
    this.cache = new Map
    this.keysAndOrder = {'default': 1}
  }

  setSort(obj: OrderModeInterface) {
    /**
     * Se setea las keys y el modo de ordenamiento (ascendente o descendente).
     */
    this.keysAndOrder = obj

    /**
     * Si el las keys y el modo ya se solicitaron antes se retorna.
     */
    if (this.cache.has(obj)) return

    /**
     * Se guardan las keys para usarlas como criterio de ordenamiento.
     */
    const keys: string[] = Object.keys(obj)

    /**
     * Se guardan los valores del modo de ordenamiento; 
     * 1 = ascendente; -1 = descendiente;
     */
    const mode: number[] = Object.values(obj)

    /**
     * Se ordena tantas veces como keys hayan
     */
    this.result = this.sortBy(keys, mode)

    /**
     * Se guarda en el cache las keys y el modo de ordenamiento, y el resultado del ordenamiento
     */
    this.cache.set(obj, this.result)
  }

  // public orderBy(sorted: ProductInterface[], order?: 'desc' | 'asc'): ProductInterface[] {
  //   return (order==='desc')
  //     ? sorted.reverse()
  //     : sorted
  // }
  public sortBy(keys: string[], mode: number[]): any[] {
    let i = 0
    return [...this.result].sort((a,b) => this.compareBy({a, b, keys, mode, i}))
  }

  /**
   * Compara dos objetos con la key o keys dadas
   * Si los valores de la propiedad son iguales se llama nuevamente a la funcion comparando la siguiente propiedad
   * Si la siguiente propiedad no existe se devuelve 0
   */
   public compareBy({a, b, keys, mode, i}: compareByProps): number {
    if ((a)[keys[i]] > (b)[keys[i]]) return 1 * mode[i]

    if ((a)[keys[i]] < (b)[keys[i]]) return -1 * mode[i]

    i++

    if (!keys[i]) return 0

    return this.compareBy({a,b, keys, mode, i})
  }

  public get() {
    return this.cache.get(this.keysAndOrder)
  }
}

export default class Catalogue extends List {

  public add(p: ProductInterface[]): void {
    this.items = p
  }
}

const catalogue = new Catalogue(data)

catalogue.setSort({
  'title': OrderMode.asc,
  'author': OrderMode.asc,
  'price': OrderMode.asc
})
console.log(`
_____________________________________________________
__ DISORDERED PRODUCTS:
_____________________________________________________
`)
console.table(data)
console.log(`
_____________________________________________________
__ ORDERED PRODUCTS:
_____________________________________________________
`)
console.table(catalogue.get())