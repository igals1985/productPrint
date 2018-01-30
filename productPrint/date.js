var BasicDate = /** @class */ (function () {
    function BasicDate() {
    }
    Object.defineProperty(BasicDate.prototype, "day", {
        get: function () {
            return this._day;
        },
        set: function (x) {
            if (x >= 1 && x <= 31) {
                this._day = Math.floor(x);
            }
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(BasicDate.prototype, "year", {
        get: function () {
            return this._year;
        },
        set: function (x) {
            if (x >= 2020 && x <= 2050) {
                this._year = Math.floor(x);
            }
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(BasicDate.prototype, "mount", {
        get: function () {
            return this._mount;
        },
        set: function (x) {
            if (x >= 1 && x <= 12) {
                this._mount = Math.floor(x);
            }
        },
        enumerable: true,
        configurable: true
    });
    BasicDate.prototype.toString = function () {
        return "date:" + this.day + "." + this.day + "." + this.year + "    ";
    };
    return BasicDate;
}());
//# sourceMappingURL=date.js.map