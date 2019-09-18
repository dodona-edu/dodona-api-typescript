import {Resource} from "./resource";

export class ProgrammingLanguage extends Resource {

    public name: string;
    public extension: string;

    constructor(id: number, name: string, extension: string) {
        super(id, `https://dodona.ugent.be/en/programming_languages/${id}.json`);
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

    public toString(): string {
		return `ProgrammingLanguage{id=${this.id}, name=${this.name}}`;
	}

}

export interface ProgrammingLanguageJSON{
    id: number;
    name: string;
    extension: string;
}