import {
    LOGS_FETCHED
} from "../constants"

const initialState = []

export default (state = initialState, action) => {
    switch(action.type) {
        case LOGS_FETCHED:
            return action.logs
        default:
            return state
    }
}