import items from "./items"
import {
    ITEM_ADDED,
    ITEM_DELETED,
    ITEMS_FETCHED
} from "../constants"

describe("items reducer", () => {
    it(`should return array with new item on ITEM_ADDED`, () => expect(items(["item1"], { type: ITEM_ADDED, item: "item2" })).to.eql(["item1", "item2"]))
    it(`should return array with item removed on ITEM_DELETED`, () => expect(items([{ id: 0 }], { type: ITEM_DELETED, id: 0 })).to.eql([]))
    it(`should return items on ITEMS_FETCHED`, () => expect(items(null, { type: ITEMS_FETCHED, items: [1,2,3] })).to.eql([1,2,3]))
})