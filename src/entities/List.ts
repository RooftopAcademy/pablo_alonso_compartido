import {
  CompareByProps,
  OrderModeInterface
} from '../interfaces/types'

export default abstract class List {

  public items: any[]
  public result: any[]
  public cache: Map<string, any[]>
  public keysAndOrder: string

  constructor() {
    this.items = []
    this.result = []
    this.cache = new Map
    this.keysAndOrder = ''
  }

  setSort(obj: OrderModeInterface) {
    this.result = [...this.items]
    /**
     * Se setea las keys y el modo de ordenamiento (ascendente o descendente).
     */
    this.keysAndOrder = obj.toString()

    /**
     * Si el las keys y el modo ya se solicitaron antes se retorna.
     */
    if ( this.cache.has(obj.toString()) ) return

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
    this.cache.set(obj.toString(), this.result)
  }

  /**
   * Ordena segun un una propiedad del objeto y un modo: 1 'ascendente'; -1 'descendente';
   */
  public sortBy(keys: string[], mode: number[]): any[] {
    let i = 0
    return [...this.result].sort((a,b) => this.compareBy({a, b, keys, mode, i}))
  }

  /**
   * Compara dos objetos con la key o keys dadas
   * Si los valores de la propiedad son iguales se llama nuevamente a la funcion comparando la siguiente propiedad
   * Si la siguiente propiedad no existe se devuelve 0
   */
   public compareBy({a, b, keys, mode, i}: CompareByProps): number {

    if ((a)[keys[i]] > (b)[keys[i]]) return 1 * mode[i]

    if ((a)[keys[i]] < (b)[keys[i]]) return -1 * mode[i]

    i++

    if (!keys[i]) return 0

    return this.compareBy({a,b, keys, mode, i})
  }

  public get(): any[] {
    const result = this.cache.get(this.keysAndOrder) as any[]
    if (!result) return this.items
    return result
  }
}