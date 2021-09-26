(()=>{"use strict";var t={659:(t,e)=>{Object.defineProperty(e,"__esModule",{value:!0});var n=function(){function t(){this.products=[]}return t.prototype.add=function(t){if(this.getAll().length>0)throw new Error("Only one product is allowed in the cart.");this.products.push(t)},t.prototype.getAll=function(){return this.products},t.prototype.getById=function(t){return this.products.find((function(e){return e.id===t}))},t.prototype.removeAll=function(){this.products=[]},t.prototype.removeByIndex=function(t){this.products.splice(t)},t.prototype.buyCart=function(){this.products.map((function(t){return t.notAvaliable()})),this.removeAll()},t}();e.default=n},910:(t,e)=>{Object.defineProperty(e,"__esModule",{value:!0});var n=function(){function t(){this.products=[]}return t.prototype.add=function(t){this.products.push(t)},t.prototype.getAll=function(){return this.products},t.prototype.getById=function(t){return this.products.find((function(e){return e.id==t}))},t.prototype.getByCategory=function(t){return this.products.filter((function(e){return e.category.includes(t)}))},t}();e.default=n},366:(t,e)=>{Object.defineProperty(e,"__esModule",{value:!0});var n=function(){function t(){this._id="",this._picture="",this._title="",this._author="",this._description="",this._price=0,this._comment=[],this._category=[],this._isAvaliable=!0}return Object.defineProperty(t.prototype,"id",{get:function(){return this._id},set:function(t){this._id=t},enumerable:!1,configurable:!0}),Object.defineProperty(t.prototype,"picture",{get:function(){return this._picture},set:function(t){this._picture=t},enumerable:!1,configurable:!0}),Object.defineProperty(t.prototype,"title",{get:function(){return this._title},set:function(t){this._title=t},enumerable:!1,configurable:!0}),Object.defineProperty(t.prototype,"author",{get:function(){return this._author},set:function(t){this._author=t},enumerable:!1,configurable:!0}),Object.defineProperty(t.prototype,"description",{get:function(){return this._description},set:function(t){this._description=t},enumerable:!1,configurable:!0}),Object.defineProperty(t.prototype,"price",{get:function(){return this._price},set:function(t){this._price=t},enumerable:!1,configurable:!0}),Object.defineProperty(t.prototype,"comment",{get:function(){return this._comment},set:function(t){this._comment=t},enumerable:!1,configurable:!0}),Object.defineProperty(t.prototype,"category",{get:function(){return this._category},set:function(t){this._category=t},enumerable:!1,configurable:!0}),Object.defineProperty(t.prototype,"isAvaliable",{get:function(){return this._isAvaliable},set:function(t){this._isAvaliable=t},enumerable:!1,configurable:!0}),t.prototype.notAvaliable=function(){this._isAvaliable=!1},t}();e.default=n},210:function(t,e,n){var r=this&&this.__importDefault||function(t){return t&&t.__esModule?t:{default:t}};Object.defineProperty(e,"__esModule",{value:!0});var i=r(n(659)),o=r(n(910)),a=r(n(366)),c=function(){function t(){this.cart=new i.default,this.catalogue=new o.default}return t.prototype.getCart=function(){return this.cart},t.prototype.getCatalogue=function(){return this.catalogue},t.prototype.loadProduct=function(t){var e=this;if(t)return t.forEach((function(t){var n=new a.default;n.id=t.id,n.picture=t.picture,n.title=t.title,n.author=t.author,n.description=t.description,n.price=t.price,n.comment=t.comments,n.category=t.category,n.isAvaliable=t.isAvaliable,e.catalogue.add(n)}))},t}();e.default=c},752:function(t,e,n){var r=this&&this.__importDefault||function(t){return t&&t.__esModule?t:{default:t}};Object.defineProperty(e,"__esModule",{value:!0});var i,o=r(n(607)),a=r(n(843)),c=r(n(603));"/pablo_alonso_compartido/index.html"===(i=window.location.pathname)?(0,o.default)():"/pablo_alonso_compartido/productlist.html"===i?(0,a.default)():"/pablo_alonso_compartido/productdetails.html"===i?(0,c.default)():(0,o.default)()},316:(t,e)=>{Object.defineProperty(e,"__esModule",{value:!0}),e.default=function(t){return'\n  <li class="cart-item" id="'+t.id+'">\n    <img class="cart-thumbnail" src="'+t.picture+'" alt="'+t.title+"< by "+t.author+'">\n    <div class="cart-text">\n      <p class="cart-title">'+t.title+'</p>\n      <p class="cart-author">'+t.author+'</p>\n    </div>\n    <button class="btn cart-remove-item js-remove-from-cart" data-product-id="'+t.id+'">\n      <svg xmlns="http://www.w3.org/2000/svg" width="18" height="21" viewBox="0 0 18 21" fill="none">\n        <rect x="2" y="1" width="14" height="20" rx="2" fill="#FF4444"/>\n        <rect y="1" width="18" height="2" rx="1" fill="#FF4444"/>\n        <rect x="7" width="4" height="2" rx="1" fill="#FF4444"/>\n        <rect x="6" y="5" width="14" height="2" rx="1" transform="rotate(90 6 5)" fill="white"/>\n        <rect x="10" y="5" width="14" height="2" rx="1" transform="rotate(90 10 5)" fill="white"/>\n        <rect x="14" y="5" width="14" height="2" rx="1" transform="rotate(90 14 5)" fill="white"/>\n        </svg>\n    </button>\n  </li>\n  '}},22:(t,e,n)=>{Object.defineProperty(e,"__esModule",{value:!0});var r=n(974);e.default=function(t){if(!t)return"<h3>There was an error loading the comments :(</h3>";var e=(0,r.differenceDays)(t.date);return'\n  <li class="comments-item">\n    <div class="comments-pic">\n      <svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" viewBox="0 0 40 40" fill="none">\n        <rect width="40" height="40" rx="4" fill="white"/>\n        <path d="M33.433 30.8381C34.2129 33.4072 32.2904 36 29.6055 36L10.3945 36C7.70962 36 5.78709 33.4072 6.56701 30.8381L8.41948 24.7358C8.78496 23.5319 9.69558 22.5701 10.8777 22.1394L16.0867 20.2417C16.5255 20.0818 16.9868 20 17.4538 20C18.8641 20 22.0073 20 23.25 20C24.3349 20 27.4256 21.2585 29.3603 22.0951C30.4089 22.5486 31.1899 23.449 31.5218 24.5423L33.433 30.8381Z" fill="black"/>\n        <circle cx="20" cy="12" r="7" fill="black"/>\n      </svg>\n    </div>\n    <div class="comments-content">\n      <div class="comments-header">\n        <p class="comments-user">'+t.username+'</p>\n        <p class="comments-since">'+e+' days ago</p>\n      </div>\n      <p class="comments-comment">'+t.message+"</p>\n    </div>\n  </li>\n  "}},403:(t,e)=>{Object.defineProperty(e,"__esModule",{value:!0}),e.default=function(t){return t?'\n    <img class="nft--img" src="'+t.picture+'" alt="'+t.title+" by "+t.author+'">\n    <h1 class="nft--title">'+t.title+'</h1>\n    <h2 class="nft--author">'+t.author+'</h2>\n    <p class="nft--details">'+t.description+'</p>\n    <h3 class="nft--price">$'+t.price+'</h3>\n    <button class="btn buy-now js-add-to-cart" data-product-id="'+t.id+'">Buy now</button>\n  ':"<h3>There was an error loading the product details :(</h3>"}},581:(t,e)=>{Object.defineProperty(e,"__esModule",{value:!0}),e.default=function(t){return t?'\n  <article class="nft">\n    <img class="nft--img" src="'+t.picture+'" alt="'+t.title+" by "+t.author+'">\n    <h2 class="nft--title">'+t.title+'</h2>\n    <p class="nft--author">'+t.author+'</p>\n    <div class="nft--anchors">\n      <a class="anchor details" href="productdetails.html?product='+t.id+'">Details</a>\n      <button class="btn buy-now js-add-to-cart" data-product-id="'+t.id+'">Buy now</button>\n    </div>\n  </article>\n  ':'<article class="nft"><h3>There was an error loading the products :(</h3></article>'}},607:(t,e,n)=>{Object.defineProperty(e,"__esModule",{value:!0});var r=n(974);e.default=function(){!function(){var t=document.getElementById("a");if(t){var e=t.innerText;t.innerText=e}}();var t=document.getElementById("news-letter"),e=document.getElementById("successful-message"),n=document.getElementById("invalid-message"),i=["aquiles_bailo@yahoo.com","susana_oria@hotmail.com","aquiles_bailo@hotmail.com","armando_estebanquito@gmail.com","example@gmail.com","example@yahoo.com","example@hotmail.com","malapalabra@gmail.com"];t.addEventListener("submit",(function(o){o.preventDefault(),console.log("Dentro del boton");var a=t.querySelector("input[name=email]").value;return i.includes(a)?(0,r.toggleVisibilityTemporarily)(n,3e3):(0,r.toggleVisibilityTemporarily)(e,3e3)}))}},603:function(t,e,n){var r=this&&this.__importDefault||function(t){return t&&t.__esModule?t:{default:t}};Object.defineProperty(e,"__esModule",{value:!0});var i=n(974),o=r(n(403)),a=r(n(22)),c=r(n(316)),l=r(n(210));e.default=function(){var t=new l.default,e=document.getElementById("cart-list");(0,i.fetchProduct)("https://my-json-server.typicode.com/Alonso-Pablo/api-nft/products",(function(n){t.loadProduct(n);var r,l,u,s=("=",(r=window.location.search).slice(r.indexOf("=")).replace("=",""));if(function(e){return!!t.getCatalogue().getById(e)}(s))return function(e){var n=document.getElementById("nft"),r=t.getCatalogue().getById(e);(0,i.injectSingleInDOM)(r,n,o.default)}(s),l=Array.from(document.getElementsByClassName("js-add-to-cart")),u=document.getElementById("added-to-cart"),l.forEach((function(n){n.addEventListener("click",(function(){if(n.dataset.productId){var r=t.getCatalogue().getById(n.dataset.productId);r&&(t.getCart().add(r),e&&(0,i.injectArrayInDOM)(t.getCart().getAll(),e,c.default),u&&((0,i.toggleDisplayTemporarily)(u,4e3),Array.from(document.getElementsByClassName("js-remove-from-cart")).forEach((function(e){e.addEventListener("click",(function(){if(e.dataset.productId){var n=t.getCart().getById(e.dataset.productId);if(n){var r=t.getCart().getAll().indexOf(n);t.getCart().removeByIndex(r),e.parentElement&&e.parentElement.remove()}}}))}))))}}))})),document.getElementById("cart-toggle").addEventListener("click",(function(){if(e)return e.classList.contains("d-none")?(0,i.setDisplayFlex)(e):(0,i.setDisplayNone)(e)})),document.getElementById("see-cart").addEventListener("click",(function(){e&&(0,i.setDisplayFlex)(e)})),void function(e){var n=document.getElementById("comments-list"),r=t.getCatalogue().getById(e);if(!r)return(0,i.injectSingleInDOM)(r,n,a.default);var o=r.comment;(0,i.injectArrayInDOM)(o,n,a.default)}(s);window.location.replace("notfound.html")}))}},843:function(t,e,n){var r=this&&this.__importDefault||function(t){return t&&t.__esModule?t:{default:t}};Object.defineProperty(e,"__esModule",{value:!0});var i=n(974),o=r(n(581)),a=r(n(316)),c=r(n(210));e.default=function(){var t,e;t=document.querySelectorAll(".sold-out"),e=document.getElementById("not-avaliable"),t.length>0&&e&&t.forEach((function(t){return t.addEventListener("click",(function(){(0,i.toggleDisplayTemporarily)(e,3e3)}))}));var n=document.getElementById("go-up");window.addEventListener("scroll",(function(){var t;if(n)return t=document.body.clientHeight/2,window.scrollY>t?(0,i.setDisplayFlex)(n):(0,i.setDisplayNone)(n)}));var r=new c.default,l=document.getElementById("cart-list");(0,i.fetchProduct)("https://my-json-server.typicode.com/Alonso-Pablo/api-nft/products",(function(t){var e,n,c,u,s,d;r.loadProduct(t),e=document.getElementById("all-nfts"),n=document.getElementById("most-valuable-nfts"),c=document.getElementById("colorful-nfts"),u=document.getElementById("strange-nfts"),r.getCatalogue().getAll().length||(e&&(0,i.injectSingleInDOM)(void 0,e,o.default),n&&(0,i.injectSingleInDOM)(void 0,n,o.default),c&&(0,i.injectSingleInDOM)(void 0,c,o.default),u&&(0,i.injectSingleInDOM)(void 0,u,o.default)),(0,i.injectArrayInDOM)(r.getCatalogue().getAll(),e,o.default),(0,i.injectArrayInDOM)(r.getCatalogue().getByCategory("most-valuable"),n,o.default),(0,i.injectArrayInDOM)(r.getCatalogue().getByCategory("colorful"),c,o.default),(0,i.injectArrayInDOM)(r.getCatalogue().getByCategory("strange"),u,o.default),s=Array.from(document.getElementsByClassName("js-add-to-cart")),d=document.getElementById("added-to-cart"),s.forEach((function(t){t.addEventListener("click",(function(){if(t.dataset.productId){var e=r.getCatalogue().getById(t.dataset.productId);e&&(r.getCart().add(e),l&&(0,i.injectArrayInDOM)(r.getCart().getAll(),l,a.default),d&&((0,i.toggleDisplayTemporarily)(d,4e3),Array.from(document.getElementsByClassName("js-remove-from-cart")).forEach((function(t){t.addEventListener("click",(function(){if(t.dataset.productId){var e=r.getCart().getById(t.dataset.productId);if(e){var n=r.getCart().getAll().indexOf(e);r.getCart().removeByIndex(n),t.parentElement&&t.parentElement.remove()}}}))}))))}}))})),document.getElementById("cart-toggle").addEventListener("click",(function(){if(l)return l.classList.contains("d-none")?(0,i.setDisplayFlex)(l):(0,i.setDisplayNone)(l)})),document.getElementById("see-cart").addEventListener("click",(function(){l&&(0,i.setDisplayFlex)(l)}))}))}},974:function(t,e){var n=this&&this.__awaiter||function(t,e,n,r){return new(n||(n=Promise))((function(i,o){function a(t){try{l(r.next(t))}catch(t){o(t)}}function c(t){try{l(r.throw(t))}catch(t){o(t)}}function l(t){var e;t.done?i(t.value):(e=t.value,e instanceof n?e:new n((function(t){t(e)}))).then(a,c)}l((r=r.apply(t,e||[])).next())}))},r=this&&this.__generator||function(t,e){var n,r,i,o,a={label:0,sent:function(){if(1&i[0])throw i[1];return i[1]},trys:[],ops:[]};return o={next:c(0),throw:c(1),return:c(2)},"function"==typeof Symbol&&(o[Symbol.iterator]=function(){return this}),o;function c(o){return function(c){return function(o){if(n)throw new TypeError("Generator is already executing.");for(;a;)try{if(n=1,r&&(i=2&o[0]?r.return:o[0]?r.throw||((i=r.return)&&i.call(r),0):r.next)&&!(i=i.call(r,o[1])).done)return i;switch(r=0,i&&(o=[2&o[0],i.value]),o[0]){case 0:case 1:i=o;break;case 4:return a.label++,{value:o[1],done:!1};case 5:a.label++,r=o[1],o=[0];continue;case 7:o=a.ops.pop(),a.trys.pop();continue;default:if(!((i=(i=a.trys).length>0&&i[i.length-1])||6!==o[0]&&2!==o[0])){a=0;continue}if(3===o[0]&&(!i||o[1]>i[0]&&o[1]<i[3])){a.label=o[1];break}if(6===o[0]&&a.label<i[1]){a.label=i[1],i=o;break}if(i&&a.label<i[2]){a.label=i[2],a.ops.push(o);break}i[2]&&a.ops.pop(),a.trys.pop();continue}o=e.call(t,a)}catch(t){o=[6,t],r=0}finally{n=i=0}if(5&o[0])throw o[1];return{value:o[0]?o[1]:void 0,done:!0}}([o,c])}}};function i(t){return n(this,void 0,void 0,(function(){var e;return r(this,(function(n){switch(n.label){case 0:return[4,fetch(t).then((function(t){return t.ok?t.json():Promise.reject()})).catch((function(t){return console.error(t)}))];case 1:return(e=n.sent())?[2,e]:[2,void 0]}}))}))}Object.defineProperty(e,"__esModule",{value:!0}),e.differenceDays=e.injectSingleInDOM=e.injectArrayInDOM=e.fetchProduct=e.fetchData=e.toggleVisibilityTemporarily=e.toggleDisplayTemporarily=e.setDisplayNone=e.setDisplayFlex=void 0,e.setDisplayFlex=function(t){t.classList.contains("d-none")&&t.classList.replace("d-none","d-flex")},e.setDisplayNone=function(t){t.classList.contains("d-flex")&&t.classList.replace("d-flex","d-none")},e.toggleDisplayTemporarily=function(t,e){t.classList.contains("d-none")&&(t.classList.replace("d-none","d-flex"),setTimeout((function(){t.classList.replace("d-flex","d-none")}),e))},e.toggleVisibilityTemporarily=function(t,e){t.classList.replace("v-hidden","v-visible"),setTimeout((function(){t.classList.replace("v-visible","v-hidden")}),e)},e.fetchData=i,e.fetchProduct=function(t,e){return n(this,void 0,void 0,(function(){var n;return r(this,(function(r){switch(r.label){case 0:return[4,i(t)];case 1:if(!(n=r.sent()))throw new Error("Fetch error");return e(n),[2]}}))}))},e.injectArrayInDOM=function(t,e,n){t.forEach((function(t){return e.innerHTML+=n(t)}))},e.injectSingleInDOM=function(t,e,n){e.innerHTML+=n(t)},e.differenceDays=function(t){var e=new Date(t).getTime(),n=(new Date).getTime(),r=Math.abs(n-e);return Math.ceil(r/864e5)}}},e={};!function n(r){var i=e[r];if(void 0!==i)return i.exports;var o=e[r]={exports:{}};return t[r].call(o.exports,o,o.exports,n),o.exports}(752)})();