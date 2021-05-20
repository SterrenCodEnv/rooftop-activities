import { Note } from './Note';
export class Notebook{
    constructor(){
        const today = new Date();
        const day = today.getDate();
        const month = today.getMonth() + 1;
        const year = today.getFullYear();
        this.consultationDate = `${day}/${month}/${year}`;
    }

    private code : Number;
    private consultationDate : String;
    private noteList: Note[];

    public setCode(c: Number){
        this.code = c;
    }

    public getCode(): Number{
        return this.code;
    }
    
    public setNoteList(nl: Note[]){
        this.noteList = nl;
    }

    public getNoteList(): Note[]{
        return this.noteList;
    }

    addNote(n: Note){
        this.noteList.push(n);
    }

    getNoteListFilter(category: string, author: string){
        let filterNoteList = [];
        if(category.trim().length > 0 && author.trim().length > 0){
            filterNoteList = this.noteList.filter(x => x.getCategory().toLowerCase() == category.toLowerCase() && (x.getAuthor().getName().toLowerCase().includes(author.toLowerCase()) || x.getAuthor().getSurname().toLowerCase().includes(author.toLowerCase())));
        }else if(category.trim().length > 0 && author.trim().length == 0){
            filterNoteList = this.noteList.filter(x => x.getCategory().toLowerCase().includes(category.toLowerCase()));
        }else if(category.trim().length == 0 && author.trim().length > 0){
            filterNoteList = this.noteList.filter(x => x.getAuthor().getName().toLowerCase().includes(author.toLowerCase()) || x.getAuthor().getSurname().toLowerCase().includes(author.toLowerCase()));
        }else{
            return this.noteList;
        }
        return filterNoteList;
    }
}