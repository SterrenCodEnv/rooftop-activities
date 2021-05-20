"use strict";
exports.__esModule = true;
exports.Author = void 0;
var Author = /** @class */ (function () {
    function Author() {
    }
    Author.prototype.setCode = function (c) {
        this.code = c;
    };
    Author.prototype.getCode = function () {
        return this.code;
    };
    Author.prototype.setName = function (n) {
        this.name = n;
    };
    Author.prototype.getName = function () {
        return this.name;
    };
    Author.prototype.setSurname = function (s) {
        this.surname = s;
    };
    Author.prototype.getSurname = function () {
        return this.surname;
    };
    Author.prototype.setBirthdate = function (b) {
        this.birthdate = b;
    };
    Author.prototype.getBirthdate = function () {
        return this.birthdate;
    };
    return Author;
}());
exports.Author = Author;
