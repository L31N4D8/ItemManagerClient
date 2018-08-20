import column from "./column"
import {
    COLUMN_CHANGE,
    ITEM_ADDED
} from "../constants"

describe("column reducer", () => {
    it(`should return uppercase action column on COLUMN_CHANGE`, () => expect(column(null, { type: COLUMN_CHANGE, column: "a"})).to.equal("A"))
    it(`should return empty string on ITEM_ADDED`, () => expect(column(null, { type: ITEM_ADDED })).to.equal(""))
})