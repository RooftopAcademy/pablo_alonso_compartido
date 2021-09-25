import index from './index'
import productList from './productlist'
import productDetails from './productdetails'

const PATH: string = window.location.pathname;

(function app(path: string): void {
  if (path === '/pablo_alonso_compartido/index.html') return index()
  if (path === '/pablo_alonso_compartido/productlist.html') return productList()
  if (path === '/pablo_alonso_compartido/productdetails.html') return productDetails()
  return index()
})(PATH)