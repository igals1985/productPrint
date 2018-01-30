var Product = /** @class */ (function () {
    function Product() {
    }
    Object.defineProperty(Product.prototype, "price", {
        get: function () {
            return this._price;
        },
        set: function (x) {
            if (x > 0) {
                this._price = x;
            }
        },
        enumerable: true,
        configurable: true
    });
    Product.prototype.toString = function () {
        return this.fullTime.toString() + "item name:" + this.itemName + "    " + "price:" + this.price + "    ";
    };
    return Product;
}());
//# sourceMappingURL=product.js.map