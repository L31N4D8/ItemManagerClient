import { createSelector } from "reselect"
import { sortBy, uniq, map, filter } from "lodash"

const getItems = state => state.items
const getSearch = state => state.search

export const getVisibleItems = createSelector(
  [getItems, getSearch],
  (items, search) => {
      if (search) {
        const regExp = new RegExp(search, "i")
        return filter(items, item => regExp.test(item.item))
      } else {
        return items
      }
  }
)

export const getUniqueColumns = createSelector(
  [getItems],
  items => sortBy(uniq(map(items, "column")))
)