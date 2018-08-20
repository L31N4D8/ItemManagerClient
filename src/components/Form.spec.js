//         <form onSubmit={event => {
//             event.preventDefault()
//             onAddItem({ item, column })
//         }}>


import React from "react"
import { expect } from "chai"
import { shallow } from "enzyme"
import sinon from "sinon"
import Input from "react-toolbox/lib/input"
import Autocomplete from "react-toolbox/lib/autocomplete"
import { Button } from "react-toolbox/lib/button"

import Form from "./Form"

describe("<Form />", () => {

    it("renders a <Input label=\"Enter Item\" /> component with correct props", () => {
        const item = "item"
        const wrapper = shallow(<Form item={item} />)
        expect(wrapper.find(Input).find({ label: "Enter Item" }).prop("value")).to.be.equal(item)
    })

    it("renders a <Autocomplete/> component with correct props", () => {
        const column = "column"
        const columns = "columns"
        const wrapper = shallow(<Form column={column} columns={columns}/>)
        expect(wrapper.find(Autocomplete).prop("source")).to.be.equal(columns)
        expect(wrapper.find(Autocomplete).prop("value")).to.be.equal(column)
    })

    it("renders a <Button /> component", () => {
        const wrapper = shallow(<Form />)
        expect(wrapper.find(Button)).to.have.length(1)
    })

    it("renders a <Input label=\"Search an Item\" /> component with correct props", () => {
        const search = "search"
        const wrapper = shallow(<Form search={search} />)
        expect(wrapper.find(Input).find({ label: "Search an Item" }).prop("value")).to.be.equal(search)
    })

    it("simulates change event on <Input label=\"Enter Item\" /> ", () => {
        const onChange = sinon.spy()
        const wrapper = shallow(<Form onItemChange={onChange} />)
        wrapper.find(Input).find({ label: "Enter Item" }).simulate("change")
        expect(onChange).to.have.property("callCount", 1)
    })

    it("simulates queryChange event on <Autocomplete/> ", () => {
        const onQueryChange = sinon.spy()
        const wrapper = shallow(<Form onColumnChange={onQueryChange} />)
        wrapper.find(Autocomplete).simulate("queryChange")
        expect(onQueryChange).to.have.property("callCount", 1)
    })

    it("simulates change event on <Autocomplete/> ", () => {
        const onChange = sinon.spy()
        const wrapper = shallow(<Form onColumnChange={onChange} />)
        wrapper.find(Autocomplete).simulate("change")
        expect(onChange).to.have.property("callCount", 1)
    })

    it("simulates change event on <Input label=\"Search an Item\" /> ", () => {
        const onChange = sinon.spy()
        const wrapper = shallow(<Form onSearchChange={onChange} />)
        wrapper.find(Input).find({ label: "Search an Item" }).simulate("change")
        expect(onChange).to.have.property("callCount", 1)
    })

    it("simulates submit event on <form /> with correct props", () => {
        const item = "item"
        const column = "column"
        const onSubmit = sinon.spy()
        const wrapper = shallow(<Form item={item} column={column} onAddItem={onSubmit} />)
        wrapper.find("form").simulate("submit")
        expect(onSubmit).to.have.property("callCount", 1)
        expect(onSubmit.withArgs({item, column }).calledOnce).to.be.equal(true)
    })
})