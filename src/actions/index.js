import fetch from "cross-fetch"
import {
    ITEM_CHANGE,
    COLUMN_CHANGE,
    SEARCH_CHANGE,
    ITEM_ADDED,
    ITEM_DELETED,
    ITEMS_FETCHED,
    LOGS_FETCHED,
} from "../constants"

export const BadResponseError = new Error("Bad response from server")

export const itemChange = item => ({ type: ITEM_CHANGE, item })
export const columnChange = column => ({ type: COLUMN_CHANGE, column })
export const searchChange = search => ({ type: SEARCH_CHANGE, search })

export const itemAdded = item => ({ type: ITEM_ADDED, item })
export const addItem = item => async dispatch => {
    const response = await fetch(`${process.env.API_URL}/item/add`, {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify(item)
    })
    if (response.status >= 400) {
        throw BadResponseError
    }
    const newItem = await response.json()
    dispatch(itemAdded(newItem))
}

export const itemDeleted = id => ({ type: ITEM_DELETED, id })
export const deleteItem = id => async dispatch => {
    const response = await fetch(`${process.env.API_URL}/item/delete/${id}`, {
        method: "POST"
    })
    if (response.status >= 400) {
        throw BadResponseError
    }
    const item = await response.json()
    dispatch(itemDeleted(item.id))
}

export const itemsFetched = items => ({ type: ITEMS_FETCHED, items })
export const fetchItems = () => async dispatch => {
    const response = await fetch(`${process.env.API_URL}/items`)
    if (response.status >= 400) {
        throw BadResponseError
    }
    const items = await response.json()
    dispatch(itemsFetched(items))
}

export const logsFetched = logs => ({ type: LOGS_FETCHED, logs })
export const fetchLogs = () => async dispatch => {
    const response = await fetch(`${process.env.API_URL}/logs`)
    if (response.status >= 400) {
        throw BadResponseError
    }
    const logs = await response.json()
    dispatch(logsFetched(logs))
}