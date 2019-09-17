jest.mock('node-fetch');

import fetch from 'node-fetch';
import { HttpClient } from "../../lib/http/http_client"
import { SubmissionManager } from "../../lib/managers/submission_manager";
import { Submission } from "../../lib/resources/submission";
import { User } from "../../lib/resources/user";
import { Exercise } from '../../lib/resources/exercise';
import { PartialSubmission } from '../../lib/resources/partial_submission';
import { Series } from '../../lib/resources/series';
import { Course } from '../../lib/resources/course'

const {Response} = jest.requireActual('node-fetch');

describe("Tests SubmissionManager.", () => {
	let client = new HttpClient().authenticate("Q9PS_BpiwUBNcCdGTv_6MRFb_ZZ_f5nz_DFo0rubbhw");
	let resp_json = [{"created_at":"2019-09-13T09:30:20.000+02:00","status":"correct","summary":null,"accepted":true,"id":1547,"url":"http://localhost:3000/nl/submissions/1547.json","user":"http://localhost:3000/nl/users/199.json","exercise":"http://localhost:3000/nl/exercises/1677102205.json","course":"http://localhost:3000/nl/courses/5.json"},{"created_at":"2019-09-13T09:30:19.000+02:00","status":"correct","summary":null,"accepted":true,"id":1435,"url":"http://localhost:3000/nl/submissions/1435.json","user":"http://localhost:3000/nl/users/199.json","exercise":"http://localhost:3000/nl/exercises/2134681055.json","course":"http://localhost:3000/nl/courses/5.json"},{"created_at":"2019-09-13T09:30:19.000+02:00","status":"correct","summary":null,"accepted":true,"id":1430,"url":"http://localhost:3000/nl/submissions/1430.json","user":"http://localhost:3000/nl/users/199.json","exercise":"http://localhost:3000/nl/exercises/926967100.json","course":"http://localhost:3000/nl/courses/5.json"}]
	let user_json = {"id":199,"username":"emile_ziemann","first_name":"Wilbur","last_name":"Barton","email":"wilbur.barton.emile_ziemann@ugent.be","permission":"student","time_zone":"Brussels","lang":"nl","url":"http://localhost:3000/nl/users/199.json","submissions":"http://localhost:3000/nl/users/199/submissions.json","submission_count":3,"correct_exercises":3,"subscribed_courses":[{"id":5,"name":"Closed Test Course","teacher":"Graaf van Rommelgem","color":"deep-purple","year":"2017-2018","visibility":"hidden","registration":"closed","created_at":"2019-09-13T09:29:22.000+02:00","updated_at":"2019-09-13T09:29:22.000+02:00","url":"http://localhost:3000/nl/courses/5.json","series":"http://localhost:3000/nl/courses/5/series.json"}]};
	let user = User.fromJSON(user_json)
	let submission_manager = new SubmissionManager("http://localhost:3000", client, user);

	beforeEach( () => {
		fetch.mockClear();
	})

	it("Test UserManager.ceat(:number).", async () => {
		let resp = {status: 'ok',id: 2213,exercise_id: 1677102205,course_id: 5,url: 'http://localhost:3000/nl/submissions/2213.json'};
		fetch.mockResolvedValue(new Response(JSON.stringify(resp), {status: 200}));
		let submission_id = await submission_manager.createWithIds(5, 110, 1677102205, "code");
		expect(submission_id).toBeTruthy();
		expect(submission_id).toBe(resp.id);
	})

	it("Test UserManager.ceat(:number).", async () => {
		let course = Course.fromJSON({"id":5,"name":"Closed Test Course","teacher":"Graaf van Rommelgem","color":"deep-purple","year":"2017-2018","visibility":"hidden","registration":"closed","created_at":"2019-09-13T09:29:22.000+02:00","updated_at":"2019-09-13T09:29:22.000+02:00","url":"http://localhost:3000/nl/courses/5.json","series":"http://localhost:3000/nl/courses/5/series.json"});
		let exercise = Exercise.fromJSON({"id":1677102205,"name":"ISBN","description_format":"html","boilerplate":null,"programming_language":{"id":1,"name":"python","editor_name":"python","extension":"txt","created_at":"2019-09-13T09:29:52.000+02:00","updated_at":"2019-09-13T09:29:52.000+02:00"},"last_solution_is_best":true,"has_solution":true,"has_correct_solution":true,"description":"\u003chtml\u003e\n  \u003chead\u003e\n    \u003cmeta content=\"text/html; charset=utf-8\" http-equiv=\"content-type\"\u003e\n  \u003c/head\u003e\n  \u003cbody\u003e\n    \u003cp\u003eBinnen het ISBN-10 (\u003ci\u003eInternational Standard Book Numbering\u003c/i\u003e) systeem\n      dat tot eind 2006 gebruikt werd, kreeg elk boek een unieke code toegewezen\n      die bestaat uit 10 cijfers. De eerste 9 daarvan geven informatie over het\n      boek zelf, terwijl het laatste louter een controlecijfer is dat dient om\n      foutieve ISBN-10 codes te detecteren.\u003c/p\u003e\n    \u003cdiv class=\"dodona-centered-group\"\u003e \u003cimg alt=\"ISBN\" data-caption=\" \u0026lt;div class=\u0026quot;thumbcaption\u0026quot;\u0026gt; ISBN in tekst en streepjescode\u0026lt;/div\u0026gt; \"\n        src=\"media/ISBN.gif\" title=\"ISBN\" height=\"140\"\u003e \u003c/div\u003e\n    \u003cp\u003eIndien $$x_1, \\ldots, x_9$$ de eerste 9 cijfers van een ISBN-10 code\n      voorstellen, dan wordt het controlecijfer\u0026#160;$$x_{10}$$ als volgt\n      berekend: \\[x_{10} = (x_1+ 2x_2+ 3x_3+ 4x_4+ 5x_5+ 6x_6+ 7x_7+ 8x_8+\n      9x_9)\\!\\!\\!\\!\\mod{11}\\] Het controlecijfer $$x_{10}$$ kan m.a.w. de\n      waarden 0 tot en met 10 aannemen. Gevraagd wordt om een programma te\n      schrijven dat het controlecijfer berekent op basis van de eerste negen\n      cijfers van een ISBN-10 code.\u003c/p\u003e\n    \u003ch3\u003eInvoer\u003c/h3\u003e\n    \u003cp\u003eNegen natuurlijke getallen $$x_1, \\ldots, x_9$$ ($$0 \\leq x_1, \\ldots,\n      x_9 \\leq 9$$), elk op een afzonderlijke regel. Deze stellen de eerste\n      negen cijfers van een gegeven ISBN-10 code voor.\u003c/p\u003e\n    \u003ch3\u003eUitvoer\u003c/h3\u003e\n    \u003cp\u003eE\u0026#233;n regel die een natuurlijk getal bevat: het controlecijfer dat\n      correspondeert met de gegeven cijfers van een ISBN-10 code. Zorg ervoor\n      dat dit natuurlijk getal geen voorloopnullen heeft.\u003c/p\u003e\n    \u003ch3\u003eVoorbeeld\u003c/h3\u003e\n    \u003cp\u003e\u003cstrong\u003eInvoer:\u003c/strong\u003e\u003c/p\u003e\n    \u003cpre\u003e9\n9\n7\n1\n5\n0\n2\n1\n0\u003c/pre\u003e\n    \u003cp\u003e\u003cstrong\u003eUitvoer:\u003c/strong\u003e\u003c/p\u003e\n    \u003cpre\u003e0\u003c/pre\u003e\n    \u003cdiv class=\"hidden-print\"\u003e\n    \u003ch3\u003ePythia spreekt \u0026#8230;\u003c/h3\u003e\n    \u003cp\u003eIn onderstaande video legt Pythia uit hoe je deze opgave kunt aanpakken.\n      Bekijk de video als opstapje naar het oplossen van de oefeningen over \u003ca\n        href=\"https://dodona.ugent.be/nl/exercises/?filter=opgaven/reeks01\"\u003evariabelen,\n        expressies en statements\u003c/a\u003e.\u003c/p\u003e\n    \u003cdiv class=\"dodona-centered-group\"\u003e\u003ciframe src=\"https://www.youtube.com/embed/Ne35kBQNLXg\"\n        allowfullscreen=\"\" frameborder=\"0\" height=\"315\" width=\"560\"\u003e\u003c/iframe\u003e\u003c/div\u003e\n    \u003ch3\u003eEpiloog\u003c/h3\u003e\n    \u003cdiv class=\"dodona-centered-group\"\u003e \u003cimg alt=\"evolution into barcode\" data-caption=\" \u0026lt;div class=\u0026quot;thumbcaption\u0026quot;\u0026gt;Dit is wat er van ons zal worden. Wees dus maar voorbereid.\u0026lt;/div\u0026gt; \"\n        src=\"media/evaluation_barcode.jpg\" title=\"evolution into barcode\" height=\"320px\"\u003e\n    \u003c/div\u003e\n    \u003c/div\u003e\n  \u003c/body\u003e\n\u003c/html\u003e\n","url":"http://localhost:3000/nl/exercises/1677102205.json"});
		let series = Series.fromJSON({"id":110,"name":"Reeks 19","description":"Molestiae quia reiciendis. In expedita quod. Itaque atque eum. Odio voluptatum excepturi. Quos deleniti quod. Est dolorem et. Consequuntur accusantium fugiat. Facilis ut quas. Qui est autem. Nesciunt magni tenetur. Sed impedit aut. Non commodi minus. Hic non quia. Quaerat nulla aut. Magnam enim et. Officiis et voluptate. Officiis ut incidunt. Distinctio ut maxime. Non ut reprehenderit. Autem repellendus perspiciatis. Deserunt iste qui. Maiores ea enim. Deserunt enim rem. Nostrum vitae aut. Veritatis ut qui.","visibility":"open","order":0,"created_at":"2019-09-13T09:30:16.000+02:00","updated_at":"2019-09-13T09:30:16.000+02:00","deadline":null,"url":"http://localhost:3000/nl/series/110.json","exercises":"http://localhost:3000/nl/series/110/exercises.json"});
		let resp = {status: 'ok',id: 2213,exercise_id: 1677102205,course_id: 5,url: 'http://localhost:3000/nl/submissions/2213.json'};
		fetch.mockResolvedValue(new Response(JSON.stringify(resp), {status: 200}));
		let submission_id = await submission_manager.create(course, series, exercise, "code");
		expect(submission_id).toBeTruthy();
		expect(submission_id).toBe(resp.id);
	})

	it("Test UserManager.getAllByUser(:User).", async () => {
		fetch.mockResolvedValue(new Response(JSON.stringify(resp_json), {status: 200}));
		let submissions = await submission_manager.getAllByUser(user);
		expect(submissions).toBeTruthy();
		submissions.forEach(submission => expect(submission).toBeTruthy());
		expect(submissions.length).toBe(3);
	})

	it("Test UserManager.getAllByExercise(:Exercise).", async () => {
		let exercise_json = {"id":1677102205,"name":"ISBN","description_format":"html","boilerplate":null,"programming_language":{"id":1,"name":"python","editor_name":"python","extension":"txt","created_at":"2019-09-13T09:29:52.000+02:00","updated_at":"2019-09-13T09:29:52.000+02:00"},"last_solution_is_best":true,"has_solution":true,"has_correct_solution":true,"description":"\u003chtml\u003e\n  \u003chead\u003e\n    \u003cmeta content=\"text/html; charset=utf-8\" http-equiv=\"content-type\"\u003e\n  \u003c/head\u003e\n  \u003cbody\u003e\n    \u003cp\u003eBinnen het ISBN-10 (\u003ci\u003eInternational Standard Book Numbering\u003c/i\u003e) systeem\n      dat tot eind 2006 gebruikt werd, kreeg elk boek een unieke code toegewezen\n      die bestaat uit 10 cijfers. De eerste 9 daarvan geven informatie over het\n      boek zelf, terwijl het laatste louter een controlecijfer is dat dient om\n      foutieve ISBN-10 codes te detecteren.\u003c/p\u003e\n    \u003cdiv class=\"dodona-centered-group\"\u003e \u003cimg alt=\"ISBN\" data-caption=\" \u0026lt;div class=\u0026quot;thumbcaption\u0026quot;\u0026gt; ISBN in tekst en streepjescode\u0026lt;/div\u0026gt; \"\n        src=\"media/ISBN.gif\" title=\"ISBN\" height=\"140\"\u003e \u003c/div\u003e\n    \u003cp\u003eIndien $$x_1, \\ldots, x_9$$ de eerste 9 cijfers van een ISBN-10 code\n      voorstellen, dan wordt het controlecijfer\u0026#160;$$x_{10}$$ als volgt\n      berekend: \\[x_{10} = (x_1+ 2x_2+ 3x_3+ 4x_4+ 5x_5+ 6x_6+ 7x_7+ 8x_8+\n      9x_9)\\!\\!\\!\\!\\mod{11}\\] Het controlecijfer $$x_{10}$$ kan m.a.w. de\n      waarden 0 tot en met 10 aannemen. Gevraagd wordt om een programma te\n      schrijven dat het controlecijfer berekent op basis van de eerste negen\n      cijfers van een ISBN-10 code.\u003c/p\u003e\n    \u003ch3\u003eInvoer\u003c/h3\u003e\n    \u003cp\u003eNegen natuurlijke getallen $$x_1, \\ldots, x_9$$ ($$0 \\leq x_1, \\ldots,\n      x_9 \\leq 9$$), elk op een afzonderlijke regel. Deze stellen de eerste\n      negen cijfers van een gegeven ISBN-10 code voor.\u003c/p\u003e\n    \u003ch3\u003eUitvoer\u003c/h3\u003e\n    \u003cp\u003eE\u0026#233;n regel die een natuurlijk getal bevat: het controlecijfer dat\n      correspondeert met de gegeven cijfers van een ISBN-10 code. Zorg ervoor\n      dat dit natuurlijk getal geen voorloopnullen heeft.\u003c/p\u003e\n    \u003ch3\u003eVoorbeeld\u003c/h3\u003e\n    \u003cp\u003e\u003cstrong\u003eInvoer:\u003c/strong\u003e\u003c/p\u003e\n    \u003cpre\u003e9\n9\n7\n1\n5\n0\n2\n1\n0\u003c/pre\u003e\n    \u003cp\u003e\u003cstrong\u003eUitvoer:\u003c/strong\u003e\u003c/p\u003e\n    \u003cpre\u003e0\u003c/pre\u003e\n    \u003cdiv class=\"hidden-print\"\u003e\n    \u003ch3\u003ePythia spreekt \u0026#8230;\u003c/h3\u003e\n    \u003cp\u003eIn onderstaande video legt Pythia uit hoe je deze opgave kunt aanpakken.\n      Bekijk de video als opstapje naar het oplossen van de oefeningen over \u003ca\n        href=\"https://dodona.ugent.be/nl/exercises/?filter=opgaven/reeks01\"\u003evariabelen,\n        expressies en statements\u003c/a\u003e.\u003c/p\u003e\n    \u003cdiv class=\"dodona-centered-group\"\u003e\u003ciframe src=\"https://www.youtube.com/embed/Ne35kBQNLXg\"\n        allowfullscreen=\"\" frameborder=\"0\" height=\"315\" width=\"560\"\u003e\u003c/iframe\u003e\u003c/div\u003e\n    \u003ch3\u003eEpiloog\u003c/h3\u003e\n    \u003cdiv class=\"dodona-centered-group\"\u003e \u003cimg alt=\"evolution into barcode\" data-caption=\" \u0026lt;div class=\u0026quot;thumbcaption\u0026quot;\u0026gt;Dit is wat er van ons zal worden. Wees dus maar voorbereid.\u0026lt;/div\u0026gt; \"\n        src=\"media/evaluation_barcode.jpg\" title=\"evolution into barcode\" height=\"320px\"\u003e\n    \u003c/div\u003e\n    \u003c/div\u003e\n  \u003c/body\u003e\n\u003c/html\u003e\n","url":"http://localhost:3000/nl/exercises/1677102205.json"};
		fetch.mockResolvedValue(new Response(JSON.stringify(resp_json), {status: 200}));
		let submissions = await submission_manager.getAllByExercise(Exercise.fromJSON(exercise_json));
		expect(submissions).toBeTruthy();
		submissions.forEach(submission => expect(submission).toBeTruthy());
		expect(submissions.length).toBe(3);
	})
	
	it("Test UserManager.getAllByMeExerciseId(:number).", async () => {
		let exercise_json = {"id":1677102205,"name":"ISBN","description_format":"html","boilerplate":null,"programming_language":{"id":1,"name":"python","editor_name":"python","extension":"txt","created_at":"2019-09-13T09:29:52.000+02:00","updated_at":"2019-09-13T09:29:52.000+02:00"},"last_solution_is_best":true,"has_solution":true,"has_correct_solution":true,"description":"\u003chtml\u003e\n  \u003chead\u003e\n    \u003cmeta content=\"text/html; charset=utf-8\" http-equiv=\"content-type\"\u003e\n  \u003c/head\u003e\n  \u003cbody\u003e\n    \u003cp\u003eBinnen het ISBN-10 (\u003ci\u003eInternational Standard Book Numbering\u003c/i\u003e) systeem\n      dat tot eind 2006 gebruikt werd, kreeg elk boek een unieke code toegewezen\n      die bestaat uit 10 cijfers. De eerste 9 daarvan geven informatie over het\n      boek zelf, terwijl het laatste louter een controlecijfer is dat dient om\n      foutieve ISBN-10 codes te detecteren.\u003c/p\u003e\n    \u003cdiv class=\"dodona-centered-group\"\u003e \u003cimg alt=\"ISBN\" data-caption=\" \u0026lt;div class=\u0026quot;thumbcaption\u0026quot;\u0026gt; ISBN in tekst en streepjescode\u0026lt;/div\u0026gt; \"\n        src=\"media/ISBN.gif\" title=\"ISBN\" height=\"140\"\u003e \u003c/div\u003e\n    \u003cp\u003eIndien $$x_1, \\ldots, x_9$$ de eerste 9 cijfers van een ISBN-10 code\n      voorstellen, dan wordt het controlecijfer\u0026#160;$$x_{10}$$ als volgt\n      berekend: \\[x_{10} = (x_1+ 2x_2+ 3x_3+ 4x_4+ 5x_5+ 6x_6+ 7x_7+ 8x_8+\n      9x_9)\\!\\!\\!\\!\\mod{11}\\] Het controlecijfer $$x_{10}$$ kan m.a.w. de\n      waarden 0 tot en met 10 aannemen. Gevraagd wordt om een programma te\n      schrijven dat het controlecijfer berekent op basis van de eerste negen\n      cijfers van een ISBN-10 code.\u003c/p\u003e\n    \u003ch3\u003eInvoer\u003c/h3\u003e\n    \u003cp\u003eNegen natuurlijke getallen $$x_1, \\ldots, x_9$$ ($$0 \\leq x_1, \\ldots,\n      x_9 \\leq 9$$), elk op een afzonderlijke regel. Deze stellen de eerste\n      negen cijfers van een gegeven ISBN-10 code voor.\u003c/p\u003e\n    \u003ch3\u003eUitvoer\u003c/h3\u003e\n    \u003cp\u003eE\u0026#233;n regel die een natuurlijk getal bevat: het controlecijfer dat\n      correspondeert met de gegeven cijfers van een ISBN-10 code. Zorg ervoor\n      dat dit natuurlijk getal geen voorloopnullen heeft.\u003c/p\u003e\n    \u003ch3\u003eVoorbeeld\u003c/h3\u003e\n    \u003cp\u003e\u003cstrong\u003eInvoer:\u003c/strong\u003e\u003c/p\u003e\n    \u003cpre\u003e9\n9\n7\n1\n5\n0\n2\n1\n0\u003c/pre\u003e\n    \u003cp\u003e\u003cstrong\u003eUitvoer:\u003c/strong\u003e\u003c/p\u003e\n    \u003cpre\u003e0\u003c/pre\u003e\n    \u003cdiv class=\"hidden-print\"\u003e\n    \u003ch3\u003ePythia spreekt \u0026#8230;\u003c/h3\u003e\n    \u003cp\u003eIn onderstaande video legt Pythia uit hoe je deze opgave kunt aanpakken.\n      Bekijk de video als opstapje naar het oplossen van de oefeningen over \u003ca\n        href=\"https://dodona.ugent.be/nl/exercises/?filter=opgaven/reeks01\"\u003evariabelen,\n        expressies en statements\u003c/a\u003e.\u003c/p\u003e\n    \u003cdiv class=\"dodona-centered-group\"\u003e\u003ciframe src=\"https://www.youtube.com/embed/Ne35kBQNLXg\"\n        allowfullscreen=\"\" frameborder=\"0\" height=\"315\" width=\"560\"\u003e\u003c/iframe\u003e\u003c/div\u003e\n    \u003ch3\u003eEpiloog\u003c/h3\u003e\n    \u003cdiv class=\"dodona-centered-group\"\u003e \u003cimg alt=\"evolution into barcode\" data-caption=\" \u0026lt;div class=\u0026quot;thumbcaption\u0026quot;\u0026gt;Dit is wat er van ons zal worden. Wees dus maar voorbereid.\u0026lt;/div\u0026gt; \"\n        src=\"media/evaluation_barcode.jpg\" title=\"evolution into barcode\" height=\"320px\"\u003e\n    \u003c/div\u003e\n    \u003c/div\u003e\n  \u003c/body\u003e\n\u003c/html\u003e\n","url":"http://localhost:3000/nl/exercises/1677102205.json"};
		fetch.mockResolvedValue(new Response(JSON.stringify(resp_json), {status: 200}));
		let submissions = await submission_manager.getAllByMeExerciseId(exercise_json.id);
		expect(submissions).toBeTruthy();
		submissions.forEach(submission => expect(submission).toBeTruthy());
		expect(submissions.length).toBe(3);
	})
	
	it("Test UserManager.getAll(:number).", async () => {
		let exercise_json = {"id":1677102205,"name":"ISBN","description_format":"html","boilerplate":null,"programming_language":{"id":1,"name":"python","editor_name":"python","extension":"txt","created_at":"2019-09-13T09:29:52.000+02:00","updated_at":"2019-09-13T09:29:52.000+02:00"},"last_solution_is_best":true,"has_solution":true,"has_correct_solution":true,"description":"\u003chtml\u003e\n  \u003chead\u003e\n    \u003cmeta content=\"text/html; charset=utf-8\" http-equiv=\"content-type\"\u003e\n  \u003c/head\u003e\n  \u003cbody\u003e\n    \u003cp\u003eBinnen het ISBN-10 (\u003ci\u003eInternational Standard Book Numbering\u003c/i\u003e) systeem\n      dat tot eind 2006 gebruikt werd, kreeg elk boek een unieke code toegewezen\n      die bestaat uit 10 cijfers. De eerste 9 daarvan geven informatie over het\n      boek zelf, terwijl het laatste louter een controlecijfer is dat dient om\n      foutieve ISBN-10 codes te detecteren.\u003c/p\u003e\n    \u003cdiv class=\"dodona-centered-group\"\u003e \u003cimg alt=\"ISBN\" data-caption=\" \u0026lt;div class=\u0026quot;thumbcaption\u0026quot;\u0026gt; ISBN in tekst en streepjescode\u0026lt;/div\u0026gt; \"\n        src=\"media/ISBN.gif\" title=\"ISBN\" height=\"140\"\u003e \u003c/div\u003e\n    \u003cp\u003eIndien $$x_1, \\ldots, x_9$$ de eerste 9 cijfers van een ISBN-10 code\n      voorstellen, dan wordt het controlecijfer\u0026#160;$$x_{10}$$ als volgt\n      berekend: \\[x_{10} = (x_1+ 2x_2+ 3x_3+ 4x_4+ 5x_5+ 6x_6+ 7x_7+ 8x_8+\n      9x_9)\\!\\!\\!\\!\\mod{11}\\] Het controlecijfer $$x_{10}$$ kan m.a.w. de\n      waarden 0 tot en met 10 aannemen. Gevraagd wordt om een programma te\n      schrijven dat het controlecijfer berekent op basis van de eerste negen\n      cijfers van een ISBN-10 code.\u003c/p\u003e\n    \u003ch3\u003eInvoer\u003c/h3\u003e\n    \u003cp\u003eNegen natuurlijke getallen $$x_1, \\ldots, x_9$$ ($$0 \\leq x_1, \\ldots,\n      x_9 \\leq 9$$), elk op een afzonderlijke regel. Deze stellen de eerste\n      negen cijfers van een gegeven ISBN-10 code voor.\u003c/p\u003e\n    \u003ch3\u003eUitvoer\u003c/h3\u003e\n    \u003cp\u003eE\u0026#233;n regel die een natuurlijk getal bevat: het controlecijfer dat\n      correspondeert met de gegeven cijfers van een ISBN-10 code. Zorg ervoor\n      dat dit natuurlijk getal geen voorloopnullen heeft.\u003c/p\u003e\n    \u003ch3\u003eVoorbeeld\u003c/h3\u003e\n    \u003cp\u003e\u003cstrong\u003eInvoer:\u003c/strong\u003e\u003c/p\u003e\n    \u003cpre\u003e9\n9\n7\n1\n5\n0\n2\n1\n0\u003c/pre\u003e\n    \u003cp\u003e\u003cstrong\u003eUitvoer:\u003c/strong\u003e\u003c/p\u003e\n    \u003cpre\u003e0\u003c/pre\u003e\n    \u003cdiv class=\"hidden-print\"\u003e\n    \u003ch3\u003ePythia spreekt \u0026#8230;\u003c/h3\u003e\n    \u003cp\u003eIn onderstaande video legt Pythia uit hoe je deze opgave kunt aanpakken.\n      Bekijk de video als opstapje naar het oplossen van de oefeningen over \u003ca\n        href=\"https://dodona.ugent.be/nl/exercises/?filter=opgaven/reeks01\"\u003evariabelen,\n        expressies en statements\u003c/a\u003e.\u003c/p\u003e\n    \u003cdiv class=\"dodona-centered-group\"\u003e\u003ciframe src=\"https://www.youtube.com/embed/Ne35kBQNLXg\"\n        allowfullscreen=\"\" frameborder=\"0\" height=\"315\" width=\"560\"\u003e\u003c/iframe\u003e\u003c/div\u003e\n    \u003ch3\u003eEpiloog\u003c/h3\u003e\n    \u003cdiv class=\"dodona-centered-group\"\u003e \u003cimg alt=\"evolution into barcode\" data-caption=\" \u0026lt;div class=\u0026quot;thumbcaption\u0026quot;\u0026gt;Dit is wat er van ons zal worden. Wees dus maar voorbereid.\u0026lt;/div\u0026gt; \"\n        src=\"media/evaluation_barcode.jpg\" title=\"evolution into barcode\" height=\"320px\"\u003e\n    \u003c/div\u003e\n    \u003c/div\u003e\n  \u003c/body\u003e\n\u003c/html\u003e\n","url":"http://localhost:3000/nl/exercises/1677102205.json"};
		fetch.mockResolvedValue(new Response(JSON.stringify(resp_json), {status: 200}));
		let submissions = await submission_manager.getAllByMeCourseAndExerciseId(5, exercise_json.id);
		expect(submissions).toBeTruthy();
		submissions.forEach(submission => expect(submission).toBeTruthy());
		expect(submissions.length).toBe(3);
	})

	it("Test UserManager.getAll(:number).", async () => {
		let resp = {"created_at":"2019-09-13T09:30:20.000+02:00","status":"correct","summary":null,"accepted":true,"id":1547,"url":"http://localhost:3000/nl/submissions/1547.json","user":"http://localhost:3000/nl/users/199.json","exercise":"http://localhost:3000/nl/exercises/1677102205.json","course":"http://localhost:3000/nl/courses/5.json"};
		fetch.mockResolvedValue(new Response(JSON.stringify(resp), {status: 200}));
		let submission = await submission_manager.getById(resp.id);
		expect(submission).toBeTruthy();
		expect(submission).toStrictEqual(Submission.fromJSON(resp));
	})

	it("Test UserManager.getAll(:number).", async () => {
		let partialsub_json = {"created_at":"2019-09-13T09:30:20.000+02:00","status":"correct","summary":null,"accepted":true,"id":1547,"url":"http://localhost:3000/nl/submissions/1547.json","user":"http://localhost:3000/nl/users/199.json","exercise":"http://localhost:3000/nl/exercises/1677102205.json","course":"http://localhost:3000/nl/courses/5.json"};
		let resp = {"created_at":"2019-09-13T09:30:20.000+02:00","status":"correct","summary":null,"accepted":true,"id":1547,"url":"http://localhost:3000/nl/submissions/1547.json","user":"http://localhost:3000/nl/users/199.json","exercise":"http://localhost:3000/nl/exercises/1677102205.json","course":"http://localhost:3000/nl/courses/5.json"};
		fetch.mockResolvedValue(new Response(JSON.stringify(resp), {status: 200}));
		let submission = await submission_manager.getByPartialSub(PartialSubmission.fromJSON(partialsub_json));
		expect(submission).toBeTruthy();
		expect(submission).toStrictEqual(Submission.fromJSON(resp));
	})
})