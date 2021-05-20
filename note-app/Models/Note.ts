import { Author } from './Autor';

export class Note {
    private code: Number;
    private title: String;
    private content: String;
    private category: String;
    private author: Author;

    public setCode(c: Number) {
        this.code = c;
    }

    public getCode(): Number {
        return this.code;
    }

    public setTitle(t: String) {
        this.title = t;
    }

    public getTitle(): String {
        return this.title;
    }

    public setContent(c: String) {
        this.content = c;
    }

    public getContent(): String {
        return this.content;
    }

    public setCategory(c: String) {
        this.category = c;
    }

    public getCategory(): String {
        return this.category;
    }

    public setAuthor(a: Author) {
        this.author = a;
    }

    public getAuthor(): Author {
        return this.author;
    }

}