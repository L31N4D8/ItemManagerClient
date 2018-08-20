import search from "./search"
import {
    SEARCH_CHANGE
} from "../constants"

describe("search reducer", () => {
    it(`should return search on SEARCH_CHANGE`, () => expect(search(null, { type: SEARCH_CHANGE, search: "search"})).to.equal("search"))
})