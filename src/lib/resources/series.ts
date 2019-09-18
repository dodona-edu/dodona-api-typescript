import { Resource } from "./resource";

/**
 * A series on Dodona.
 */
export class Series extends Resource{
	private readonly deadline: Date;

	private readonly description: string;
	private readonly exercisesUrl: string;
	private readonly name: string;
	private readonly order: number;

	/**
	 * SeriesImpl constructor.
	 *
	 * @param deadline     the optional deadline
	 * @param description  the description
	 * @param exercisesUrl url to fetch exercises
	 * @param id           the id
	 * @param name         the name
	 * @param order        the order
	 * @param url          the url
	 */
	constructor(deadline: Date,
	            description: string,
	            exercisesUrl: string,
	            id: number,
	            name: string,
	            order: number,
	            url: string) {
		super(id, url);
		this.deadline = deadline;
		this.description = description;
		this.exercisesUrl = exercisesUrl;
		this.name = name;
		this.order = order;
	}

	public compareTo(o: Series): number {
		return this.order - o.getOrder();
	}

	public getDeadline(): Date {
		return this.deadline;
	}

	public getDescription(): string {
		return this.description; // .filter(s -> !s.isEmpty());
	}

    public getExercisesUrl(): string {
		return this.exercisesUrl;
	}

	public getName(): string {
		return this.name;
	}

	public getOrder(): number {
		return this.order;
	}

	public getUrl(): string {
		return this.url.replace(".json", "");
	}

	public toString(): string {
		return `Series{id=${this.id}, name=${this.name}}`;
	}

	static fromJSON(json :SeriesJSON|string) :Series{
		if (typeof json === "string"){
			return JSON.parse(json, Series.reviver);
		}
		return new Series(new Date(json.deadline),
						  json.description,
						  json.exercises,
						  json.id,
						  json.name,
						  json.order,
						  json.url);
	}

	static reviver(key :string, value :any) :any {
		return key === "" ? Series.fromJSON(value) : value;
	}
}

export interface SeriesJSON{
	deadline: string,
	description: string,
	exercises: string,
	id: number,
	name: string,
	order: number,
	url: string
}