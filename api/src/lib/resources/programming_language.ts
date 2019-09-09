import {Resource} from "./resource";

export class ProgrammingLanguage implements Resource {
    id: number;
    name: string;
    extension: string;

    constructor(id: number, name: string, extension: string){
        this.id = id;
        this.name = name;
        this.extension = extension;
    }

    static fromJson(json: string) : ProgrammingLanguage {
        const parsed = JSON.parse(json, function(key, value){
            if(key == "id"){
                return Number.parseInt(value);
            }
            return value;
        })
        return new ProgrammingLanguage(parsed["id"], parsed["name"], parsed["extension"]);
    }

    getId() : number {
        return this.id;
    }

    getUrl() : string {
		return `https://dodona.ugent.be/en/programming_languages/${this.id}.json`;
    }
    
    toString() : string {
		return `ProgrammingLanguage{id=${this.id}, name=${this.name}}`;
	}

}