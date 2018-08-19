import { combineReducers } from "redux"
import item from "./item"
import column from "./column"
import search from "./search"
import items from "./items"
import logs from "./logs"

const rootReducer = combineReducers({
    item,
    column,
    search,
    items,
    logs
})

export default rootReducer