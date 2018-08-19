import { connect } from "react-redux"
import Item from "../components/Item"
import { deleteItem } from "../actions"

export default connect(
    null, 
    (dispatch, props) => ({ onDelete: () => dispatch(deleteItem(props.item.id)) })
)(Item)