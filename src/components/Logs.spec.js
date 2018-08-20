import React from "react"
import { expect } from "chai"
import { shallow } from "enzyme"
import sinon from "sinon"
import { ListItem, ListSubHeader } from "react-toolbox/lib/list"

import Logs from "./Logs"

describe("<Logs />", () => {
    const logs = [
        { date: Date.now(), msg: "log1" },
        { date: Date.now(), msg: "log2" }
    ]

    it("renders a <ListSubHeader /> component", () => {
        const wrapper = shallow(<Logs logs={logs} />)
        expect(wrapper.find(ListSubHeader)).to.have.length(1)
    })

    it("renders two <ListItem /> components", () => {
        const wrapper = shallow(<Logs logs={logs} />)
        expect(wrapper.find(ListItem)).to.have.length(2)
    })

    it("renders <ListItem /> components with correct props", () => {
        const clock = sinon.useFakeTimers(Date.now()+3600000)
        const wrapper = shallow(<Logs logs={logs} />)
        wrapper.find(ListItem).forEach((node, index) => {
            expect(node.prop("caption")).to.be.equal(logs[index]["msg"])
            expect(node.prop("legend")).to.be.equal("an hour ago")
        })
        clock.restore()
    })
})