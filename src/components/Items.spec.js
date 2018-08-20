import React from "react"
import { expect } from "chai"
import { shallow } from "enzyme"

import Items from "./Items"
import ColumnItems from "./ColumnItems"

describe("<Items />", () => {
    const items = [
        { column: "a" },
        { column: "b" },
        { column: "b" },
        { column: "c" },
        { column: "c" },
        { column: "c" }
    ]

    it("renders three <ColumnItems /> components", () => {
        const wrapper = shallow(<Items items={items} />)
        expect(wrapper.find(ColumnItems)).to.have.length(3)
    })

    it("renders message when there are no items", () => {
        const wrapper = shallow(<Items items={[]} />)
        expect(wrapper.containsMatchingElement(<h3>No items</h3>)).to.equal(true)
    })
})