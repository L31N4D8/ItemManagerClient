import React from "react"
import { List, ListSubHeader } from "react-toolbox/lib/list"
import ItemContainer from "../containers/ItemContainer"
import { map } from "lodash"
import styles from "./List.css"

const ColumnItems = ({ name, items }) => (
    <List className={styles.list}>
        <ListSubHeader caption={`Column ${name}`} />
        { map(items, (item, index) => <ItemContainer key={index} item={item} /> ) }
    </List>
)

export default ColumnItems