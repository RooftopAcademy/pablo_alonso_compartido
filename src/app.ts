import index from './pages/index'
import productList from './pages/productlist'
import productDetails from './pages/productdetails'

const PATH: string = window.location.pathname;

(function app(path: string): void {
  if (path === '/pablo_alonso_compartido/index.html') return index()
  if (path === '/pablo_alonso_compartido/productlist.html') return productList()
  if (path === '/pablo_alonso_compartido/productdetails.html') return productDetails()
  return index()
})(PATH)