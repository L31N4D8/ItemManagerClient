// const ItemsManager = ({ item, column, search, items, columns, fetch, onItemChange, onColumnChange, onSearchChange, onAddItem }) => (
//     <AutoFetcher fetch={fetch}>
//         <Grid fluid className={styles.clear}>
//             <Row>
//                 <Col xs={12} sm={4} md={3} lg={3} className={styles.marginRight}>
//                     <Form
//                         item={item}
//                         column={column}
//                         search={search}
//                         columns={columns}
//                         onItemChange={onItemChange}
//                         onColumnChange={onColumnChange}
//                         onSearchChange={onSearchChange}
//                         onAddItem={onAddItem}
//                         />
//                 </Col>
//                 <Col xs className={styles.clear}>
//                     <Items items={items} />
//                 </Col>
//             </Row>
//         </Grid>
//     </AutoFetcher>
// )

import React from "react"
import { expect } from "chai"
import { shallow } from "enzyme"

import ItemsManager from "./ItemsManager"
import Form from "./Form"
import Items from "./Items"

describe("<ItemsManager />", () => {

    it("renders a <Form /> component with correct props", () => {
        const props = {
            item: "item",
            column: "column",
            search: "search",
            columns: "columns",
            onItemChange: "onItemChange",
            onColumnChange: "onColumnChange",
            onSearchChange: "onSearchChange",
            onAddItem: "onAddItem"
        }
        const wrapper = shallow(<ItemsManager {...props} />)
        expect(wrapper.find(Form).props()).to.deep.equal(props)
    })

    it("renders a <Items /> component with correct props", () => {
        const props = {
            items: "items"
        }
        const wrapper = shallow(<ItemsManager {...props} />)
        expect(wrapper.find(Items).props()).to.deep.equal(props)
    })
})