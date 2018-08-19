import {
    ITEM_ADDED,
    ITEM_DELETED,
    ITEMS_FETCHED
} from "../constants"

import { filter } from "lodash"

const initialState = []

export default (state = initialState, action) => {
    switch(action.type) {
        case ITEM_ADDED:
            return [...state, action.item]
        case ITEM_DELETED:
            return filter(state, item => item.id !== action.id)
        case ITEMS_FETCHED:
            return action.items
        default:
            return state
    }
}