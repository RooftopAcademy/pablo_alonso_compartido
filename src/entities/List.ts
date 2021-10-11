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
    this.keysAndOrder = JSON.stringify(obj)

    /**
     * Si el las keys y el modo ya se solicitaron antes se retorna.
     */
    if ( this.cache.has(JSON.stringify(obj)) ) return

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
    this.cache.set(JSON.stringify(obj), this.result)
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
     /**
      * Si el mode es 0 entonces no se filtra y se pasa a la siguiente key aumentando el valor de 'i' en 1
      */
    if (mode[i] === 0) {
      i++
      return this.compareBy({a,b, keys, mode, i})
    }

    /**
     * Se compara la propiedad segun key entre a y b.
     * Si el modo es -1 el resultado cambia de signo, de lo contrario permanecera lo mismo.
     * Esto permite dar un orden ascendente o descendente.
     */
    if ((a)[keys[i]] > (b)[keys[i]]) return 1 * mode[i]

    if ((a)[keys[i]] < (b)[keys[i]]) return -1 * mode[i]

    /**
     * Se incrementa 'i'
     * ya que las propiedades son iguales se pasa a comparar la siguiente 'key' dentro del array de 'keys'
     */
    i++

    /**
     * Si no hay un siguiente elemento dentro de 'keys' se retorna 0
     */
    if (!keys[i]) return 0

    /**
     * Si existe un siguiente elemento dentro de 'keys' la funcion se llama a si misma.
     *
     * Tener en cuenta que i va aumentando y al llamar otra vez a la funcion esta va a comparar diferentes propiedades,
     * asi hasta que no quede ninguna propiedad siguiente en 'keys'.
     */
    return this.compareBy({a,b, keys, mode, i})
  }

  public get(): any[] {
    return this.items
  }

  public getSort(key: OrderModeInterface) {
    const result = this.cache.get(JSON.stringify(key)) as (any[] | undefined)
    if (!result) return this.items
    return result
  }
}