import index from './pages/indexPage'
import productList from './pages/productlistPage'
import productDetails from './pages/productdetailsPage'

const PATH: string = window.location.pathname;

(function app(path: string) : void {
  switch (path) {
    case '/':
      index()
      break
    case '/list':
      productList()
      break
    case '/details':
      productDetails()
      break
  }
})(PATH)

