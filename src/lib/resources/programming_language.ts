import {Resource} from "./resource";

export class ProgrammingLanguage implements Resource {

    public id: number;
    public name: string;
    public extension: string;

    constructor(id: number, name: string, extension: string) {
        this.id = id;
        this.name = name;
        this.extension = extension;
    }

    public static fromJson(json: ProgrammingLanguageJSON|string): ProgrammingLanguage {
        if (typeof json === "string"){
            return JSON.parse(json, ProgrammingLanguage.reviver);
        }
        return new ProgrammingLanguage(json.id, json.name, json.extension);
    }
    
    static reviver(key :string, value :any) :any{
        return key === "" ? ProgrammingLanguage.fromJson(value) : value;
    }

    public getId(): number {
        return this.id;
    }

    public getUrl(): string {
		return `https://dodona.ugent.be/en/programming_languages/${this.id}.json`;
    }

    public toString(): string {
		return `ProgrammingLanguage{id=${this.id}, name=${this.name}}`;
	}

}

export interface ProgrammingLanguageJSON{
    id: number;
    name: string;
    extension: string;
}