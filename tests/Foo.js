"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __spreadArray = (this && this.__spreadArray) || function (to, from, pack) {
    if (pack || arguments.length === 2) for (var i = 0, l = from.length, ar; i < l; i++) {
        if (ar || !(i in from)) {
            if (!ar) ar = Array.prototype.slice.call(from, 0, i);
            ar[i] = from[i];
        }
    }
    return to.concat(ar || Array.prototype.slice.call(from));
};
exports.__esModule = true;
var data = [
    {
        "id": "",
        "picture": "",
        "title": "A",
        "author": "Bb",
        "description": "",
        "price": 50,
        "comments": [],
        "category": [],
        "isAvaliable": true
    },
    {
        "id": "",
        "picture": "",
        "title": "A",
        "author": "Bb",
        "description": "",
        "price": 40,
        "comments": [],
        "category": [],
        "isAvaliable": true
    },
    {
        "id": "",
        "picture": "",
        "title": "B",
        "author": "Ae",
        "description": "",
        "price": 60,
        "comments": [],
        "category": [],
        "isAvaliable": true
    },
    {
        "id": "",
        "picture": "",
        "title": "B",
        "author": "Ae",
        "description": "",
        "price": 40,
        "comments": [],
        "category": [],
        "isAvaliable": true
    },
    {
        "id": "",
        "picture": "",
        "title": "B",
        "author": "Ab",
        "description": "",
        "price": 41,
        "comments": [],
        "category": [],
        "isAvaliable": true
    },
    {
        "id": "",
        "picture": "",
        "title": "Z",
        "author": "Be",
        "description": "",
        "price": 69,
        "comments": [],
        "category": [],
        "isAvaliable": true
    },
    {
        "id": "",
        "picture": "",
        "title": "C",
        "author": "Be",
        "description": "",
        "price": 66,
        "comments": [],
        "category": [],
        "isAvaliable": true
    },
    {
        "id": "",
        "picture": "",
        "title": "Z",
        "author": "Be",
        "description": "",
        "price": 60,
        "comments": [],
        "category": [],
        "isAvaliable": true
    },
    {
        "id": "",
        "picture": "",
        "title": "D",
        "author": "Si",
        "description": "",
        "price": 54,
        "comments": [],
        "category": [],
        "isAvaliable": true
    }
];
var OrderMode;
(function (OrderMode) {
    OrderMode[OrderMode["asc"] = 1] = "asc";
    OrderMode[OrderMode["desc"] = -1] = "desc";
})(OrderMode || (OrderMode = {}));
var List = /** @class */ (function () {
    function List(data) {
        this.items = data;
        this.result = __spreadArray([], this.items, true);
        this.cache = new Map;
        this.keysAndOrder = { 'default': 1 };
    }
    List.prototype.setSort = function (obj) {
        /**
         * Se setea las keys y el modo de ordenamiento (ascendente o descendente).
         */
        this.keysAndOrder = obj;
        /**
         * Si el las keys y el modo ya se solicitaron antes se retorna.
         */
        if (this.cache.has(obj))
            return;
        /**
         * Se guardan las keys para usarlas como criterio de ordenamiento.
         */
        var keys = Object.keys(obj);
        /**
         * Se guardan los valores del modo de ordenamiento;
         * 1 = ascendente; -1 = descendiente;
         */
        var mode = Object.values(obj);
        /**
         * Se ordena tantas veces como keys hayan
         */
        this.result = this.sortBy(keys, mode);
        /**
         * Se guarda en el cache las keys y el modo de ordenamiento, y el resultado del ordenamiento
         */
        this.cache.set(obj, this.result);
    };
    // public orderBy(sorted: ProductInterface[], order?: 'desc' | 'asc'): ProductInterface[] {
    //   return (order==='desc')
    //     ? sorted.reverse()
    //     : sorted
    // }
    List.prototype.sortBy = function (keys, mode) {
        var _this = this;
        var i = 0;
        return __spreadArray([], this.result, true).sort(function (a, b) { return _this.compareBy({ a: a, b: b, keys: keys, mode: mode, i: i }); });
    };
    /**
     * Compara dos objetos con la key o keys dadas
     * Si los valores de la propiedad son iguales se llama nuevamente a la funcion comparando la siguiente propiedad
     * Si la siguiente propiedad no existe se devuelve 0
     */
    List.prototype.compareBy = function (_a) {
        var a = _a.a, b = _a.b, keys = _a.keys, mode = _a.mode, i = _a.i;
        if ((a)[keys[i]] > (b)[keys[i]])
            return 1 * mode[i];
        if ((a)[keys[i]] < (b)[keys[i]])
            return -1 * mode[i];
        i++;
        if (!keys[i])
            return 0;
        return this.compareBy({ a: a, b: b, keys: keys, mode: mode, i: i });
    };
    List.prototype.get = function () {
        return this.cache.get(this.keysAndOrder);
    };
    return List;
}());
var Catalogue = /** @class */ (function (_super) {
    __extends(Catalogue, _super);
    function Catalogue() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Catalogue.prototype.add = function (p) {
        this.items = p;
    };
    return Catalogue;
}(List));
exports["default"] = Catalogue;
var catalogue = new Catalogue(data);
catalogue.setSort({
    'title': OrderMode.asc,
    'author': OrderMode.asc,
    'price': OrderMode.asc
});
console.log("\n_____________________________________________________\n__ DISORDERED PRODUCTS:\n_____________________________________________________\n");
console.table(data);
console.log("\n_____________________________________________________\n__ ORDERED PRODUCTS:\n_____________________________________________________\n");
console.table(catalogue.get());
