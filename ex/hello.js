define(["require", "exports"], function (require, exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    function hello(name) {
        if (name === void 0) { name = 'toto'; }
        console.log('hello', name);
    }
    exports.hello = hello;
});
