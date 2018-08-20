import _ from "lodash"
import { getVisibleItems, getUniqueColumns } from "./"

describe("selectors", () => {
    const items = [
        { item: "ab", column: "b" },
        { item: "bc", column: "a" },
        { item: "cd", column: "a" }
    ]

    describe("getVisibleItems", () => {
        it(`should return all items when search is empty`, () => {
            const search = ""
            expect(getVisibleItems({ items, search })).to.eql(items)
        })
        
        it(`should return matching items when search is not empty`, () => {
            const search = "b"
            expect(getVisibleItems({ items, search })).to.eql([
                { item: "ab", column: "b" },
                { item: "bc", column: "a" }
            ])
        })
    })

    describe("getUniqueColumns", () => {
        it(`should return sorted unique columns`, () => {
            expect(getUniqueColumns({ items })).to.eql(["a", "b"])
        })
    })
})