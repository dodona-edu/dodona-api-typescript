import { Series } from "../../lib/resources/series";

describe("Tests Series.", () => {
    let json = {"id":278,"name":"examen (groep 3)","description":"","visibility":"open","order":3,"created_at":"2016-12-25T14:16:17.000+01:00","updated_at":"2018-11-24T17:12:55.000+01:00","deadline":null,"url":"https://naos.ugent.be/nl/series/278.json","exercises":"https://naos.ugent.be/nl/series/278/exercises.json"};
    let serie = new Series(new Date(json.deadline),
                           json.description,
                           json.exercises,
                           json.id,
                           json.name,
                           json.order,
                           json.url
                           );

    test("Test Series.compareTo(:Series).", () => {
        let other_json = {"id":277,"name":"examen (groep 2)","description":"","visibility":"open","order":4,"created_at":"2016-12-25T14:14:09.000+01:00","updated_at":"2018-11-24T17:12:55.000+01:00","deadline":null,"url":"https://naos.ugent.be/nl/series/277.json","exercises":"https://naos.ugent.be/nl/series/277/exercises.json"};
        let other_serie = new Series(new Date(other_json.deadline),
                                     other_json.description,
                                     other_json.exercises,
                                     other_json.id,
                                     other_json.name,
                                     other_json.order,
                                     other_json.url
                                    );
        expect(serie.compareTo(other_serie)).toBe(-1);
    })

    test("Test Series.getDeadline().", () => {
        expect(serie.getDeadline()).toStrictEqual(new Date(json.deadline));
    })

    test("Test Series.getDescription().", () => {
        expect(serie.getDescription()).toBe(json.description);
    })

    test("Test Series.getExercisesUrl().", () => {
        expect(serie.getExercisesUrl()).toBe(json.exercises);
    })

    test("Test Series.getId().", () => {
        expect(serie.getId()).toBe(json.id);
    })

    test("Test Series.getName().", () => {
        expect(serie.getName()).toBe(json.name);
    })

    test("Test Series.getOrder().", () => {
        expect(serie.getOrder()).toBe(json.order);
    })

    test("Test Series.getUrl().", () => {
        expect(serie.getUrl()).toBe("https://naos.ugent.be/nl/series/278");
    })

    test("Test Series.toString().", () => {
        expect(serie.toString()).toBe(`Series{id=${json.id}, name=${json.name}}`);
    })

    test("Test Series.fromJSON(:SeriesJSON).", () => {
        expect(Series.fromJSON(json)).toStrictEqual(serie);
    })

    test("Test Series.fromJSON(:string).", () => {
        expect(Series.fromJSON(JSON.stringify(json))).toStrictEqual(serie);
    })

})