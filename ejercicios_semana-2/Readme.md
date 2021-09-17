## Detectar en el proyecto que estés realizando todos los objetos que encuentres.

- Tienda
- Producto
- Catalogo
- Carrito

## Describirlos a través de sus propiedades y métodos

#### (Aclarar que todos los productos tenen 1 unidad de stock. El carrito solo va a poder tener 1 producto, para guardar lo que se iba a comprar).

| Shop        | nombre         | tipo      | recibe  | retorna |
|-------------|----------------|-----------|---------|---------|
| *propiedad* | cart           | Cart      | -       | -       |
| *propiedad* | catalogue      | Catalogue | -       | -       |
| *metodo*    | fetchProduct() | -         | -       | Array   |
| *metodo*    | getCart()      | -         | -       | Cart    |

---

| Product     | nombre       | tipo    | recibe | retorna |
|-------------|--------------|---------|--------|---------|
| *propiedad* | title        | String  | -      | -       |
| *propiedad* | picture      | String  | -      | -       |
| *propiedad* | author       | String  | -      | -       |
| *propiedad* | description  | String  | -      | -       |
| *propiedad* | price        | Number  | -      | -       |
| *propiedad* | category     | Array   | -      | -       |
| *propiedad* | isAvailable  | Boolean | -      | -       |
| *metodo*    | buyProduct() | -       | -      | -       |

---

| Catalogue    | nombre        | tipo   | recibe  | retorna |
|--------------|---------------|--------|-------- |---------|
| *propiedad*  | product       | Array  | -       | -       |
| *metodo*     | addProduct()  | -      | Product | -       |
| *metodo*     | getProduct()  | -      | -       | Array   |

---

| Cart        | propiedades     | tipo    | recibe            | retorna |
|-------------|-----------------|---------|-------------------|---------|
| *propiedad* | product         | Product | -                 | -       |
| *metodo*    | addProduct()    | -       | Product = Object  | -       |
| *metodo*    | removeProduct() | -       | -                 | -       |
| *metodo*    | buyCart()       | -       | -                 | -       |