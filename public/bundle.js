(()=>{"use strict";var e={752:function(e,t,n){var r=this&&this.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(t,"__esModule",{value:!0});var o=r(n(112)),i=r(n(554)),a=r(n(576));!function(e){switch(window.location.pathname){case"/":(0,o.default)();break;case"/list":(0,i.default)();break;case"/details":(0,a.default)()}}()},316:(e,t)=>{Object.defineProperty(t,"__esModule",{value:!0}),t.default=function(e){return'\n  <li class="cart-item" id="'+e.id+'">\n    <img class="cart-thumbnail" src="'+e.picture+'" alt="'+e.title+"< by "+e.author+'">\n    <div class="cart-text">\n      <p class="cart-title">'+e.title+'</p>\n      <p class="cart-author">'+e.author+'</p>\n    </div>\n    <button class="btn cart-remove-item js-remove-from-cart" data-product-id="'+e.id+'">\n      <svg xmlns="http://www.w3.org/2000/svg" width="18" height="21" viewBox="0 0 18 21" fill="none">\n        <rect x="2" y="1" width="14" height="20" rx="2" fill="#FF4444"/>\n        <rect y="1" width="18" height="2" rx="1" fill="#FF4444"/>\n        <rect x="7" width="4" height="2" rx="1" fill="#FF4444"/>\n        <rect x="6" y="5" width="14" height="2" rx="1" transform="rotate(90 6 5)" fill="white"/>\n        <rect x="10" y="5" width="14" height="2" rx="1" transform="rotate(90 10 5)" fill="white"/>\n        <rect x="14" y="5" width="14" height="2" rx="1" transform="rotate(90 14 5)" fill="white"/>\n        </svg>\n    </button>\n  </li>\n  '}},22:(e,t,n)=>{Object.defineProperty(t,"__esModule",{value:!0});var r=n(974);t.default=function(e){if(!e)return"<h3>There was an error loading the comments :(</h3>";var t=(0,r.differenceDays)(e.date);return'\n  <li class="comments-item">\n    <div class="comments-pic">\n      <svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" viewBox="0 0 40 40" fill="none">\n        <rect width="40" height="40" rx="4" fill="white"/>\n        <path d="M33.433 30.8381C34.2129 33.4072 32.2904 36 29.6055 36L10.3945 36C7.70962 36 5.78709 33.4072 6.56701 30.8381L8.41948 24.7358C8.78496 23.5319 9.69558 22.5701 10.8777 22.1394L16.0867 20.2417C16.5255 20.0818 16.9868 20 17.4538 20C18.8641 20 22.0073 20 23.25 20C24.3349 20 27.4256 21.2585 29.3603 22.0951C30.4089 22.5486 31.1899 23.449 31.5218 24.5423L33.433 30.8381Z" fill="black"/>\n        <circle cx="20" cy="12" r="7" fill="black"/>\n      </svg>\n    </div>\n    <div class="comments-content">\n      <div class="comments-header">\n        <p class="comments-user">'+e.username+'</p>\n        <p class="comments-since">'+t+' days ago</p>\n      </div>\n      <p class="comments-comment">'+e.message+"</p>\n    </div>\n  </li>\n  "}},403:(e,t)=>{Object.defineProperty(t,"__esModule",{value:!0}),t.default=function(e){return e?'\n    <img class="nft--img" src="'+e.picture+'" alt="'+e.title+" by "+e.author+'">\n    <h1 class="nft--title">'+e.title+'</h1>\n    <h2 class="nft--author">'+e.author+'</h2>\n    <p class="nft--details">'+e.description+'</p>\n    <h3 class="nft--price">$'+e.price+'</h3>\n    <button class="btn buy-now" id="add-cart" data-product-id="'+e.id+'">Buy now</button>\n  ':"<h3>There was an error loading the product details :(</h3>"}},581:(e,t)=>{Object.defineProperty(t,"__esModule",{value:!0}),t.default=function(e){return e?'\n  <article class="nft">\n    <img class="nft--img" src="'+e.picture+'" alt="'+e.title+" by "+e.author+'">\n    <h2 class="nft--title">'+e.title+'</h2>\n    <p class="nft--author">'+e.author+'</p>\n    <div class="nft--anchors">\n      <a class="anchor details" href="/details?product='+e.id+'">Details</a>\n      <button class="btn buy-now js-add-to-cart" data-product-id="'+e.id+'">Buy now</button>\n    </div>\n  </article>\n  ':'<article class="nft"><h3>There was an error loading the products :(</h3></article>'}},266:(e,t)=>{Object.defineProperty(t,"__esModule",{value:!0});var n=function(){function e(){this.products=[]}return e.prototype.add=function(e){this.products.push(e)},e.prototype.getAll=function(){return this.products},e.prototype.getById=function(e){return this.products.find((function(t){return t.id===e}))},e.prototype.removeAll=function(){this.products=[]},e.prototype.removeByIndex=function(e){this.products.splice(e)},e.prototype.buyCart=function(){this.products.forEach((function(e){return e.notAvaliable()})),this.removeAll()},e}();t.default=n},834:function(e,t,n){var r,o=this&&this.__extends||(r=function(e,t){return r=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(e,t){e.__proto__=t}||function(e,t){for(var n in t)Object.prototype.hasOwnProperty.call(t,n)&&(e[n]=t[n])},r(e,t)},function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Class extends value "+String(t)+" is not a constructor or null");function n(){this.constructor=e}r(e,t),e.prototype=null===t?Object.create(t):(n.prototype=t.prototype,new n)}),i=this&&this.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(t,"__esModule",{value:!0});var a=function(e){function t(){return null!==e&&e.apply(this,arguments)||this}return o(t,e),t.prototype.add=function(e){this.items=e},t}(i(n(7)).default);t.default=a},285:function(e,t,n){var r,o=this&&this.__extends||(r=function(e,t){return r=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(e,t){e.__proto__=t}||function(e,t){for(var n in t)Object.prototype.hasOwnProperty.call(t,n)&&(e[n]=t[n])},r(e,t)},function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Class extends value "+String(t)+" is not a constructor or null");function n(){this.constructor=e}r(e,t),e.prototype=null===t?Object.create(t):(n.prototype=t.prototype,new n)}),i=this&&this.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(t,"__esModule",{value:!0});var a=function(e){function t(){var t=null!==e&&e.apply(this,arguments)||this;return t._canBuy=!1,t._canComment=!1,t}return o(t,e),t}(i(n(886)).default);t.default=a},7:function(e,t){var n=this&&this.__spreadArray||function(e,t,n){if(n||2===arguments.length)for(var r,o=0,i=t.length;o<i;o++)!r&&o in t||(r||(r=Array.prototype.slice.call(t,0,o)),r[o]=t[o]);return e.concat(r||Array.prototype.slice.call(t))};Object.defineProperty(t,"__esModule",{value:!0});var r=function(){function e(){this.items=[],this.result=[],this.cache=new Map,this.keysAndOrder=""}return e.prototype.setSort=function(e){if(this.result=n([],this.items,!0),this.keysAndOrder=JSON.stringify(e),!this.cache.has(JSON.stringify(e))){var t=Object.keys(e),r=Object.values(e);this.result=this.sortBy(t,r),this.cache.set(JSON.stringify(e),this.result)}},e.prototype.sortBy=function(e,t){var r=this;return n([],this.result,!0).sort((function(n,o){return r.compareBy({a:n,b:o,keys:e,mode:t,i:0})}))},e.prototype.compareBy=function(e){var t=e.a,n=e.b,r=e.keys,o=e.mode,i=e.i;return 0===o[i]?(i++,this.compareBy({a:t,b:n,keys:r,mode:o,i})):t[r[i]]>n[r[i]]?1*o[i]:t[r[i]]<n[r[i]]?-1*o[i]:r[++i]?this.compareBy({a:t,b:n,keys:r,mode:o,i}):0},e.prototype.get=function(){return this.items},e.prototype.getSort=function(e){return this.cache.get(JSON.stringify(e))||this.items},e}();t.default=r},476:(e,t)=>{Object.defineProperty(t,"__esModule",{value:!0});var n=function(){function e(){this.members=[]}return e.prototype.getAll=function(){return this.members},e.prototype.add=function(e){this.members.push(e)},e}();t.default=n},209:(e,t)=>{Object.defineProperty(t,"__esModule",{value:!0});var n=function(){function e(){this._id="",this._picture="",this._title="",this._author="",this._description="",this._price=0,this._comment=[],this._category=[],this._isAvaliable=!0}return Object.defineProperty(e.prototype,"id",{get:function(){return this._id},set:function(e){this._id=e},enumerable:!1,configurable:!0}),Object.defineProperty(e.prototype,"picture",{get:function(){return this._picture},set:function(e){this._picture=e},enumerable:!1,configurable:!0}),Object.defineProperty(e.prototype,"title",{get:function(){return this._title},set:function(e){this._title=e},enumerable:!1,configurable:!0}),Object.defineProperty(e.prototype,"author",{get:function(){return this._author},set:function(e){this._author=e},enumerable:!1,configurable:!0}),Object.defineProperty(e.prototype,"description",{get:function(){return this._description},set:function(e){this._description=e},enumerable:!1,configurable:!0}),Object.defineProperty(e.prototype,"price",{get:function(){return this._price},set:function(e){this._price=e},enumerable:!1,configurable:!0}),Object.defineProperty(e.prototype,"comment",{get:function(){return this._comment},set:function(e){this._comment=e},enumerable:!1,configurable:!0}),Object.defineProperty(e.prototype,"category",{get:function(){return this._category},set:function(e){this._category=e},enumerable:!1,configurable:!0}),Object.defineProperty(e.prototype,"isAvaliable",{get:function(){return this._isAvaliable},set:function(e){this._isAvaliable=e},enumerable:!1,configurable:!0}),e.prototype.notAvaliable=function(){this._isAvaliable=!1},e}();t.default=n},472:function(e,t,n){var r,o=this&&this.__extends||(r=function(e,t){return r=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(e,t){e.__proto__=t}||function(e,t){for(var n in t)Object.prototype.hasOwnProperty.call(t,n)&&(e[n]=t[n])},r(e,t)},function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Class extends value "+String(t)+" is not a constructor or null");function n(){this.constructor=e}r(e,t),e.prototype=null===t?Object.create(t):(n.prototype=t.prototype,new n)}),i=this&&this.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(t,"__esModule",{value:!0});var a=i(n(886)),s=n(614),c=function(e){function t(){var t=null!==e&&e.apply(this,arguments)||this;return t._id=(0,s.v4)(),t._name="",t._email="",t._password="",t._productsInCart=[],t._purchasedProducts=[],t._canComment=!0,t}return o(t,e),Object.defineProperty(t.prototype,"id",{get:function(){return this._id},set:function(e){this._id=e},enumerable:!1,configurable:!0}),Object.defineProperty(t.prototype,"name",{get:function(){return this._name},set:function(e){this._name=e},enumerable:!1,configurable:!0}),Object.defineProperty(t.prototype,"email",{get:function(){return this._email},set:function(e){this._email=e},enumerable:!1,configurable:!0}),Object.defineProperty(t.prototype,"password",{get:function(){return this._password},set:function(e){this._password=e},enumerable:!1,configurable:!0}),Object.defineProperty(t.prototype,"productsInCart",{get:function(){return this._productsInCart},set:function(e){this._productsInCart=e},enumerable:!1,configurable:!0}),Object.defineProperty(t.prototype,"purchasedProducts",{get:function(){return this._purchasedProducts},set:function(e){this._purchasedProducts=e},enumerable:!1,configurable:!0}),t.prototype.addProductsInCart=function(e){this._productsInCart.push(e)},t.prototype.getAllProductsInCart=function(){return this._productsInCart},t.prototype.addPurchasedProduct=function(e){this._purchasedProducts.push(e)},t.prototype.getAllPurchasedProduct=function(){return this._purchasedProducts},t.prototype.hasDebt=function(){return!0},Object.defineProperty(t.prototype,"canBuy",{get:function(){return!this.hasDebt()},enumerable:!1,configurable:!0}),t}(a.default);t.default=c},313:function(e,t,n){var r=this&&this.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(t,"__esModule",{value:!0});var o=r(n(266)),i=r(n(285)),a=r(n(472)),s=r(n(476)),c=function(){function e(){this.cart=new o.default,this.members=new s.default,this.user=new i.default}return e.prototype.getCart=function(){return this.cart},e.prototype.getMembers=function(){return this.members},e.prototype.getUser=function(){return this.user},e.prototype.logInUser=function(e){var t=this.members.getAll().find((function(t){return t.email==e.email&&t.password==e.password}));t&&(this.user=t)},e.prototype.isLoged=function(){return this.user instanceof i.default},e.prototype.registerUser=function(e){var t=new a.default;t.name=e.name,t.email=e.email,t.password=e.password,this.members.add(t)},e.prototype.isRegistered=function(e){return!!this.members.getAll().find((function(t){return t.email===e}))},e.prototype.saveMembers=function(){if(localStorage.regdUsers){var e=this.members.getAll(),t=JSON.parse(localStorage.regdUsers);localStorage.setItem("regdUsers",JSON.stringify(e.concat(t)))}localStorage.setItem("regdUsers",JSON.stringify(this.members.getAll()))},e.prototype.loadMembers=function(){var e=this;localStorage.regdUsers&&JSON.parse(localStorage.regdUsers).forEach((function(t){var n=new a.default;if(n.id=t._id,n.name=t._name,n.email=t._email,n.password=t._password,n.productsInCart=t._productsInCart,n.purchasedProducts=t._purchasedProducts,!e.isRegistered(n.email))return e.members.add(n)}))},e.prototype.saveUser=function(){localStorage.setItem("logedUser",JSON.stringify(this.user))},e.prototype.loadUser=function(){if(localStorage.logedUser){var e=JSON.parse(localStorage.logedUser);this.user=e}},e.prototype.logOut=function(){localStorage.logedUser&&localStorage.removeItem("logedUser"),this.user=new i.default},e}();t.default=c},886:(e,t)=>{Object.defineProperty(t,"__esModule",{value:!0});var n=function(){function e(){this._canBuy=!1,this._canComment=!1}return Object.defineProperty(e.prototype,"canBuy",{get:function(){return this._canBuy},enumerable:!1,configurable:!0}),Object.defineProperty(e.prototype,"canComment",{get:function(){return this._canComment},enumerable:!1,configurable:!0}),e}();t.default=n},197:function(e,t,n){var r=this&&this.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(t,"__esModule",{value:!0});var o=r(n(209)),i=function(){function e(){}return e.create=function(e){var t=new o.default;return t.id=e.id,t.picture=e.picture,t.title=e.title,t.author=e.author,t.description=e.description,t.price=e.price,t.comment=e.comments,t.category=e.category,t.isAvaliable=e.isAvaliable,e},e}();t.default=i},574:(e,t)=>{var n;Object.defineProperty(t,"__esModule",{value:!0}),t.OrderMode=void 0,(n=t.OrderMode||(t.OrderMode={}))[n.none=0]="none",n[n.asc=1]="asc",n[n.desc=-1]="desc"},112:function(e,t,n){var r=this&&this.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(t,"__esModule",{value:!0});var o=n(974),i=r(n(313));t.default=function(){var e,t;t=(e=document.getElementById("a")).innerText,e.innerText=t;var n=new i.default;n.loadMembers(),function(){var e,t,r,i,a,s,c,u,l,d,f,p,m;i=document.getElementById("nav-menu"),a=document.getElementById("menu-opener"),s=document.getElementById("menu-closer"),a.addEventListener("click",(function(){i.classList.replace("menu-closed","menu-opened")})),s.addEventListener("click",(function(){i.classList.replace("menu-opened","menu-closed")})),function(){var e=document.getElementById("news-letter"),t=e.querySelector("input[name=email]"),n=document.getElementById("invalid-message"),r=document.getElementById("successful-message"),i=["aquiles_bailo@yahoo.com","susana_oria@hotmail.com","aquiles_bailo@hotmail.com","armando_estebanquito@gmail.com","example@gmail.com","example@yahoo.com","example@hotmail.com","malapalabra@gmail.com"];e.addEventListener("submit",(function(e){e.preventDefault();var a=t.value;return i.includes(a)?(0,o.toggleVisibilityTemporarily)(n,3e3):(0,o.toggleVisibilityTemporarily)(r,3e3)}))}(),n.loadUser(),n.isLoged()||(function(){var e=document.getElementById("register-btn"),t=document.getElementById("register-menu");e.addEventListener("click",(function(){return t.classList.contains("d-none")?(0,o.setDisplayFlex)(t):(0,o.setDisplayNone)(t)}))}(),e=document.getElementById("register-closer"),t=document.getElementById("register-menu"),r=document.getElementById("login-menu"),e.addEventListener("click",(function(e){e.preventDefault(),(0,o.setDisplayNone)(t),(0,o.setDisplayNone)(r)})),function(){var e=document.getElementById("login-btn"),t=document.getElementById("login-menu");e.addEventListener("click",(function(){return t.classList.contains("d-none")?(0,o.setDisplayFlex)(t):(0,o.setDisplayNone)(t)}))}(),function(){var e=document.getElementById("login-closer"),t=document.getElementById("login-menu"),n=document.getElementById("register-menu");e.addEventListener("click",(function(e){e.preventDefault(),(0,o.setDisplayNone)(t),(0,o.setDisplayNone)(n)}))}(),c=document.getElementById("signup-form"),u=document.getElementById("reg-user-name"),l=document.getElementById("reg-user-email"),d=document.getElementById("reg-user-password"),f=document.getElementById("reg-user-confirm-password"),p=document.getElementById("register-alert"),m=document.getElementById("register-confirm"),c.addEventListener("submit",(function(e){e.preventDefault(),m.innerHTML="";var t,r,i,a=u.value.trim(),s=l.value.trim(),c=d.value.trim(),y=(t=c,r=f.value.trim(),i=p,(0,o.isEqualString)(t,r)?(i.innerHTML="",!0):(i.innerHTML="Passwords don't match!",!1)),h=function(e,t){return!n.isRegistered(e)||(t.innerHTML+="The email entered is already used.",!1)}(s,p);!y&&h||(m.innerHTML="Account created successfully!",n.registerUser({name:a,email:s,password:c}),n.saveMembers())})),function(){var e=document.getElementById("signin-form"),t=document.getElementById("log-user-email"),r=document.getElementById("log-user-password"),o=document.getElementById("login-alert"),i=document.getElementById("login-confirm");e.addEventListener("submit",(function(e){e.preventDefault(),i.innerHTML="",o.innerHTML="";var a=t.value.trim(),s=r.value.trim();if(n.logInUser({email:a,password:s}),!n.isLoged())return n.saveUser(),void(o.innerHTML="The email or password is not valid.");i.innerHTML="Successfully logged in"}))}());var y=document.getElementById("user-toggle-menu");(0,o.setDisplayFlex)(y);var h=document.getElementById("register-btn"),g=document.getElementById("login-btn");(0,o.setDisplayNone)(h),(0,o.setDisplayNone)(g)}()}},576:function(e,t,n){var r=this&&this.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(t,"__esModule",{value:!0});var o=n(974),i=r(n(403)),a=r(n(22)),s=r(n(316)),c=r(n(313)),u=r(n(63));t.default=function(){var e=new c.default,t=document.getElementById("cart-list");(0,o.fetchProduct)("https://my-json-server.typicode.com/Alonso-Pablo/api-nft/products",(function(n){var r,c,l=(0,o.getProductIDFromPath)(window.location.search),d=new u.default(n).getById(l);if(!d)return window.location.replace("notfound.html");r=d,c=document.getElementById("nft"),(0,o.injectSingleInDOM)(r,c,i.default),function(n){var r=document.getElementById("add-cart"),i=document.getElementById("added-to-cart");r.addEventListener("click",(function(){e.getCart().add(n),(0,o.injectArrayInDOM)(e.getCart().getAll(),t,s.default),(0,o.toggleDisplayTemporarily)(i,4e3),Array.from(document.getElementsByClassName("js-remove-from-cart")).forEach((function(t){var n=t.dataset.productId,r=e.getCart().getById(n),o=e.getCart().getAll().indexOf(r),i=t.parentElement;t.addEventListener("click",(function(){e.getCart().removeByIndex(o),i.remove()}))}))}))}(d),document.getElementById("cart-toggle").addEventListener("click",(function(){return t.classList.contains("d-none")?(0,o.setDisplayFlex)(t):(0,o.setDisplayNone)(t)})),document.getElementById("see-cart").addEventListener("click",(function(){(0,o.setDisplayFlex)(t)})),function(e){var t=document.getElementById("comments-list"),n=e.comments;(0,o.injectArrayInDOM)(n,t,a.default)}(d)}))}},554:function(e,t,n){var r=this&&this.__assign||function(){return r=Object.assign||function(e){for(var t,n=1,r=arguments.length;n<r;n++)for(var o in t=arguments[n])Object.prototype.hasOwnProperty.call(t,o)&&(e[o]=t[o]);return e},r.apply(this,arguments)},o=this&&this.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(t,"__esModule",{value:!0});var i=n(974),a=o(n(581)),s=o(n(316)),c=o(n(313)),u=o(n(834)),l=n(574),d=o(n(63));t.default=function(){var e;e=document.getElementById("go-up"),window.addEventListener("scroll",(function(){return(0,i.isHalfPage)()?(0,i.setDisplayFlex)(e):(0,i.setDisplayNone)(e)}));var t=new c.default,n=document.getElementById("cart-list");function o(e,t){t.innerHTML="",e.forEach((function(e){return t.innerHTML+=(0,a.default)(e)}))}function f(e){var r=Array.from(document.getElementsByClassName("js-add-to-cart")),o=document.getElementById("added-to-cart");r.forEach((function(r){var a=r.dataset.productId,c=e.getById(a);r.addEventListener("click",(function(){var e,r;t.getCart().add(c),e=t.getCart().getAll(),r=Array.from(n.children).map((function(e){return e.id})),e.forEach((function(e){r.includes(e.id)||(n.innerHTML+=(0,s.default)(e))})),(0,i.toggleDisplayTemporarily)(o,4e3),Array.from(document.getElementsByClassName("js-remove-from-cart")).forEach((function(e){var n=e.dataset.productId,r=t.getCart().getById(n),o=t.getCart().getAll().indexOf(r),i=e.parentElement;e.addEventListener("click",(function(){t.getCart().removeByIndex(o),i.remove()}))}))}))}))}(0,i.fetchProduct)("https://my-json-server.typicode.com/Alonso-Pablo/api-nft/products",(function(e){var t=new d.default(e),s=new u.default;s.add(t.get()),function(e){var t=document.getElementById("all-nfts"),n=document.getElementById("most-valuable-nfts"),r=document.getElementById("colorful-nfts"),o=document.getElementById("strange-nfts");(0,i.injectArrayInDOM)(e.get(),t,a.default),(0,i.injectArrayInDOM)(e.getByCategory("most-valuable"),n,a.default),(0,i.injectArrayInDOM)(e.getByCategory("colorful"),r,a.default),(0,i.injectArrayInDOM)(e.getByCategory("strange"),o,a.default)}(t),function(e,t){var n=document.getElementById("all-nfts"),i=document.getElementById("filter"),a=i.title,s=i.author,c=i.price,u=document.getElementById("filter-clean"),d={title:l.OrderMode.none,author:l.OrderMode.none,price:l.OrderMode.none};function p(i,a){var s=document.getElementById("label-order-by-"+a),c=a[0].toUpperCase()+a.substring(1);i.addEventListener("change",(function(){var u=i.checked;s.classList.contains("filter-inactive")&&s.classList.replace("filter-inactive","filter-asc"),function(e,t,n){if(e)return t.classList.replace("filter-desc","filter-asc"),void(t.innerHTML=n+" &#11014;");t.classList.replace("filter-asc","filter-desc"),t.innerHTML=n+" &#11015;"}(u,s,c);var p=function(e,t,n){var o=r({},t);return e?(t[n]=l.OrderMode.asc,o[n]=l.OrderMode.asc,o):(t[n]=l.OrderMode.desc,o[n]=l.OrderMode.desc,o)}(u,d,a);e.setSort(p),o(e.getSort(p),n),f(t)}))}e.setSort(d),p(a,"title"),p(s,"author"),p(c,"price"),function(){var r=[],i=document.getElementById("label-order-by-title"),a=document.getElementById("label-order-by-author"),s=document.getElementById("label-order-by-price");r.push(i),r.push(a),r.push(s);var c=["Title","Author","Price"];u.addEventListener("click",(function(i){i.preventDefault(),d.title=l.OrderMode.none,d.author=l.OrderMode.none,d.price=l.OrderMode.none,o(e.getSort(d),n),r.forEach((function(e,t){return e.innerHTML=c[t],e.classList.contains("filter-asc")?e.classList.replace("filter-asc","filter-inactive"):e.classList.contains("filter-desc")?e.classList.replace("filter-desc","filter-inactive"):void 0})),f(t)}))}()}(s,t),f(t),document.getElementById("cart-toggle").addEventListener("click",(function(){return n.classList.contains("d-none")?(0,i.setDisplayFlex)(n):(0,i.setDisplayNone)(n)})),document.getElementById("see-cart").addEventListener("click",(function(){(0,i.setDisplayFlex)(n)}))}))}},63:function(e,t,n){var r=this&&this.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(t,"__esModule",{value:!0});var o=r(n(197)),i=function(){function e(e){this.items=[],this.items=e.map((function(e){return o.default.create(e)}))}return e.prototype.get=function(){return this.items},e.prototype.getById=function(e){return this.items.find((function(t){return t.id==e}))},e.prototype.getByCategory=function(e){return this.items.filter((function(t){return t.category.includes(e)}))},e}();t.default=i},974:function(e,t){var n=this&&this.__awaiter||function(e,t,n,r){return new(n||(n=Promise))((function(o,i){function a(e){try{c(r.next(e))}catch(e){i(e)}}function s(e){try{c(r.throw(e))}catch(e){i(e)}}function c(e){var t;e.done?o(e.value):(t=e.value,t instanceof n?t:new n((function(e){e(t)}))).then(a,s)}c((r=r.apply(e,t||[])).next())}))},r=this&&this.__generator||function(e,t){var n,r,o,i,a={label:0,sent:function(){if(1&o[0])throw o[1];return o[1]},trys:[],ops:[]};return i={next:s(0),throw:s(1),return:s(2)},"function"==typeof Symbol&&(i[Symbol.iterator]=function(){return this}),i;function s(i){return function(s){return function(i){if(n)throw new TypeError("Generator is already executing.");for(;a;)try{if(n=1,r&&(o=2&i[0]?r.return:i[0]?r.throw||((o=r.return)&&o.call(r),0):r.next)&&!(o=o.call(r,i[1])).done)return o;switch(r=0,o&&(i=[2&i[0],o.value]),i[0]){case 0:case 1:o=i;break;case 4:return a.label++,{value:i[1],done:!1};case 5:a.label++,r=i[1],i=[0];continue;case 7:i=a.ops.pop(),a.trys.pop();continue;default:if(!((o=(o=a.trys).length>0&&o[o.length-1])||6!==i[0]&&2!==i[0])){a=0;continue}if(3===i[0]&&(!o||i[1]>o[0]&&i[1]<o[3])){a.label=i[1];break}if(6===i[0]&&a.label<o[1]){a.label=o[1],o=i;break}if(o&&a.label<o[2]){a.label=o[2],a.ops.push(i);break}o[2]&&a.ops.pop(),a.trys.pop();continue}i=t.call(e,a)}catch(e){i=[6,e],r=0}finally{n=o=0}if(5&i[0])throw i[1];return{value:i[0]?i[1]:void 0,done:!0}}([i,s])}}};function o(e){return n(this,void 0,void 0,(function(){var t;return r(this,(function(n){switch(n.label){case 0:return[4,fetch(e).then((function(e){return e.ok?e.json():Promise.reject()})).catch((function(e){return console.error(e)}))];case 1:return(t=n.sent())?[2,t]:[2,void 0]}}))}))}Object.defineProperty(t,"__esModule",{value:!0}),t.getProductIDFromPath=t.isEqualString=t.isHalfPage=t.differenceDays=t.injectSingleInDOM=t.injectArrayInDOM=t.fetchProduct=t.fetchData=t.toggleVisibilityTemporarily=t.toggleDisplayTemporarily=t.setDisplayNone=t.setDisplayFlex=void 0,t.setDisplayFlex=function(e){e.classList.contains("d-none")&&e.classList.replace("d-none","d-flex")},t.setDisplayNone=function(e){e.classList.contains("d-flex")&&e.classList.replace("d-flex","d-none")},t.toggleDisplayTemporarily=function(e,t){e.classList.contains("d-none")&&(e.classList.replace("d-none","d-flex"),setTimeout((function(){e.classList.replace("d-flex","d-none")}),t))},t.toggleVisibilityTemporarily=function(e,t){e.classList.replace("v-hidden","v-visible"),setTimeout((function(){e.classList.replace("v-visible","v-hidden")}),t)},t.fetchData=o,t.fetchProduct=function(e,t){return n(this,void 0,void 0,(function(){var n;return r(this,(function(r){switch(r.label){case 0:return[4,o(e)];case 1:if(!(n=r.sent()))throw new Error("Fetch error");return t(n),[2]}}))}))},t.injectArrayInDOM=function(e,t,n){e.forEach((function(e){return t.innerHTML+=n(e)}))},t.injectSingleInDOM=function(e,t,n){t.innerHTML+=n(e)},t.differenceDays=function(e){var t=new Date(e).getTime(),n=(new Date).getTime(),r=Math.abs(n-t);return Math.ceil(r/864e5)},t.isHalfPage=function(){var e=document.body.clientHeight/2;return window.scrollY>e},t.isEqualString=function(e,t){return e===t},t.getProductIDFromPath=function(e){return e.slice(e.indexOf("=")).replace("=","")}},614:(e,t,n)=>{var r;n.r(t),n.d(t,{NIL:()=>L,parse:()=>h,stringify:()=>l,v1:()=>y,v3:()=>M,v4:()=>B,v5:()=>D,validate:()=>s,version:()=>A});var o=new Uint8Array(16);function i(){if(!r&&!(r="undefined"!=typeof crypto&&crypto.getRandomValues&&crypto.getRandomValues.bind(crypto)||"undefined"!=typeof msCrypto&&"function"==typeof msCrypto.getRandomValues&&msCrypto.getRandomValues.bind(msCrypto)))throw new Error("crypto.getRandomValues() not supported. See https://github.com/uuidjs/uuid#getrandomvalues-not-supported");return r(o)}const a=/^(?:[0-9a-f]{8}-[0-9a-f]{4}-[1-5][0-9a-f]{3}-[89ab][0-9a-f]{3}-[0-9a-f]{12}|00000000-0000-0000-0000-000000000000)$/i,s=function(e){return"string"==typeof e&&a.test(e)};for(var c=[],u=0;u<256;++u)c.push((u+256).toString(16).substr(1));const l=function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:0,n=(c[e[t+0]]+c[e[t+1]]+c[e[t+2]]+c[e[t+3]]+"-"+c[e[t+4]]+c[e[t+5]]+"-"+c[e[t+6]]+c[e[t+7]]+"-"+c[e[t+8]]+c[e[t+9]]+"-"+c[e[t+10]]+c[e[t+11]]+c[e[t+12]]+c[e[t+13]]+c[e[t+14]]+c[e[t+15]]).toLowerCase();if(!s(n))throw TypeError("Stringified UUID is invalid");return n};var d,f,p=0,m=0;const y=function(e,t,n){var r=t&&n||0,o=t||new Array(16),a=(e=e||{}).node||d,s=void 0!==e.clockseq?e.clockseq:f;if(null==a||null==s){var c=e.random||(e.rng||i)();null==a&&(a=d=[1|c[0],c[1],c[2],c[3],c[4],c[5]]),null==s&&(s=f=16383&(c[6]<<8|c[7]))}var u=void 0!==e.msecs?e.msecs:Date.now(),y=void 0!==e.nsecs?e.nsecs:m+1,h=u-p+(y-m)/1e4;if(h<0&&void 0===e.clockseq&&(s=s+1&16383),(h<0||u>p)&&void 0===e.nsecs&&(y=0),y>=1e4)throw new Error("uuid.v1(): Can't create more than 10M uuids/sec");p=u,m=y,f=s;var g=(1e4*(268435455&(u+=122192928e5))+y)%4294967296;o[r++]=g>>>24&255,o[r++]=g>>>16&255,o[r++]=g>>>8&255,o[r++]=255&g;var v=u/4294967296*1e4&268435455;o[r++]=v>>>8&255,o[r++]=255&v,o[r++]=v>>>24&15|16,o[r++]=v>>>16&255,o[r++]=s>>>8|128,o[r++]=255&s;for(var b=0;b<6;++b)o[r+b]=a[b];return t||l(o)},h=function(e){if(!s(e))throw TypeError("Invalid UUID");var t,n=new Uint8Array(16);return n[0]=(t=parseInt(e.slice(0,8),16))>>>24,n[1]=t>>>16&255,n[2]=t>>>8&255,n[3]=255&t,n[4]=(t=parseInt(e.slice(9,13),16))>>>8,n[5]=255&t,n[6]=(t=parseInt(e.slice(14,18),16))>>>8,n[7]=255&t,n[8]=(t=parseInt(e.slice(19,23),16))>>>8,n[9]=255&t,n[10]=(t=parseInt(e.slice(24,36),16))/1099511627776&255,n[11]=t/4294967296&255,n[12]=t>>>24&255,n[13]=t>>>16&255,n[14]=t>>>8&255,n[15]=255&t,n};function g(e,t,n){function r(e,r,o,i){if("string"==typeof e&&(e=function(e){e=unescape(encodeURIComponent(e));for(var t=[],n=0;n<e.length;++n)t.push(e.charCodeAt(n));return t}(e)),"string"==typeof r&&(r=h(r)),16!==r.length)throw TypeError("Namespace must be array-like (16 iterable integer values, 0-255)");var a=new Uint8Array(16+e.length);if(a.set(r),a.set(e,r.length),(a=n(a))[6]=15&a[6]|t,a[8]=63&a[8]|128,o){i=i||0;for(var s=0;s<16;++s)o[i+s]=a[s];return o}return l(a)}try{r.name=e}catch(e){}return r.DNS="6ba7b810-9dad-11d1-80b4-00c04fd430c8",r.URL="6ba7b811-9dad-11d1-80b4-00c04fd430c8",r}function v(e){return 14+(e+64>>>9<<4)+1}function b(e,t){var n=(65535&e)+(65535&t);return(e>>16)+(t>>16)+(n>>16)<<16|65535&n}function _(e,t,n,r,o,i){return b((a=b(b(t,e),b(r,i)))<<(s=o)|a>>>32-s,n);var a,s}function w(e,t,n,r,o,i,a){return _(t&n|~t&r,e,t,o,i,a)}function I(e,t,n,r,o,i,a){return _(t&r|n&~r,e,t,o,i,a)}function O(e,t,n,r,o,i,a){return _(t^n^r,e,t,o,i,a)}function E(e,t,n,r,o,i,a){return _(n^(t|~r),e,t,o,i,a)}const M=g("v3",48,(function(e){if("string"==typeof e){var t=unescape(encodeURIComponent(e));e=new Uint8Array(t.length);for(var n=0;n<t.length;++n)e[n]=t.charCodeAt(n)}return function(e){for(var t=[],n=32*e.length,r="0123456789abcdef",o=0;o<n;o+=8){var i=e[o>>5]>>>o%32&255,a=parseInt(r.charAt(i>>>4&15)+r.charAt(15&i),16);t.push(a)}return t}(function(e,t){e[t>>5]|=128<<t%32,e[v(t)-1]=t;for(var n=1732584193,r=-271733879,o=-1732584194,i=271733878,a=0;a<e.length;a+=16){var s=n,c=r,u=o,l=i;n=w(n,r,o,i,e[a],7,-680876936),i=w(i,n,r,o,e[a+1],12,-389564586),o=w(o,i,n,r,e[a+2],17,606105819),r=w(r,o,i,n,e[a+3],22,-1044525330),n=w(n,r,o,i,e[a+4],7,-176418897),i=w(i,n,r,o,e[a+5],12,1200080426),o=w(o,i,n,r,e[a+6],17,-1473231341),r=w(r,o,i,n,e[a+7],22,-45705983),n=w(n,r,o,i,e[a+8],7,1770035416),i=w(i,n,r,o,e[a+9],12,-1958414417),o=w(o,i,n,r,e[a+10],17,-42063),r=w(r,o,i,n,e[a+11],22,-1990404162),n=w(n,r,o,i,e[a+12],7,1804603682),i=w(i,n,r,o,e[a+13],12,-40341101),o=w(o,i,n,r,e[a+14],17,-1502002290),n=I(n,r=w(r,o,i,n,e[a+15],22,1236535329),o,i,e[a+1],5,-165796510),i=I(i,n,r,o,e[a+6],9,-1069501632),o=I(o,i,n,r,e[a+11],14,643717713),r=I(r,o,i,n,e[a],20,-373897302),n=I(n,r,o,i,e[a+5],5,-701558691),i=I(i,n,r,o,e[a+10],9,38016083),o=I(o,i,n,r,e[a+15],14,-660478335),r=I(r,o,i,n,e[a+4],20,-405537848),n=I(n,r,o,i,e[a+9],5,568446438),i=I(i,n,r,o,e[a+14],9,-1019803690),o=I(o,i,n,r,e[a+3],14,-187363961),r=I(r,o,i,n,e[a+8],20,1163531501),n=I(n,r,o,i,e[a+13],5,-1444681467),i=I(i,n,r,o,e[a+2],9,-51403784),o=I(o,i,n,r,e[a+7],14,1735328473),n=O(n,r=I(r,o,i,n,e[a+12],20,-1926607734),o,i,e[a+5],4,-378558),i=O(i,n,r,o,e[a+8],11,-2022574463),o=O(o,i,n,r,e[a+11],16,1839030562),r=O(r,o,i,n,e[a+14],23,-35309556),n=O(n,r,o,i,e[a+1],4,-1530992060),i=O(i,n,r,o,e[a+4],11,1272893353),o=O(o,i,n,r,e[a+7],16,-155497632),r=O(r,o,i,n,e[a+10],23,-1094730640),n=O(n,r,o,i,e[a+13],4,681279174),i=O(i,n,r,o,e[a],11,-358537222),o=O(o,i,n,r,e[a+3],16,-722521979),r=O(r,o,i,n,e[a+6],23,76029189),n=O(n,r,o,i,e[a+9],4,-640364487),i=O(i,n,r,o,e[a+12],11,-421815835),o=O(o,i,n,r,e[a+15],16,530742520),n=E(n,r=O(r,o,i,n,e[a+2],23,-995338651),o,i,e[a],6,-198630844),i=E(i,n,r,o,e[a+7],10,1126891415),o=E(o,i,n,r,e[a+14],15,-1416354905),r=E(r,o,i,n,e[a+5],21,-57434055),n=E(n,r,o,i,e[a+12],6,1700485571),i=E(i,n,r,o,e[a+3],10,-1894986606),o=E(o,i,n,r,e[a+10],15,-1051523),r=E(r,o,i,n,e[a+1],21,-2054922799),n=E(n,r,o,i,e[a+8],6,1873313359),i=E(i,n,r,o,e[a+15],10,-30611744),o=E(o,i,n,r,e[a+6],15,-1560198380),r=E(r,o,i,n,e[a+13],21,1309151649),n=E(n,r,o,i,e[a+4],6,-145523070),i=E(i,n,r,o,e[a+11],10,-1120210379),o=E(o,i,n,r,e[a+2],15,718787259),r=E(r,o,i,n,e[a+9],21,-343485551),n=b(n,s),r=b(r,c),o=b(o,u),i=b(i,l)}return[n,r,o,i]}(function(e){if(0===e.length)return[];for(var t=8*e.length,n=new Uint32Array(v(t)),r=0;r<t;r+=8)n[r>>5]|=(255&e[r/8])<<r%32;return n}(e),8*e.length))})),B=function(e,t,n){var r=(e=e||{}).random||(e.rng||i)();if(r[6]=15&r[6]|64,r[8]=63&r[8]|128,t){n=n||0;for(var o=0;o<16;++o)t[n+o]=r[o];return t}return l(r)};function P(e,t,n,r){switch(e){case 0:return t&n^~t&r;case 1:case 3:return t^n^r;case 2:return t&n^t&r^n&r}}function j(e,t){return e<<t|e>>>32-t}const D=g("v5",80,(function(e){var t=[1518500249,1859775393,2400959708,3395469782],n=[1732584193,4023233417,2562383102,271733878,3285377520];if("string"==typeof e){var r=unescape(encodeURIComponent(e));e=[];for(var o=0;o<r.length;++o)e.push(r.charCodeAt(o))}else Array.isArray(e)||(e=Array.prototype.slice.call(e));e.push(128);for(var i=e.length/4+2,a=Math.ceil(i/16),s=new Array(a),c=0;c<a;++c){for(var u=new Uint32Array(16),l=0;l<16;++l)u[l]=e[64*c+4*l]<<24|e[64*c+4*l+1]<<16|e[64*c+4*l+2]<<8|e[64*c+4*l+3];s[c]=u}s[a-1][14]=8*(e.length-1)/Math.pow(2,32),s[a-1][14]=Math.floor(s[a-1][14]),s[a-1][15]=8*(e.length-1)&4294967295;for(var d=0;d<a;++d){for(var f=new Uint32Array(80),p=0;p<16;++p)f[p]=s[d][p];for(var m=16;m<80;++m)f[m]=j(f[m-3]^f[m-8]^f[m-14]^f[m-16],1);for(var y=n[0],h=n[1],g=n[2],v=n[3],b=n[4],_=0;_<80;++_){var w=Math.floor(_/20),I=j(y,5)+P(w,h,g,v)+b+t[w]+f[_]>>>0;b=v,v=g,g=j(h,30)>>>0,h=y,y=I}n[0]=n[0]+y>>>0,n[1]=n[1]+h>>>0,n[2]=n[2]+g>>>0,n[3]=n[3]+v>>>0,n[4]=n[4]+b>>>0}return[n[0]>>24&255,n[0]>>16&255,n[0]>>8&255,255&n[0],n[1]>>24&255,n[1]>>16&255,n[1]>>8&255,255&n[1],n[2]>>24&255,n[2]>>16&255,n[2]>>8&255,255&n[2],n[3]>>24&255,n[3]>>16&255,n[3]>>8&255,255&n[3],n[4]>>24&255,n[4]>>16&255,n[4]>>8&255,255&n[4]]})),L="00000000-0000-0000-0000-000000000000",A=function(e){if(!s(e))throw TypeError("Invalid UUID");return parseInt(e.substr(14,1),16)}}},t={};function n(r){var o=t[r];if(void 0!==o)return o.exports;var i=t[r]={exports:{}};return e[r].call(i.exports,i,i.exports,n),i.exports}n.d=(e,t)=>{for(var r in t)n.o(t,r)&&!n.o(e,r)&&Object.defineProperty(e,r,{enumerable:!0,get:t[r]})},n.o=(e,t)=>Object.prototype.hasOwnProperty.call(e,t),n.r=e=>{"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},n(752)})();