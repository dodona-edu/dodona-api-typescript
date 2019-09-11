/**
 * A series on Dodona.
 */
export class Series {
	private readonly deadline: Date;

	private readonly description: string;
	private readonly exercisesUrl: string;
	private readonly id: number;
	private readonly name: string;
	private readonly order: number;
	private readonly url: string;

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
		this.deadline = deadline;
		this.description = description;
		this.exercisesUrl = exercisesUrl;
		this.id = id;
		this.name = name;
		this.order = order;
		this.url = url;
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

	public getId(): number {
		return this.id;
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
}
