import { ExerciseStatus } from "../data/exercise_status";
import { compare } from "../helperfunctions";
import { ProgrammingLanguage, ProgrammingLanguageJSON } from "./programming_language";
import { Resource } from "./resource";

/**
 * A exercise on Dodona.
 */
export class Exercise implements Resource{
	private readonly boilerplate: string;

	private readonly has_correct_solution: boolean;
	private readonly has_solution: boolean;
	private readonly last_solution_is_best: boolean;

	private readonly id: number;

	private readonly description: string;
	private readonly description_format: string;
	private readonly name: string;

	private readonly programming_language: ProgrammingLanguage;

	private readonly status: ExerciseStatus;

	private readonly url: string;

	/**
	 * ExerciseImpl constructor.
	 *
	 * @param boilerplate         the boilerplate code
	 * @param description         the description
	 * @param description_format   the description format
	 * @param has_correct_solution  true if the exercise has a correct submission
	 * @param has_solution         true if the exercise has a submission
	 * @param id                  the id
	 * @param last_solution_is_best  true if the last submission was correct
	 * @param name                the name
	 * @param programming_language the programming language
	 * @param url                 the url
	 */
	constructor(boilerplate: string,
	            description: string,
	            description_format: string,
	            has_correct_solution: boolean,
	            has_solution: boolean,
	            id: number,
	            last_solution_is_best: boolean,
	            name: string,
				programming_language: ProgrammingLanguage,
				url: string) {
		this.boilerplate = boilerplate;
		this.description = description;
		this.description_format = description_format;
		this.has_correct_solution = has_correct_solution;
		this.has_solution = has_solution;
		this.id = id;
		this.last_solution_is_best = last_solution_is_best;
		this.name = name;
		this.programming_language = programming_language;
		this.status = ExerciseStatus.fromValues(has_correct_solution, has_solution, last_solution_is_best);
		this.url = url;
	}

	public compareTo(o: Exercise): number {
		return compare(this.name.toLowerCase(), o.getName().toLowerCase());
	}
	public getBoilerplate(): string {
		return this.boilerplate;
	}

	public getDescription(): string {
		return this.description;
	}

	public getDescriptionFormat(): string {
		return this.description_format;
	}

	public hasCorrectSolution(): boolean {
		return this.has_correct_solution;
	}

	public hasSolution(): boolean {
		return this.has_solution;
	}

	public getId(): number {
		return this.id;
	}

	public getName(): string {
		return this.name;
	}

	public getProgrammingLanguage(): ProgrammingLanguage {
		return this.programming_language;
	}

	public getStatus(): ExerciseStatus {
		return this.status;
	}

	public getUrl(): string {
		return this.url.replace(".json", "");
	}

	public lastSolutionIsBest(): boolean {
		return this.last_solution_is_best;
	}

	public toString(): string {
		return `Exercise{id=${this.id}, name=${this.name}, status=${this.status}}`;
	}

	/**
	 * Parses the id of an exercise from the url.
	 *
	 * @param url the url to the exercise
	 * @return the exercise id
	 */
	static getId(url :string) :number|null {
		let pattern :RegExp = new RegExp("exercises/([0-9]+)");
		let match :RegExpMatchArray|null = url.match(pattern);
		return match ? parseInt(match[1]) : null;
	}

	static fromJSON(json: ExerciseJSON|string): Exercise {
		if (typeof json === "string"){
			return JSON.parse(json, Exercise.reviver);
		}
		return new Exercise(json.boilerplate ? json.boilerplate : "", 
							json.description,
							json.description_format,
							json.has_correct_solution,
							json.has_solution,
							json.id,
							json.last_solution_is_best,
							json.name,
							ProgrammingLanguage.fromJson(json.programming_language),
							json.url
							);
	}

	static reviver(key: string, value: any): any {
		return key === "" ? Exercise.fromJSON(value) : value;
	}
}

export interface ExerciseJSON{
	boilerplate :string|null; 
	description :string;
	description_format :string;
	has_correct_solution :boolean;
	has_solution :boolean;
	id :number;
	last_solution_is_best :boolean;
	name :string;
	programming_language :ProgrammingLanguageJSON;
	url :string;
}