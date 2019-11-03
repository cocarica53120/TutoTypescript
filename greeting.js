define(["require", "exports"], function (require, exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    var Greeting = /** @class */ (function () {
        function Greeting() {
        }
        Greeting.prototype.greet = function () {
            console.log("Hello World!!!");
        };
        return Greeting;
    }());
    var obj = new Greeting();
    obj.greet();
});
// hello();
