// const ColumnItems = ({ name, items }) => (
//     <List className={styles.list}>
//         <ListSubHeader caption={`Column ${name}`} />
//         { map(items, (item, index) => <ItemContainer key={index} item={item} /> ) }
//     </List>
// )
import React from "react"
import { expect } from "chai"
import { shallow } from "enzyme"
import { ListSubHeader } from "react-toolbox/lib/list"

import ColumnItems from "./ColumnItems"
import ItemContainer from "../containers/ItemContainer"

describe("<ColumnItems />", () => {
    const props = {
        name: "name",
        items: [1,2,3]
    }

    it("renders a <ListSubHeader /> component with correct caption", () => {
        const wrapper = shallow(<ColumnItems {...props} />)
        expect(wrapper.find(ListSubHeader)).to.have.length(1)
        expect(wrapper.find(ListSubHeader).prop("caption")).to.be.equal(`Column ${props.name}`)
    })

    it("renders three <ItemContainer /> components", () => {
        const wrapper = shallow(<ColumnItems {...props} />)
        expect(wrapper.find(ItemContainer)).to.have.length(3)
    })
})