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
        "id": "v5tgwWfv32te5gf8GcvX",
        "picture": "assets/nft/i8tgeWfv32te5gf8GcvX.jpg",
        "title": "Replicator",
        "author": "Beeple",
        "description": "Lorem ipsum bla bla bla...",
        "price": 4000000,
        "comments": [],
        "category": [
            "most-valuable",
            "colorful"
        ],
        "isAvaliable": true
    },
    {
        "id": "v5tgwWfv32te5gf8GcvX",
        "picture": "assets/nft/i8tgeWfv32te5gf8GcvX.jpg",
        "title": "Replicator",
        "author": "Beeple",
        "description": "Lorem ipsum bla bla bla...",
        "price": 5000000,
        "comments": [],
        "category": [
            "most-valuable",
            "colorful"
        ],
        "isAvaliable": true
    },
    {
        "id": "v5tgwWfv32te5gf8GcvX",
        "picture": "assets/nft/i8tgeWfv32te5gf8GcvX.jpg",
        "title": "Replicator",
        "author": "Beeple",
        "description": "Lorem ipsum bla bla bla...",
        "price": 3000000,
        "comments": [],
        "category": [
            "most-valuable",
            "colorful"
        ],
        "isAvaliable": true
    },
    {
        "id": "v5tgwWfv32te5gf8GcvX",
        "picture": "assets/nft/i8tgeWfv32te5gf8GcvX.jpg",
        "title": "Replicator",
        "author": "Aeeple",
        "description": "Lorem ipsum bla bla bla...",
        "price": 4000000,
        "comments": [],
        "category": [
            "most-valuable",
            "colorful"
        ],
        "isAvaliable": true
    },
    {
        "id": "CdeG4by6YE826o0RegX1",
        "picture": "assets/nft/CdeG4by6YE826o0RegX1.png",
        "title": "Replicator",
        "author": "Mas Dog Jones",
        "description": "Lorem ipsum bla bla bla...",
        "price": 4114000,
        "comments": [],
        "category": [
            "most-valuable",
            "strange"
        ],
        "isAvaliable": true
    },
    {
        "id": "RmJ5Di91zS04t21LmuuW",
        "picture": "assets/nft/RmJ5Di91zS04t21LmuuW.png",
        "title": "Everydays - The First 5000 Days",
        "author": "Beeple",
        "description": "Lorem ipsum bla bla bla...",
        "price": 69346250,
        "comments": [],
        "category": [
            "most-valuable",
            "colorful"
        ],
        "isAvaliable": true
    },
    {
        "id": "9EfJ41XbxZ8U5Yfry0lI",
        "picture": "assets/nft/9EfJ41XbxZ8U5Yfry0lI.png",
        "title": "CROSSROAD",
        "author": "Beeple",
        "description": "Lorem ipsum bla bla bla...",
        "price": 6666660,
        "comments": [],
        "category": [
            "colorful",
            "strange"
        ],
        "isAvaliable": true
    },
    {
        "id": "i8tgeWfv32te5gf8GcvX",
        "picture": "assets/nft/i8tgeWfv32te5gf8GcvX.jpg",
        "title": "Ocean Front",
        "author": "Beeple",
        "description": "Lorem ipsum bla bla bla...",
        "price": 6000000,
        "comments": [],
        "category": [
            "most-valuable",
            "colorful"
        ],
        "isAvaliable": true
    },
    {
        "id": "t5y7Id2bRT93CxZXuQaB",
        "picture": "assets/nft/t5y7Id2bRT93CxZXuQaB.png",
        "title": "World Wide Web source code",
        "author": "Sir Tim Berners-Lee",
        "description": "Lorem ipsum bla bla bla...",
        "price": 5430000,
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
// catalogue.add(data)
catalogue.setSort({
    'title': OrderMode.asc,
    'author': OrderMode.asc,
    'price': OrderMode.asc
});
console.table(catalogue.get());
