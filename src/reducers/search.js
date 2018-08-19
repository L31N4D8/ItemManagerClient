import {
    SEARCH_CHANGE
} from "../constants"

const initialState = ""

export default (state = initialState, action) => {
    switch(action.type) {
        case SEARCH_CHANGE:
            return action.search
        default:
            return state
    }
}