"use strict";
exports.__esModule = true;
exports.Notebook = void 0;
var Notebook = /** @class */ (function () {
    function Notebook() {
        var today = new Date();
        var day = today.getDate();
        var month = today.getMonth() + 1;
        var year = today.getFullYear();
        this.consultationDate = day + "/" + month + "/" + year;
    }
    Notebook.prototype.setCode = function (c) {
        this.code = c;
    };
    Notebook.prototype.getCode = function () {
        return this.code;
    };
    Notebook.prototype.setNoteList = function (nl) {
        this.noteList = nl;
    };
    Notebook.prototype.getNoteList = function () {
        return this.noteList;
    };
    Notebook.prototype.addNote = function (n) {
        this.noteList.push(n);
    };
    Notebook.prototype.getNoteListFilter = function (category, author) {
        var filterNoteList = [];
        if (category.trim().length > 0 && author.trim().length > 0) {
            filterNoteList = this.noteList.filter(function (x) { return x.getCategory().toLowerCase() == category.toLowerCase() && (x.getAuthor().getName().toLowerCase().includes(author.toLowerCase()) || x.getAuthor().getSurname().toLowerCase().includes(author.toLowerCase())); });
        }
        else if (category.trim().length > 0 && author.trim().length == 0) {
            filterNoteList = this.noteList.filter(function (x) { return x.getCategory().toLowerCase().includes(category.toLowerCase()); });
        }
        else if (category.trim().length == 0 && author.trim().length > 0) {
            filterNoteList = this.noteList.filter(function (x) { return x.getAuthor().getName().toLowerCase().includes(author.toLowerCase()) || x.getAuthor().getSurname().toLowerCase().includes(author.toLowerCase()); });
        }
        else {
            return this.noteList;
        }
        return filterNoteList;
    };
    return Notebook;
}());
exports.Notebook = Notebook;
