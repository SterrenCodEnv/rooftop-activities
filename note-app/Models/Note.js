"use strict";
exports.__esModule = true;
exports.Note = void 0;
var Note = /** @class */ (function () {
    function Note() {
    }
    Note.prototype.setCode = function (c) {
        this.code = c;
    };
    Note.prototype.getCode = function () {
        return this.code;
    };
    Note.prototype.setTitle = function (t) {
        this.title = t;
    };
    Note.prototype.getTitle = function () {
        return this.title;
    };
    Note.prototype.setContent = function (c) {
        this.content = c;
    };
    Note.prototype.getContent = function () {
        return this.content;
    };
    Note.prototype.setCategory = function (c) {
        this.category = c;
    };
    Note.prototype.getCategory = function () {
        return this.category;
    };
    Note.prototype.setAuthor = function (a) {
        this.author = a;
    };
    Note.prototype.getAuthor = function () {
        return this.author;
    };
    return Note;
}());
exports.Note = Note;
