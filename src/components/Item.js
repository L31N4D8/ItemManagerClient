import React from "react"
import { ListItem } from "react-toolbox/lib/list"
import { IconButton } from "react-toolbox/lib/button"

const Item = ({ item, onDelete }) => (
    <ListItem
        caption={item.item}
        rightIcon={<IconButton icon="close" onClick={onDelete}/>} />
)

export default Item