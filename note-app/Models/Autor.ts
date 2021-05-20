export class Author{
    private code: Number;
    private name : String;
    private surname : String;
    private birthdate : String;

    public setCode(c: Number){
        this.code = c;
    }

    public getCode(): Number{
        return this.code;
    }

    public setName(n: String){
        this.name = n;
    }

    public getName(): String{
        return this.name;
    }

    public setSurname(s: String){
        this.surname = s;
    }

    public getSurname(): String{
        return this.surname;
    }

    public setBirthdate(b: String){
        this.birthdate = b;
    }

    public getBirthdate(): String{
        return this.birthdate;
    }
}