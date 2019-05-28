import { search } from "../../app/service/searchService"
import * as database from "../../conf/database"

describe("Test the removeComment method", () => {
    beforeAll(() => database
            .connect("mongodb://search-challenge-user:search-challenge-pass@docker-alias:27017/search-challenge"))
    beforeEach(() => { return })
    afterEach(() => { return })
    afterAll((done) => database.disconnect(done))

    test("Should return a result when match", async () => {
        const eleico = await search("eleiçõ")
        const mus = await search("mús")
        const polit = await search("polít")

        expect(eleico.hightlights).toHaveLength(1)
        expect(mus.hightlights).toHaveLength(1)
        expect(polit.hightlights).toHaveLength(1)
    })
})
