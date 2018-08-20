import * as actions from "./"
import {
    ITEM_CHANGE,
    COLUMN_CHANGE,
    SEARCH_CHANGE,
    ITEM_ADDED,
    ITEM_DELETED,
    ITEMS_FETCHED,
    LOGS_FETCHED,
} from "../constants"

describe("actions", () => {
    it(`itemChange should create ITEM_CHANGE`, () => expect(actions.itemChange("item")).to.eql({ type: ITEM_CHANGE, item: "item" }))
    it(`columnChange should create COLUMN_CHANGE`, () => expect(actions.columnChange("column")).to.eql({ type: COLUMN_CHANGE, column: "column" }))
    it(`searchChange should create SEARCH_CHANGE`, () => expect(actions.searchChange("search")).to.eql({ type: SEARCH_CHANGE, search: "search" }))
    it(`itemAdded should create ITEM_ADDED`, () => expect(actions.itemAdded("item")).to.eql({ type: ITEM_ADDED, item: "item" }))
    it(`itemDeleted should create ITEM_DELETED`, () => expect(actions.itemDeleted("id")).to.eql({ type: ITEM_DELETED, id: "id" }))
    it(`itemsFetched should create ITEMS_FETCHED`, () => expect(actions.itemsFetched("items")).to.eql({ type: ITEMS_FETCHED, items: "items" }))
    it(`logsFetched should create LOGS_FETCHED`, () => expect(actions.logsFetched("logs")).to.eql({ type: LOGS_FETCHED, logs: "logs" }))
})