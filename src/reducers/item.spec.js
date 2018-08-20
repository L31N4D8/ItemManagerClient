import item from "./item"
import {
    ITEM_CHANGE,
    ITEM_ADDED
} from "../constants"

describe("item reducer", () => {
    it(`should return item on ITEM_CHANGE`, () => expect(item(null, { type: ITEM_CHANGE, item: "item"})).to.equal("item"))
    it(`should return empty string on ITEM_ADDED`, () => expect(item(null, { type: ITEM_ADDED })).to.equal(""))
})