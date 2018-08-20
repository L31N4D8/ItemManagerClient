import React from "react"
import { expect } from "chai"
import { shallow, mount } from "enzyme"
import sinon from "sinon"
import { IconButton } from "react-toolbox/lib/button"

import Item from "./Item"

describe("<Item />", () => {
    const item = {
        item: "item"
    }

    it("renders with correct props", () => {
        const wrapper = shallow(<Item item={item} />)
        expect(wrapper.prop("caption")).to.be.equal(item.item)
    })

    it("simulates click event", () => {
        const onClick = sinon.spy()
        const wrapper = mount(<Item item={item} onDelete={onClick} />)
        wrapper.find(IconButton).simulate("click")
        expect(onClick).to.have.property("callCount", 1)
    })
})