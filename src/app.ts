import index from './pages/indexPage'
import productList from './pages/productlistPage'
import productDetails from './pages/productdetailsPage'

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

