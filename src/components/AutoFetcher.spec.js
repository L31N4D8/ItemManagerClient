import React from "react"
import { expect } from "chai"
import { shallow } from "enzyme"
import sinon from "sinon"

import AutoFetcher from "./AutoFetcher"

describe("<AutoFetcher />", () => {

    it("renders children", () => {
        const clock = sinon.useFakeTimers()
        const children = <p>child</p>

        const wrapper = shallow(<AutoFetcher children={children} />)
        expect(wrapper.containsMatchingElement(children)).to.be.equal(true)

        clock.restore()
    })

    it("simulates fetch call on mount and refetches after a minute", () => {
        const clock = sinon.useFakeTimers()
        const fetch = sinon.spy()

        shallow(<AutoFetcher fetch={fetch} />)
        expect(fetch).to.have.property('callCount', 1);

        clock.tick(60000)
        expect(fetch).to.have.property('callCount', 2);

        clock.restore()
    })
})

