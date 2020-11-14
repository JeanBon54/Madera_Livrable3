"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
exports.SearchingCommercial = exports.Commercial = void 0;
var Commercial = /** @class */ (function () {
    function Commercial() {
    }
    return Commercial;
}());
exports.Commercial = Commercial;
var SearchingCommercial = /** @class */ (function (_super) {
    __extends(SearchingCommercial, _super);
    function SearchingCommercial() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    return SearchingCommercial;
}(Commercial));
exports.SearchingCommercial = SearchingCommercial;
//# sourceMappingURL=Commercial.js.map