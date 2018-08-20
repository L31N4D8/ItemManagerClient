import React from "react"
import { expect } from "chai"
import { shallow } from "enzyme"
import sinon from "sinon"
import { Tab } from "react-toolbox/lib/tabs"

import Navigation from "./Navigation"

describe("<Navigation />", () => {
    it("renders two <Tab /> components", () => {
        const wrapper = shallow(<Navigation />)
        expect(wrapper.find(Tab)).to.have.length(2)
    })

    it("has an index of 0 if pathname is not /log", () => {
        const wrapper = shallow(<Navigation pathname={"/notlog"} />)
        expect(wrapper.prop("index")).to.be.equal(0)
    })

    it("has an index of 1 if pathname is /log", () => {
        const wrapper = shallow(<Navigation pathname={"/log"} />)
        expect(wrapper.prop("index")).to.be.equal(1)
    })

    it("simulates onAddItemClick event", () => {
        const onClick = sinon.spy()
        const wrapper = shallow(<Navigation onAddItemClick={onClick} />)
        wrapper.find(Tab).find({ label: "Add an Item" }).simulate("click")
        expect(onClick).to.have.property("callCount", 1)
    })

    it("simulates onLogClick event", () => {
        const onClick = sinon.spy()
        const wrapper = shallow(<Navigation onLogClick={onClick} />)
        wrapper.find(Tab).find({ label: "Log" }).simulate("click")
        expect(onClick).to.have.property("callCount", 1)
    })

})