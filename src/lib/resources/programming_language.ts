import {Resource} from "./resource";

export class ProgrammingLanguage implements Resource {

    public static fromJson(json: string): ProgrammingLanguage {
        const parsed = JSON.parse(json, function(key, value) {
            if (key == "id") {
                return Number.parseInt(value);
            }
            return value;
        });
        return new ProgrammingLanguage(parsed.id, parsed.name, parsed.extension);
    }
    public id: number;
    public name: string;
    public extension: string;

    constructor(id: number, name: string, extension: string) {
        this.id = id;
        this.name = name;
        this.extension = extension;
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
