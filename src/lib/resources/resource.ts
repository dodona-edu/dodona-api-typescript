export abstract class Resource {
    protected readonly id :number;
    protected readonly url :string;

    constructor(id :number, url :string){
        this.id = id;
        this.url = url;
    }

    getId() :number{
        return this.id;
    }
    getUrl() :string{
        return this.url;
    }
    Equals(other :Resource) :boolean{
        return this.id === other.getId();
    }
}
