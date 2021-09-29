import index from './pages/index'
import productList from './pages/productlist'
import productDetails from './pages/productdetails'

const PATH: string = window.location.pathname;

(function app(path: string) : void {
  switch (path) {
    case '/pablo_alonso_compartido/index.html':
      index()
      break
    case '/pablo_alonso_compartido/productlist.html':
      productList()
      break
    case '/pablo_alonso_compartido/productdetails.html':
      productDetails()
      break
  }
})(PATH)

