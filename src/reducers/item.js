import {
    ITEM_CHANGE,
    ITEM_ADDED
} from "../constants"

const initialState = ""

export default (state = initialState, action) => {
    switch(action.type) {
        case ITEM_CHANGE:
            return action.item
        case ITEM_ADDED:
            return initialState
        default:
            return state
    }
}