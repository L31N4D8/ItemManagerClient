import React from "react"
import { Tab, Tabs } from "react-toolbox/lib/tabs"

const Navigation = ({ pathname, onAddItemClick, onLogClick }) => (
    <Tabs fixed inverse index={pathname === "/log" ? 1 : 0}>
        <Tab label="Add an Item" onClick={onAddItemClick}></Tab>
        <Tab label="Log" onClick={onLogClick}></Tab>
    </Tabs>
)

export default Navigation