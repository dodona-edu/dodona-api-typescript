import { CourseColor, CourseColorEnum } from "../data/course_color";
import { compare } from "./helperfunctions";

/**
 * A course on Dodona.
 */
export class Course {
	private readonly color: CourseColorEnum;
	private readonly id: number;
	private readonly name: string;
	private readonly seriesUrl: string;

	private readonly teacher: string;

	private readonly url: string;
	private readonly year: string;

	/**
	 * CourseImpl constructor.
	 *
	 * @param color     the color of the course
	 * @param id        the id
	 * @param name      the name
	 * @param seriesUrl url to fetch series
	 * @param teacher   the teacher
	 * @param url       the url
	 * @param year      the academic year
	 */
	constructor(color: CourseColorEnum,
				id: number,
				name: string,
				seriesUrl: string,
				teacher: string,
				url: string,
	            year: string) {
		this.color = color;
		this.id = id;
		this.name = name;
		this.seriesUrl = seriesUrl;
		this.teacher = teacher;
		this.url = url;
		this.year = year;
	}

	public compareTo(o: Course): number {
		const compareYear: number = compare<string>(this.year, o.getYear());
		return compareYear != 0 ? compareYear : compare<string>(this.name.toLowerCase(), o.getName().toLowerCase());
	}

	public getColor(): CourseColorEnum {
		return this.color;
	}

	public getId(): number {
		return this.id;
	}

	public getName(): string {
		return this.name;
	}

    public getSeriesUrl(): string {
		return this.seriesUrl;
	}

	public getTeacher(): string {
		return this.teacher;
	}

	public getUrl(): string {
		return this.url.replace(".json", "");
	}

    public getYear(): string {
		return this.year;
	}

    public toString(): string {
		return `Course{id=${this.id}, name=${this.name}}`;
	}

	/**
	 * Parses the id of a course from the url.
	 *
	 * @param url the url to the course
	 * @return the course id
	 */
	static getId(url :string) :number{
		let pattern :RegExp = new RegExp("courses/([0-9]+)");
		return Number.parseInt(url.match(pattern)[1]);
	}

	static fromJSON(json :CourseJSON|string) :Course{
		if (typeof json === "string"){
			return JSON.parse(json, Course.reviver);
		}
		return new Course(CourseColor.byName(json.color),
						  json.id,
						  json.name,
						  json.seriesUrl,
						  json.teacher,
						  json.url,
						  json.year);
	}

	static reviver(key :string, value :any) :any {
		return key === "" ? Course.fromJSON(value) : value;
	}
}

export interface CourseJSON{
	color: string;
	id: number;
	name: string;
	seriesUrl: string;
	teacher: string;
	url: string;
    year: string;
}