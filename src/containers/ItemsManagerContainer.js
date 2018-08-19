import { connect } from "react-redux"
import ItemsManager from "../components/ItemsManager"
import { itemChange, columnChange, searchChange, addItem, fetchItems } from "../actions"
import { getVisibleItems, getUniqueColumns } from '../selectors'

export default connect(
    state => ({
        item: state.item,
        column: state.column,
        search: state.search,
        items: getVisibleItems(state),
        columns: getUniqueColumns(state)
    }),
    (dispatch, { item, column }) => ({
        fetch: () => dispatch(fetchItems()),
        onItemChange: value => dispatch(itemChange(value)),
        onColumnChange: value => dispatch(columnChange(value)),
        onSearchChange: value => dispatch(searchChange(value)),
        onAddItem: item => dispatch(addItem(item))
    })
)(ItemsManager)