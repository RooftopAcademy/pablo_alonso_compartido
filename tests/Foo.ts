const data: ProductInterface[] = [
  {
    "id": "v5tgwWfv32te5gf8GcvX",
    "picture": "assets/nft/i8tgeWfv32te5gf8GcvX.jpg",
    "title": "Replicator",
    "author": "Beeple",
    "description": "Lorem ipsum bla bla bla...",
    "price": 4000000,
    "comments": [
    ],
    "category": [
      "most-valuable",
      "colorful"
    ],
    "isAvaliable": true
  },
  {
    "id": "v5tgwWfv32te5gf8GcvX",
    "picture": "assets/nft/i8tgeWfv32te5gf8GcvX.jpg",
    "title": "Replicator",
    "author": "Beeple",
    "description": "Lorem ipsum bla bla bla...",
    "price": 5000000,
    "comments": [
    ],
    "category": [
      "most-valuable",
      "colorful"
    ],
    "isAvaliable": true
  },
  {
    "id": "v5tgwWfv32te5gf8GcvX",
    "picture": "assets/nft/i8tgeWfv32te5gf8GcvX.jpg",
    "title": "Replicator",
    "author": "Beeple",
    "description": "Lorem ipsum bla bla bla...",
    "price": 3000000,
    "comments": [
    ],
    "category": [
      "most-valuable",
      "colorful"
    ],
    "isAvaliable": true
  },
  {
    "id": "v5tgwWfv32te5gf8GcvX",
    "picture": "assets/nft/i8tgeWfv32te5gf8GcvX.jpg",
    "title": "Replicator",
    "author": "Aeeple",
    "description": "Lorem ipsum bla bla bla...",
    "price": 4000000,
    "comments": [
    ],
    "category": [
      "most-valuable",
      "colorful"
    ],
    "isAvaliable": true
  },
  {
    "id": "CdeG4by6YE826o0RegX1",
    "picture": "assets/nft/CdeG4by6YE826o0RegX1.png",
    "title": "Replicator",
    "author": "Mas Dog Jones",
    "description": "Lorem ipsum bla bla bla...",
    "price": 4114000,
    "comments": [
    ],
    "category": [
      "most-valuable",
      "strange"
    ],
    "isAvaliable": true
  },
  {
    "id": "RmJ5Di91zS04t21LmuuW",
    "picture": "assets/nft/RmJ5Di91zS04t21LmuuW.png",
    "title": "Everydays - The First 5000 Days",
    "author": "Beeple",
    "description": "Lorem ipsum bla bla bla...",
    "price": 69346250,
    "comments": [
    ],
    "category": [
      "most-valuable",
      "colorful"
    ],
    "isAvaliable": true
  },
  {
    "id": "9EfJ41XbxZ8U5Yfry0lI",
    "picture": "assets/nft/9EfJ41XbxZ8U5Yfry0lI.png",
    "title": "CROSSROAD",
    "author": "Beeple",
    "description": "Lorem ipsum bla bla bla...",
    "price": 6666660,
    "comments": [
    ],
    "category": [
      "colorful",
      "strange"
    ],
    "isAvaliable": true
  },
  {
    "id": "i8tgeWfv32te5gf8GcvX",
    "picture": "assets/nft/i8tgeWfv32te5gf8GcvX.jpg",
    "title": "Ocean Front",
    "author": "Beeple",
    "description": "Lorem ipsum bla bla bla...",
    "price": 6000000,
    "comments": [
    ],
    "category": [
      "most-valuable",
      "colorful"
    ],
    "isAvaliable": true
  },
  {
    "id": "t5y7Id2bRT93CxZXuQaB",
    "picture": "assets/nft/t5y7Id2bRT93CxZXuQaB.png",
    "title": "World Wide Web source code",
    "author": "Sir Tim Berners-Lee",
    "description": "Lorem ipsum bla bla bla...",
    "price": 5430000,
    "comments": [
    ],
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
// catalogue.add(data)

catalogue.setSort({
  'title': OrderMode.asc,
  'author': OrderMode.asc,
  'price': OrderMode.asc
})
console.table(catalogue.get())