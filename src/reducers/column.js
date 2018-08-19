import {
    COLUMN_CHANGE,
    ITEM_ADDED
} from "../constants"

const initialState = ""

export default (state = initialState, action) => {
    switch(action.type) {
        case COLUMN_CHANGE:
            return action.column.toUpperCase()
        case ITEM_ADDED:
            return initialState
        default:
            return state
    }
}